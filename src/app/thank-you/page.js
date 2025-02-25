import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Thank You!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Your application has been submitted successfully. Our team will
            review your information and get back to you within 24-48 hours.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-800">
              What happens next?
            </h3>
            <ul className="mt-2 text-sm text-blue-700 list-disc list-inside">
              <li>Our team will review your application</li>
              <li>We'll schedule an initial consultation call</li>
              <li>We'll create a customized growth strategy</li>
            </ul>
          </div>

          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
