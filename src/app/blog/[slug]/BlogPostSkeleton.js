"use client";

import { motion } from "framer-motion";

const BlogPostSkeleton = () => {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[60vh] bg-gray-200 animate-pulse"
      ></motion.div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Social Share Sidebar Skeleton */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="flex flex-col items-center gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Main Content Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-2xl shadow-xl shadow-black/5 p-8 lg:p-12">
              {/* Category and Date Skeleton */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Title Skeleton */}
              <div className="h-12 w-full bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse mb-8"></div>

              {/* Author Skeleton */}
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
                <div>
                  <div className="h-5 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>

              {/* Content Skeleton */}
              <div className="space-y-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((paragraph) => (
                  <div key={paragraph} className="space-y-3">
                    {paragraph % 3 === 1 && (
                      <div className="h-8 w-1/2 bg-gray-200 rounded animate-pulse mb-2"></div>
                    )}
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>

              {/* Tags Skeleton */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="h-6 w-16 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4].map((tag) => (
                    <div
                      key={tag}
                      className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Mobile Social Share Skeleton */}
              <div className="mt-12 lg:hidden">
                <div className="flex justify-center gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Posts Section Skeleton */}
      <div className="py-24 bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-12 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <div
                key={post}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-4"></div>
                  <div className="h-6 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-4"></div>
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostSkeleton;
