"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { submitToGravityForms } from "@/lib/gravityForms";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  User,
  Building,
  BarChart,
  DollarSign,
  Percent,
  Mail,
  Phone,
  Globe,
  MessageSquare,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Debug mode - set to true to enable debugging features
const DEBUG_MODE = process.env.NODE_ENV === "development";

export default function QuestionnairePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [showDebugInfo, setShowDebugInfo] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    businessType: "",
    revenue: "",
    profit: "",
    description: "",
    source: "",
  });

  // Calculate form completion percentage
  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    // Count filled fields
    const totalFields = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter(
      (value) => value !== ""
    ).length;
    const percentage = Math.round((filledFields / totalFields) * 100);
    setCompletionPercentage(percentage);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user selects
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateStep = (stepNumber) => {
    const errors = {};
    let isValid = true;

    if (stepNumber === 1) {
      if (!formData.firstName.trim()) {
        errors.firstName = "First name is required";
        isValid = false;
      }
      if (!formData.lastName.trim()) {
        errors.lastName = "Last name is required";
        isValid = false;
      }
      if (!formData.email.trim()) {
        errors.email = "Email is required";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Email is invalid";
        isValid = false;
      }
      if (!formData.phone.trim()) {
        errors.phone = "Phone number is required";
        isValid = false;
      }
    } else if (stepNumber === 2) {
      if (!formData.website.trim()) {
        errors.website = "Company website is required";
        isValid = false;
      } else if (
        !/^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/.test(
          formData.website
        )
      ) {
        errors.website = "Website URL is invalid";
        isValid = false;
      }
      if (!formData.businessType) {
        errors.businessType = "Business type is required";
        isValid = false;
      }
      if (!formData.description.trim()) {
        errors.description = "Business description is required";
        isValid = false;
      }
    } else if (stepNumber === 3) {
      if (!formData.revenue) {
        errors.revenue = "Annual revenue is required";
        isValid = false;
      }
      if (!formData.profit) {
        errors.profit = "Profit margin is required";
        isValid = false;
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 3));
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const errors = {};
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.businessType)
      errors.businessType = "Business type is required";
    if (!formData.description)
      errors.description = "Business description is required";

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      console.log("Form validation failed:", errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("submitting");
    setErrorMessage("");

    try {
      console.log("Submitting form data:", formData);

      // Log environment variables in development mode
      if (DEBUG_MODE) {
        console.log("Environment variables:", {
          wordpressUrl: process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "Not set",
          hasConsumerKey: !!process.env.NEXT_PUBLIC_GF_CONSUMER_KEY,
          hasConsumerSecret: !!process.env.NEXT_PUBLIC_GF_CONSUMER_SECRET,
        });
      }

      const { submitToGravityForms } = await import("@/lib/gravityForms");

      // Prepare form data for submission
      const submissionData = {
        input_1: formData.firstName, // First Name
        input_2: formData.lastName, // Last Name
        input_3: formData.email, // Email
        input_4: formData.phone, // Phone
        input_5: formData.website || "Not provided", // Website
        input_6: formData.businessType, // Business Type
        input_7: formData.description, // Business Description
        input_8: formData.revenue || "Not specified", // Revenue
        input_9: formData.profit || "Not specified", // Profit Margin
        input_10: formData.source || "Not specified", // Source
      };

      console.log("Prepared submission data:", submissionData);

      const result = await submitToGravityForms(submissionData);
      console.log("Form submission result:", result);

      if (result.success) {
        setSubmitStatus("success");
        // Redirect after successful submission
        setTimeout(() => {
          router.push("/thank-you");
        }, 2000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          result.message || "Failed to submit form. Please try again."
        );
        console.error("Form submission error:", result);

        // Attempt to identify specific error causes
        if (result.error) {
          if (
            result.error.includes("network") ||
            result.error.includes("fetch")
          ) {
            setErrorMessage(
              "Network error. Please check your connection and try again."
            );
          } else if (result.error.includes("timeout")) {
            setErrorMessage("Request timed out. Please try again later.");
          } else if (result.error.includes("credentials")) {
            setErrorMessage(
              "API authentication error. Please contact support."
            );
          }
        }
      }
    } catch (error) {
      console.error("Exception during form submission:", error);
      setSubmitStatus("error");
      setErrorMessage(`An unexpected error occurred: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSubmitButton = () => {
    if (isSubmitting) {
      return (
        <Button disabled className="ml-auto">
          <LoadingSpinner className="mr-2 h-4 w-4" />
          Submitting...
        </Button>
      );
    }

    if (submitStatus === "success") {
      return (
        <Button disabled className="ml-auto bg-green-600">
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Submitted Successfully
        </Button>
      );
    }

    if (submitStatus === "error") {
      return (
        <div className="ml-auto flex flex-col items-end">
          {errorMessage && (
            <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
          )}
          <Button
            onClick={handleSubmit}
            className="bg-red-600 hover:bg-red-700"
          >
            <XCircle className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </div>
      );
    }

    return (
      <Button type="submit" className="ml-auto">
        Submit Application
      </Button>
    );
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
  };

  // Toggle debug info panel
  const toggleDebugInfo = () => {
    setShowDebugInfo((prev) => !prev);
  };

  // Debug info component
  const DebugInfo = () => {
    if (!DEBUG_MODE) return null;

    const [apiTestResult, setApiTestResult] = useState(null);
    const [isTestingApi, setIsTestingApi] = useState(false);

    const testGravityFormsApi = async () => {
      try {
        setIsTestingApi(true);
        setApiTestResult(null);

        const response = await fetch("/api/test-gravity-forms");
        const result = await response.json();

        setApiTestResult(result);
        console.log("API Test Result:", result);
      } catch (error) {
        console.error("Error testing API:", error);
        setApiTestResult({
          success: false,
          message: "Error testing API",
          error: error.message,
        });
      } finally {
        setIsTestingApi(false);
      }
    };

    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleDebugInfo}
          className="bg-gray-800 text-white p-2 rounded-full shadow-lg"
          title="Toggle Debug Info"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="M12 16v.01"></path>
            <path d="M12 8v4"></path>
          </svg>
        </button>

        {showDebugInfo && (
          <div className="mt-2 p-4 bg-gray-800 text-white rounded-lg shadow-xl w-80 max-h-96 overflow-auto">
            <h3 className="font-bold mb-2">Debug Information</h3>
            <div className="text-xs">
              <p className="mb-1">
                <strong>WordPress URL:</strong>{" "}
                {process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "Not set"}
              </p>
              <p className="mb-1">
                <strong>API Keys Set:</strong>{" "}
                {process.env.NEXT_PUBLIC_GF_CONSUMER_KEY ? "Yes" : "No"}
              </p>
              <p className="mb-1">
                <strong>Current Step:</strong> {step}
              </p>
              <p className="mb-1">
                <strong>Submit Status:</strong>{" "}
                {submitStatus || "Not submitted"}
              </p>
              <p className="mb-1">
                <strong>Error Message:</strong> {errorMessage || "None"}
              </p>

              <div className="mt-3 mb-3">
                <button
                  onClick={testGravityFormsApi}
                  disabled={isTestingApi}
                  className={`bg-purple-600 text-white px-2 py-1 rounded text-xs w-full ${
                    isTestingApi ? "opacity-50" : "hover:bg-purple-700"
                  }`}
                >
                  {isTestingApi ? "Testing API..." : "Test Gravity Forms API"}
                </button>

                {apiTestResult && (
                  <div
                    className={`mt-2 p-2 rounded text-xs ${
                      apiTestResult.success ? "bg-green-700" : "bg-red-700"
                    }`}
                  >
                    <p className="font-bold">
                      {apiTestResult.success
                        ? "API Connection Successful"
                        : "API Connection Failed"}
                    </p>
                    <p>{apiTestResult.message}</p>
                    {apiTestResult.forms && (
                      <div className="mt-1">
                        <p className="font-bold">Available Forms:</p>
                        <ul className="list-disc list-inside">
                          {apiTestResult.forms.map((form) => (
                            <li key={form.id}>
                              ID: {form.id} - {form.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {apiTestResult.error && (
                      <p className="mt-1 text-red-300">{apiTestResult.error}</p>
                    )}
                  </div>
                )}
              </div>

              <div className="mb-1">
                <strong>Form Data:</strong>
                <pre className="mt-1 p-2 bg-gray-700 rounded text-green-300 text-xs overflow-auto">
                  {JSON.stringify(formData, null, 2)}
                </pre>
              </div>
              <div className="mb-1">
                <strong>Form Errors:</strong>
                <pre className="mt-1 p-2 bg-gray-700 rounded text-red-300 text-xs overflow-auto">
                  {JSON.stringify(formErrors, null, 2)}
                </pre>
              </div>
              <div className="mt-2">
                <button
                  onClick={() => console.log("Form Data:", formData)}
                  className="bg-blue-600 text-white px-2 py-1 rounded text-xs mr-2"
                >
                  Log Data
                </button>
                <button
                  onClick={() =>
                    setFormData({
                      firstName: "Test",
                      lastName: "User",
                      email: "test@example.com",
                      phone: "1234567890",
                      website: "https://example.com",
                      businessType: "ecommerce",
                      revenue: "1m-3m",
                      profit: "10-15",
                      description: "This is a test submission from debug mode.",
                      source: "other",
                    })
                  }
                  className="bg-green-600 text-white px-2 py-1 rounded text-xs"
                >
                  Fill Test Data
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-3xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header with progress bar */}
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-8 text-white">
            <h1 className="text-3xl font-bold">Business Growth Assessment</h1>
            <p className="mt-2 opacity-90">
              Complete this questionnaire to see if you qualify to become a
              Profici Growth Partner.
            </p>

            <div className="mt-6">
              <div className="flex justify-between mb-2 text-sm">
                <span>Progress</span>
                <span>{completionPercentage}% Complete</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2.5">
                <motion.div
                  className="bg-white h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${completionPercentage}%` }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </div>
            </div>
          </div>

          {/* Step indicators */}
          <div className="px-8 pt-8">
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((number) => (
                <div key={number} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      step >= number
                        ? "bg-gray-700 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step > number ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      number
                    )}
                  </div>
                  <span
                    className={`mt-2 text-sm ${
                      step >= number
                        ? "text-gray-700 font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    {number === 1
                      ? "Personal Info"
                      : number === 2
                      ? "Business Info"
                      : "Financial Info"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 pt-4 mt-4">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-600" />
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={formErrors.firstName ? "border-red-500" : ""}
                        placeholder="John"
                      />
                      {formErrors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-600" />
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={formErrors.lastName ? "border-red-500" : ""}
                        placeholder="Smith"
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-600" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={formErrors.email ? "border-red-500" : ""}
                      placeholder="john.smith@example.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-600" />
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={formErrors.phone ? "border-red-500" : ""}
                      placeholder="+44 123 456 7890"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="website" className="flex items-center">
                      <Globe className="w-4 h-4 mr-2 text-gray-600" />
                      Company Website
                    </Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleInputChange}
                      className={formErrors.website ? "border-red-500" : ""}
                      placeholder="https://example.com"
                    />
                    {formErrors.website && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.website}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessType" className="flex items-center">
                      <Building className="w-4 h-4 mr-2 text-gray-600" />
                      What type of business do you have?
                    </Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) =>
                        handleSelectChange("businessType", value)
                      }
                    >
                      <SelectTrigger
                        className={
                          formErrors.businessType ? "border-red-500" : ""
                        }
                      >
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ecommerce">Ecommerce</SelectItem>
                        <SelectItem value="saas">SaaS</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="manufacturing">
                          Manufacturing
                        </SelectItem>
                        <SelectItem value="professional-services">
                          Professional Services
                        </SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {formErrors.businessType && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.businessType}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description" className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-gray-600" />
                      Briefly describe your business
                    </Label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className={`w-full min-h-[120px] rounded-md border ${
                        formErrors.description
                          ? "border-red-500"
                          : "border-input"
                      } bg-background px-3 py-2 text-sm`}
                      placeholder="Tell us about your business, products/services, and target market..."
                    />
                    {formErrors.description && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="revenue" className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-2 text-gray-600" />
                      Annual Revenue
                    </Label>
                    <Select
                      value={formData.revenue}
                      onValueChange={(value) =>
                        handleSelectChange("revenue", value)
                      }
                    >
                      <SelectTrigger
                        className={formErrors.revenue ? "border-red-500" : ""}
                      >
                        <SelectValue placeholder="Select annual revenue" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="less500k">
                          Less than £500K
                        </SelectItem>
                        <SelectItem value="500k-1m">£500K-£1M</SelectItem>
                        <SelectItem value="1m-3m">£1M-£3M</SelectItem>
                        <SelectItem value="3m-5m">£3M-£5M</SelectItem>
                        <SelectItem value="5m-10m">£5M-£10M</SelectItem>
                        <SelectItem value="10m+">£10M+</SelectItem>
                      </SelectContent>
                    </Select>
                    {formErrors.revenue && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.revenue}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profit" className="flex items-center">
                      <Percent className="w-4 h-4 mr-2 text-gray-600" />
                      Profit in Last 12 Months
                    </Label>
                    <Select
                      value={formData.profit}
                      onValueChange={(value) =>
                        handleSelectChange("profit", value)
                      }
                    >
                      <SelectTrigger
                        className={formErrors.profit ? "border-red-500" : ""}
                      >
                        <SelectValue placeholder="Select profit margin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="loss">
                          Operating at a loss
                        </SelectItem>
                        <SelectItem value="0-5">0-5%</SelectItem>
                        <SelectItem value="5-10">5-10%</SelectItem>
                        <SelectItem value="10-15">10-15%</SelectItem>
                        <SelectItem value="15-25">15-25%</SelectItem>
                        <SelectItem value="25+">25%+</SelectItem>
                      </SelectContent>
                    </Select>
                    {formErrors.profit && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.profit}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="source" className="flex items-center">
                      <BarChart className="w-4 h-4 mr-2 text-gray-600" />
                      Where did you hear about us?
                    </Label>
                    <Select
                      value={formData.source}
                      onValueChange={(value) =>
                        handleSelectChange("source", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="google">Google</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mt-6">
                    <h3 className="font-medium text-gray-800 mb-2">
                      What happens next?
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Our team will review your application and get back to you
                      within 2 business days to discuss how we can help your
                      business grow.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex items-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
              )}

              {step < 3 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className={`${step > 1 ? "" : "ml-auto"} flex items-center`}
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <div className={`${step > 1 ? "" : "ml-auto"}`}>
                  {submitStatus === "success" ? (
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                        <svg
                          className="w-8 h-8 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-xl font-semibold text-green-600">
                        Form Submitted Successfully!
                      </p>
                      <p className="mt-2 text-gray-600">
                        Redirecting you to the next step...
                      </p>
                    </div>
                  ) : submitStatus === "error" ? (
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                        <svg
                          className="w-8 h-8 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-xl font-semibold text-red-600">
                        Submission Failed
                      </p>
                      <p className="mt-2 text-gray-600">{errorMessage}</p>
                      <button
                        onClick={handleSubmit}
                        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
                      >
                        Try Again
                      </button>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`px-8 py-4 rounded-lg text-white font-semibold text-lg shadow-lg transition-all ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700"
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </div>
                      ) : (
                        "Submit Questionnaire"
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </form>
        </motion.div>

        {/* Testimonial */}
      </div>

      {/* Add the debug component at the end */}
      <DebugInfo />
    </div>
  );
}
