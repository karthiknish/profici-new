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
import { cn } from "@/lib/utils";

export default function QuestionnairePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
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

      // Prepare form data for submission with the new field IDs
      const submissionData = {
        // Name fields
        17.3: formData.firstName, // First Name
        17.6: formData.lastName, // Last Name
        // Other fields
        18: formData.email, // Email
        19: formData.phone, // Phone
        26: formData.website || "", // Company/Website
        5: formData.revenue || "", // Annual Revenue
        8: formData.profit || "", // Profit
        form_id: 13, // Explicitly set form ID to 13
      };

      console.log("Prepared submission data:", submissionData);

      // Call the updated submitToGravityForms function with the 'questionnaire' form type
      const result = await submitToGravityForms(
        submissionData,
        "questionnaire"
      );
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
            className="bg-destructive hover:bg-destructive/90"
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

  return (
    <div className="min-h-screen  py-12">
      <div className="max-w-3xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header with progress bar */}
          <div className="bg-gradient-to-r from-primary via-primary/80 to-primary/70 p-8 text-primary-foreground">
            <h1 className="text-3xl font-bold tracking-tight">
              Business Growth Assessment
            </h1>
            <p className="mt-2 opacity-90 text-primary-foreground/90">
              Complete this questionnaire to see if you qualify to become a
              Profici Growth Partner.
            </p>

            <div className="mt-6">
              <div className="flex justify-between mb-2 text-sm">
                <span>Progress</span>
                <span className="font-medium">
                  {completionPercentage}% Complete
                </span>
              </div>
              <div className="w-full bg-primary-foreground/20 rounded-full h-2.5 backdrop-blur-sm">
                <motion.div
                  className="bg-gradient-to-r from-secondary to-secondary/70 h-2.5 rounded-full"
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
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500",
                      step >= number
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "bg-muted text-muted-foreground border border-border"
                    )}
                  >
                    {step > number ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <span className="font-semibold">{number}</span>
                    )}
                  </div>
                  <span
                    className={cn(
                      "mt-2 text-sm",
                      step >= number
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    )}
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
                        <User className="w-4 h-4 mr-2 text-primary" />
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={cn(
                          formErrors.firstName && "border-destructive",
                          "focus:border-primary focus:ring-primary transition-all duration-300"
                        )}
                        placeholder="John"
                      />
                      {formErrors.firstName && (
                        <p className="text-destructive text-sm mt-1">
                          {formErrors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-primary" />
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={cn(
                          formErrors.lastName && "border-destructive",
                          "focus:border-primary focus:ring-primary transition-all duration-300"
                        )}
                        placeholder="Smith"
                      />
                      {formErrors.lastName && (
                        <p className="text-destructive text-sm mt-1">
                          {formErrors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={cn(
                        formErrors.email && "border-destructive",
                        "focus:border-primary focus:ring-primary transition-all duration-300"
                      )}
                      placeholder="john.smith@example.com"
                    />
                    {formErrors.email && (
                      <p className="text-destructive text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={cn(
                        formErrors.phone && "border-destructive",
                        "focus:border-primary focus:ring-primary transition-all duration-300"
                      )}
                      placeholder="+44 123 456 7890"
                    />
                    {formErrors.phone && (
                      <p className="text-destructive text-sm mt-1">
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
                      <Globe className="w-4 h-4 mr-2 text-primary" />
                      Company Website
                    </Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleInputChange}
                      className={cn(
                        formErrors.website && "border-destructive",
                        "focus:border-primary focus:ring-primary transition-all duration-300"
                      )}
                      placeholder="https://example.com"
                    />
                    {formErrors.website && (
                      <p className="text-destructive text-sm mt-1">
                        {formErrors.website}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessType" className="flex items-center">
                      <Building className="w-4 h-4 mr-2 text-primary" />
                      What type of business do you have?
                    </Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) =>
                        handleSelectChange("businessType", value)
                      }
                    >
                      <SelectTrigger
                        className={cn(
                          formErrors.businessType && "border-destructive",
                          "focus:border-primary focus:ring-primary transition-all duration-300"
                        )}
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
                      <p className="text-destructive text-sm mt-1">
                        {formErrors.businessType}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description" className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                      Briefly describe your business
                    </Label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className={cn(
                        "w-full min-h-[120px] rounded-md border bg-background px-3 py-2 text-sm",
                        formErrors.description && "border-destructive",
                        "focus:border-primary focus:ring-primary transition-all duration-300"
                      )}
                      placeholder="Tell us about your business, products/services, and target market..."
                    />
                    {formErrors.description && (
                      <p className="text-destructive text-sm mt-1">
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
                      <DollarSign className="w-4 h-4 mr-2 text-primary" />
                      Annual Revenue
                    </Label>
                    <Select
                      value={formData.revenue}
                      onValueChange={(value) =>
                        handleSelectChange("revenue", value)
                      }
                    >
                      <SelectTrigger
                        className={cn(
                          formErrors.revenue && "border-destructive",
                          "focus:border-primary focus:ring-primary transition-all duration-300"
                        )}
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
                      <p className="text-destructive text-sm mt-1">
                        {formErrors.revenue}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profit" className="flex items-center">
                      <Percent className="w-4 h-4 mr-2 text-primary" />
                      Profit in Last 12 Months
                    </Label>
                    <Select
                      value={formData.profit}
                      onValueChange={(value) =>
                        handleSelectChange("profit", value)
                      }
                    >
                      <SelectTrigger
                        className={cn(
                          formErrors.profit && "border-destructive",
                          "focus:border-primary focus:ring-primary transition-all duration-300"
                        )}
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
    </div>
  );
}
