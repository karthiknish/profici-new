"use client";

import { useState, useEffect } from "react";
import { getForm, submitForm } from "@/utils/gravityForms";

export default function GravityForm({ formId = 13 }) {
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    async function loadForm() {
      try {
        setLoading(true);
        const formData = await getForm(formId);
        setForm(formData);

        // Initialize form data with empty values
        const initialData = {};
        if (formData.fields) {
          formData.fields.forEach((field) => {
            if (field.id) {
              initialData[field.id] = "";
            }
          });
        }
        setFormData(initialData);

        setError(null);
      } catch (err) {
        console.error("Failed to load form:", err);
        setError("Failed to load the form. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadForm();
  }, [formId]);

  const handleInputChange = (fieldId, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      setSubmitError(null);

      const response = await submitForm(formId, formData);

      console.log("Form submitted successfully:", response);
      setSubmitSuccess(true);

      // Reset form after successful submission
      if (form.fields) {
        const resetData = {};
        form.fields.forEach((field) => {
          if (field.id) {
            resetData[field.id] = "";
          }
        });
        setFormData(resetData);
      }
    } catch (err) {
      console.error("Form submission failed:", err);
      setSubmitError(
        err.message || "Failed to submit the form. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Render loading state
  if (loading) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="animate-pulse flex flex-col space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-12 bg-gray-200 rounded w-full"></div>
          <div className="h-12 bg-gray-200 rounded w-full"></div>
          <div className="h-12 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="text-red-500 font-medium">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-black/90"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Render success message
  if (submitSuccess) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="text-green-600 font-medium text-lg mb-4">
          Thank you! Your form has been submitted successfully.
        </div>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-black/90"
        >
          Submit Another Response
        </button>
      </div>
    );
  }

  // Render the form
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {form && (
        <>
          <h2 className="text-2xl font-bold mb-6">{form.title}</h2>
          {form.description && (
            <div
              className="mb-6 text-gray-600"
              dangerouslySetInnerHTML={{ __html: form.description }}
            />
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {form.fields &&
              form.fields.map((field) => (
                <div key={field.id} className="form-field">
                  <label
                    htmlFor={`field-${field.id}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.label}
                    {field.isRequired && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </label>

                  {renderField(field, formData, handleInputChange)}

                  {field.description && (
                    <p className="mt-1 text-sm text-gray-500">
                      {field.description}
                    </p>
                  )}
                </div>
              ))}

            {submitError && (
              <div className="text-red-500 font-medium">{submitError}</div>
            )}

            <div className="mt-8">
              <button
                type="submit"
                disabled={submitting}
                className={`px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all duration-300 ${
                  submitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {submitting ? "Submitting..." : form.button?.text || "Submit"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

// Helper function to render different field types
function renderField(field, formData, handleInputChange) {
  const value = formData[field.id] || "";

  switch (field.type) {
    case "text":
    case "email":
    case "phone":
    case "website":
      return (
        <input
          id={`field-${field.id}`}
          type={field.type === "phone" ? "tel" : field.type}
          value={value}
          onChange={(e) => handleInputChange(field.id, e.target.value)}
          required={field.isRequired}
          placeholder={field.placeholder || ""}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
        />
      );

    case "textarea":
      return (
        <textarea
          id={`field-${field.id}`}
          value={value}
          onChange={(e) => handleInputChange(field.id, e.target.value)}
          required={field.isRequired}
          placeholder={field.placeholder || ""}
          rows={field.size || 4}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
        />
      );

    case "select":
      return (
        <select
          id={`field-${field.id}`}
          value={value}
          onChange={(e) => handleInputChange(field.id, e.target.value)}
          required={field.isRequired}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
        >
          <option value="">{field.placeholder || "Select an option"}</option>
          {field.choices &&
            field.choices.map((choice) => (
              <option key={choice.value} value={choice.value}>
                {choice.text}
              </option>
            ))}
        </select>
      );

    case "radio":
      return (
        <div className="mt-2 space-y-2">
          {field.choices &&
            field.choices.map((choice) => (
              <div key={choice.value} className="flex items-center">
                <input
                  id={`field-${field.id}-${choice.value}`}
                  type="radio"
                  name={`field-${field.id}`}
                  value={choice.value}
                  checked={value === choice.value}
                  onChange={() => handleInputChange(field.id, choice.value)}
                  required={field.isRequired}
                  className="h-4 w-4 text-black focus:ring-black border-gray-300"
                />
                <label
                  htmlFor={`field-${field.id}-${choice.value}`}
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  {choice.text}
                </label>
              </div>
            ))}
        </div>
      );

    case "checkbox":
      return (
        <div className="mt-2 space-y-2">
          {field.choices &&
            field.choices.map((choice) => {
              // For checkboxes, we need to handle multiple selections
              const values = Array.isArray(value)
                ? value
                : value
                ? [value]
                : [];
              const isChecked = values.includes(choice.value);

              return (
                <div key={choice.value} className="flex items-center">
                  <input
                    id={`field-${field.id}-${choice.value}`}
                    type="checkbox"
                    name={`field-${field.id}`}
                    value={choice.value}
                    checked={isChecked}
                    onChange={() => {
                      let newValues;
                      if (isChecked) {
                        newValues = values.filter((v) => v !== choice.value);
                      } else {
                        newValues = [...values, choice.value];
                      }
                      handleInputChange(field.id, newValues);
                    }}
                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`field-${field.id}-${choice.value}`}
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    {choice.text}
                  </label>
                </div>
              );
            })}
        </div>
      );

    case "date":
      return (
        <input
          id={`field-${field.id}`}
          type="date"
          value={value}
          onChange={(e) => handleInputChange(field.id, e.target.value)}
          required={field.isRequired}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
        />
      );

    case "time":
      return (
        <input
          id={`field-${field.id}`}
          type="time"
          value={value}
          onChange={(e) => handleInputChange(field.id, e.target.value)}
          required={field.isRequired}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
        />
      );

    case "fileupload":
      return (
        <div className="mt-1">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">
                  {field.allowedExtensions
                    ? `Allowed: ${field.allowedExtensions.join(", ")}`
                    : "All file types supported"}
                </p>
              </div>
              <input
                id={`field-${field.id}`}
                type="file"
                className="hidden"
                onChange={(e) => {
                  // Note: File uploads require special handling with FormData
                  // This is a simplified version
                  if (e.target.files && e.target.files[0]) {
                    handleInputChange(field.id, e.target.files[0]);
                  }
                }}
                required={field.isRequired}
                accept={
                  field.allowedExtensions
                    ? field.allowedExtensions.map((ext) => `.${ext}`).join(",")
                    : undefined
                }
              />
            </label>
          </div>
          {value && typeof value === "object" && (
            <p className="mt-2 text-sm text-gray-500">
              Selected file: {value.name}
            </p>
          )}
        </div>
      );

    case "hidden":
      return <input id={`field-${field.id}`} type="hidden" value={value} />;

    default:
      return (
        <input
          id={`field-${field.id}`}
          type="text"
          value={value}
          onChange={(e) => handleInputChange(field.id, e.target.value)}
          required={field.isRequired}
          placeholder={field.placeholder || ""}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
        />
      );
  }
}
