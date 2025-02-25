"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function RelatedPosts({ currentPostId, category }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Debug logging for props
  useEffect(() => {
    console.log("RelatedPosts props:", { currentPostId, category });
  }, [currentPostId, category]);

  useEffect(() => {
    async function fetchRelatedPosts() {
      if (!currentPostId) {
        console.error("RelatedPosts: No currentPostId provided");
        setError("Missing post ID");
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching related posts with params:", {
          currentPostId,
          category: Array.isArray(category) ? category : [category],
        });

        // Fetch all recent posts instead of using the category filter
        // since the WordPress API category filtering isn't working
        const response = await fetch(
          `https://profici.co.uk/wp-json/wp/v2/posts?_embed&per_page=10&exclude=${currentPostId}`
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const allPosts = await response.json();
        console.log(`Fetched ${allPosts.length} posts from API`);

        // Filter posts by category on the client side
        let filteredPosts = allPosts;

        if (category) {
          // Convert category to array if it's not already
          const categoryIds = Array.isArray(category) ? category : [category];

          // Filter posts that have at least one matching category
          filteredPosts = allPosts.filter((post) => {
            const postCategories = post.categories || [];
            return categoryIds.some((catId) =>
              postCategories.includes(Number(catId))
            );
          });

          console.log(
            `Filtered to ${filteredPosts.length} posts with matching categories`
          );
        }

        // Limit to 3 posts
        const limitedPosts = filteredPosts.slice(0, 3);

        // Map the posts to the format we need
        const formattedPosts = limitedPosts.map((post) => ({
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
        }));

        setPosts(formattedPosts);
        console.log("Related posts set:", formattedPosts);
      } catch (err) {
        console.error("Error fetching related posts:", err);
        setError("Failed to load related posts");
      } finally {
        setLoading(false);
      }
    }

    fetchRelatedPosts();
  }, [currentPostId, category]);

  // Debug logging for component state
  useEffect(() => {
    console.log("RelatedPosts state:", {
      currentPostId,
      category,
      postsCount: posts.length,
      loading,
      error,
    });
  }, [currentPostId, category, posts, loading, error]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-md animate-pulse"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 text-center">
        <p className="text-gray-500">No related posts found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-48 bg-gray-100">
                {post.featuredImage ? (
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200"></div>
                )}
              </div>
              <div className="p-6">
                <span className="text-sm text-[#6A6A6A] mb-2 block">
                  {post.category}
                </span>
                <h3
                  className="text-xl font-bold text-black mb-3 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
                <div
                  className="text-[#6A6A6A] line-clamp-3 mb-4 text-sm"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <span className="text-black font-medium inline-flex items-center">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
