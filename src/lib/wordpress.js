const WORDPRESS_API_URL = "https://profici.co.uk/wp-json/wp/v2";

export async function getBlogPosts() {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts`);
    if (!response.ok) {
      throw new Error("Failed to fetch blog posts");
    }
    const posts = await response.json();

    return posts.map((post) => ({
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt?.rendered,
      content: post.content.rendered,
      slug: post.slug,
      date: new Date(post.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      modified: new Date(post.modified).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      featuredImage: post.yoast_head_json?.og_image?.[0]?.url || null,
      author: post.yoast_head_json?.author || "Profici Team",
      readingTime:
        post.yoast_head_json?.twitter_misc?.["Est. reading time"] ||
        "5 minutes",
      categories: post._links["wp:term"]?.[0]?.href || [],
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPost(slug) {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`
    );
    const posts = await response.json();

    if (!posts.length) {
      return null;
    }

    const post = posts[0];
    return {
      id: post.id,
      title: post.title.rendered,
      content: post.content.rendered,
      excerpt: post.excerpt.rendered,
      date: new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      modified: post.modified,
      slug: post.slug,
      featuredImage:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
      author: {
        name: post._embedded?.["author"]?.[0]?.name || "Anonymous",
        avatar: post._embedded?.["author"]?.[0]?.avatar_urls?.["96"] || null,
        description: post._embedded?.["author"]?.[0]?.description || null,
      },
      categories:
        post._embedded?.["wp:term"]?.[0]?.map((cat) => ({
          id: cat.id,
          name: cat.name,
          slug: cat.slug,
        })) || [],
      tags:
        post._embedded?.["wp:term"]?.[1]?.map((tag) => ({
          id: tag.id,
          name: tag.name,
          slug: tag.slug,
        })) || [],
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function getRelatedPosts(currentPostId, categoryIds, limit = 3) {
  console.log("getRelatedPosts called with:", {
    currentPostId,
    categoryIds,
    limit,
  });

  if (!currentPostId) {
    console.error("getRelatedPosts: No currentPostId provided");
    return [];
  }

  try {
    // Build the category parameter if categoryIds is provided
    const categoryParam =
      categoryIds && categoryIds.length > 0
        ? `&categories=${
            Array.isArray(categoryIds) ? categoryIds.join(",") : categoryIds
          }`
        : "";

    console.log("getRelatedPosts: Using category parameter:", categoryParam);

    // Fetch more posts than needed to ensure we have enough after filtering
    const fetchLimit = limit * 2;

    const apiUrl = `${WORDPRESS_API_URL}/posts?_embed&exclude=${currentPostId}${categoryParam}&per_page=${fetchLimit}&orderby=date&order=desc`;
    console.log("getRelatedPosts: Fetching from URL:", apiUrl);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("getRelatedPosts: API response not OK:", {
        status: response.status,
        statusText: response.statusText,
        responseText: errorText,
      });
      throw new Error(
        `Failed to fetch related posts: ${response.status} - ${errorText}`
      );
    }

    const posts = await response.json();
    console.log(`getRelatedPosts: Received ${posts.length} posts from API`);

    // Map and filter the posts
    const filteredPosts = posts
      .filter((post) => post.id !== currentPostId)
      .map((post) => ({
        id: post.id,
        title: post.title.rendered,
        excerpt: post.excerpt.rendered,
        slug: post.slug,
        featuredImage:
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
        date: new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        category:
          post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized",
        categories:
          post._embedded?.["wp:term"]?.[0]?.map((cat) => ({
            id: cat.id,
            name: cat.name,
            slug: cat.slug,
          })) || [],
      }))
      .slice(0, limit);

    console.log(
      `getRelatedPosts: Returning ${filteredPosts.length} filtered posts`
    );
    return filteredPosts;
  } catch (error) {
    console.error("getRelatedPosts: Error:", error);
    return [];
  }
}

export async function getAllPosts(page = 1, perPage = 10) {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?_embed&page=${page}&per_page=${perPage}`
    );
    const posts = await response.json();
    const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0");
    const totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "0");

    return {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title.rendered,
        excerpt: post.excerpt.rendered,
        slug: post.slug,
        featuredImage:
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
        date: new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        category:
          post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized",
        author: {
          name: post._embedded?.["author"]?.[0]?.name || "Anonymous",
          avatar: post._embedded?.["author"]?.[0]?.avatar_urls?.["96"] || null,
        },
      })),
      pagination: {
        currentPage: page,
        totalPages,
        totalPosts,
      },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      posts: [],
      pagination: {
        currentPage: 1,
        totalPages: 0,
        totalPosts: 0,
      },
    };
  }
}

export async function searchPosts(query, page = 1, perPage = 10) {
  try {
    if (!query || query.trim() === "") {
      return {
        posts: [],
        pagination: {
          currentPage: 1,
          totalPages: 0,
          totalPosts: 0,
        },
      };
    }

    const encodedQuery = encodeURIComponent(query);
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?_embed&search=${encodedQuery}&page=${page}&per_page=${perPage}`
    );

    if (!response.ok) {
      throw new Error(`Search request failed with status ${response.status}`);
    }

    const posts = await response.json();
    const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0");
    const totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "0");

    return {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title.rendered,
        excerpt: post.excerpt.rendered,
        slug: post.slug,
        featuredImage:
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
        date: new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        category:
          post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized",
        author: {
          name: post._embedded?.["author"]?.[0]?.name || "Anonymous",
          avatar: post._embedded?.["author"]?.[0]?.avatar_urls?.["96"] || null,
        },
        readingTime: "5 minutes", // Default reading time
      })),
      pagination: {
        currentPage: page,
        totalPages,
        totalPosts,
      },
    };
  } catch (error) {
    console.error("Error searching posts:", error);
    return {
      posts: [],
      pagination: {
        currentPage: 1,
        totalPages: 0,
        totalPosts: 0,
      },
    };
  }
}
