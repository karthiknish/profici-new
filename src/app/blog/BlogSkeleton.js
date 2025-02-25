"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const BlogSkeleton = () => {
  // Create an array of 6 items to represent loading blog posts
  const skeletonItems = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
      {skeletonItems.map((item) => (
        <motion.div
          key={item}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: item * 0.1 }}
          className="flex flex-col"
        >
          <Card className="w-full h-full overflow-hidden">
            {/* Image skeleton */}
            <div className="relative w-full h-48 bg-gray-200 animate-pulse"></div>
            <div className="p-6">
              {/* Date and reading time skeleton */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Title skeleton */}
              <div className="h-6 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-4"></div>

              {/* Excerpt skeleton */}
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse mb-4"></div>

              {/* Author skeleton */}
              <div className="mt-4 h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogSkeleton;
