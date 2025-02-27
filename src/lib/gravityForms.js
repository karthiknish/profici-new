/**
 * Submits form data to Gravity Forms
 * @param {Object} formData - The form data to submit
 * @returns {Promise<Object>} - The result of the submission
 */
export async function submitToGravityForms(formData) {
  try {
    console.log("Starting Gravity Forms submission process");

    // Get environment variables with fallbacks
    const WORDPRESS_URL =
      process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://profici.co.uk";
    const GRAVITY_FORM_ID = formData.form_id || 14; // Use form ID from formData or default to 14

    // Construct the endpoint URL for the new API
    const endpoint = `${WORDPRESS_URL}/wp-json/weboforms/v1/proficinew`;
    console.log(`Submitting to endpoint: ${endpoint}`);

    // Format the data according to the required API format
    const formattedData = {
      form_id: GRAVITY_FORM_ID,
      form_data: {},
    };

    // Convert the flat formData to the required nested structure
    Object.keys(formData).forEach((key) => {
      // Skip the form_id as it's already included at the top level
      if (key === "form_id") return;

      // Determine field type based on key
      let fieldType = "text";
      let fieldName = "";

      if (key === "12.3") {
        fieldType = "name";
        fieldName = "Name (First)";
      } else if (key === "4") {
        fieldType = "email";
        fieldName = "Email";
      } else if (key === "7") {
        fieldType = "post_custom_field";
        fieldName = "Company";
      } else if (key === "9") {
        fieldType = "phone";
        fieldName = "Phone";
      } else if (key === "11") {
        fieldType = "post_custom_field";
        fieldName = "Your message (optional)";
      } else if (key === "14.1") {
        fieldType = "consent";
        fieldName = " (Consent)";
      }

      formattedData.form_data[key] = {
        field_name: fieldName,
        field_value: formData[key],
        field_type: fieldType,
      };
    });
    
    console.log("Formatted data being submitted:", formattedData);

    // Make the request to the Gravity Forms API
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
      // Add timeout to prevent hanging requests
      signal: AbortSignal.timeout(15000), // 15 second timeout
    });

    // Log response status
    console.log(
      `Gravity Forms API response status: ${response.status} ${response.statusText}`
    );

    // Check if the response is OK
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Gravity Forms API error: ${errorText}`);

      // Try fallback submission if API fails
      console.log("Attempting fallback submission via email route");
      try {
        const fallbackResponse = await fetch("/api/form-fallback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (fallbackResponse.ok) {
          console.log("Fallback submission successful");
          return {
            success: true,
            message: "Form submitted via fallback method",
            fallback: true,
          };
        } else {
          console.error("Fallback submission failed");
        }
      } catch (fallbackError) {
        console.error("Error in fallback submission:", fallbackError);
      }

      return {
        success: false,
        message: "Failed to submit form to Gravity Forms",
        error: errorText,
        status: response.status,
      };
    }

    // Parse the response
    const data = await response.json();
    console.log("Gravity Forms API response data:", data);

    // Check if the submission was successful
    if (data.is_valid === false) {
      console.error("Form validation failed:", data.validation_messages);
      return {
        success: false,
        message: "Form validation failed",
        validationErrors: data.validation_messages,
      };
    }

    // Return the successful response
    return {
      success: true,
      message: "Form submitted successfully",
      confirmationMessage: data.confirmation_message,
      data: data,
    };
  } catch (error) {
    console.error("Exception in submitToGravityForms:", error);

    // Handle specific error types
    if (error.name === "AbortError") {
      return {
        success: false,
        message: "Request timed out. Please try again later.",
        error: "timeout",
      };
    }

    if (error.message.includes("fetch")) {
      return {
        success: false,
        message: "Network error. Please check your connection and try again.",
        error: "network_error",
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred",
      error: error.message,
    };
  }
}
