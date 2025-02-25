"use client";

import { useEffect, useState, use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SocialShare from "@/app/components/SocialShare";
import RelatedPosts from "@/app/components/RelatedPosts";
import { getBlogPost } from "@/lib/wordpress";
import BlogPostSkeleton from "./BlogPostSkeleton";

export default function BlogPost({ params }) {
  // Unwrap params using React.use()
  const resolvedParams = use(params);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const fetchedPost = await getBlogPost(resolvedParams.slug);
        if (!fetchedPost) {
          setError("Post not found");
        } else {
          setPost(fetchedPost);
        }
      } catch (err) {
        setError("Failed to fetch post");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [resolvedParams.slug]);

  if (loading) {
    return <BlogPostSkeleton />;
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold text-black mb-4">
          {error || "Post Not Found"}
        </h1>
        <p className="text-[#6A6A6A] mb-8 text-center">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/blog"
          className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-all duration-300"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[60vh] bg-black"
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {post.featuredImage ? (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-200"></div>
        )}
      </motion.div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Social Share Sidebar */}
          <div className="hidden lg:block lg:col-span-2">
            <SocialShare
              title={post.title}
              url={typeof window !== "undefined" ? window.location.href : ""}
            />
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-2xl shadow-xl shadow-black/5 p-8 lg:p-12">
              {/* Category and Date */}
              <div className="flex items-center gap-4 mb-6">
                {post.categories?.[0] && (
                  <span className="text-sm font-medium text-[#6A6A6A]">
                    {post.categories[0].name}
                  </span>
                )}
                <span className="text-sm text-[#6A6A6A]">{post.date}</span>
              </div>

              {/* Title */}
              <h1
                className="text-4xl lg:text-5xl font-bold text-black mb-8"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />

              {/* Author */}
              <div className="flex items-center gap-4 mb-12">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  {post.author.avatar && (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-black">Profici</h3>
                  {post.author.description && (
                    <p className="text-sm text-[#6A6A6A]">
                      {post.author.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Content */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-[#6A6A6A] prose-a:text-blue-600 hover:prose-a:text-blue-800"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              {post.tags?.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-black mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag.id}
                        href={`/blog/tag/${tag.slug}`}
                        className="px-4 py-2 bg-gray-100 rounded-full text-sm text-[#6A6A6A] hover:bg-gray-200 transition-colors duration-300"
                      >
                        {tag.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile Social Share */}
              <div className="mt-12 lg:hidden">
                <div className="flex justify-center">
                  <SocialShare
                    title={post.title}
                    url={
                      typeof window !== "undefined" ? window.location.href : ""
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Table of Contents Sidebar */}
        </div>
      </div>

      {/* Related Posts Section */}
      {post.id && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Related Posts</h2>
          <div className="mb-2 text-center text-sm text-gray-500">
            {post.categories && post.categories.length > 0
              ? `Finding related posts for category: ${
                  post.categories[0]?.name || "None"
                } (ID: ${post.categories[0]?.id || "None"})`
              : "No categories available for related posts"}
          </div>
          <RelatedPosts
            currentPostId={post.id}
            category={
              post.categories && post.categories.length > 0
                ? post.categories[0]?.id
                : null
            }
          />
        </div>
      )}
    </article>
  );
}
