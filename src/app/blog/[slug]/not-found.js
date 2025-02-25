import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <FileQuestion className="h-24 w-24 text-blue-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Blog Post Not Found
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The blog post you're looking for doesn't exist or has been moved.
          Please check the URL or return to our blog to find what you're looking
          for.
        </p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    </div>
  );
}
