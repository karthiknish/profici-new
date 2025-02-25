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
    const GF_CONSUMER_KEY = process.env.NEXT_PUBLIC_GF_CONSUMER_KEY;
    const GF_CONSUMER_SECRET = process.env.NEXT_PUBLIC_GF_CONSUMER_SECRET;
    const GRAVITY_FORM_ID = 14; // Updated form ID

    // Check if API credentials are available
    if (!GF_CONSUMER_KEY || !GF_CONSUMER_SECRET) {
      console.error("Gravity Forms API credentials are missing");
      return {
        success: false,
        message: "API credentials are not configured",
        error: "credentials_missing",
      };
    }

    // Construct the endpoint URL
    const endpoint = `${WORDPRESS_URL}/wp-json/gf/v2/forms/${GRAVITY_FORM_ID}/submissions`;
    console.log(`Submitting to endpoint: ${endpoint}`);
    console.log("Form data being submitted:", formData);

    // Create Basic Auth header
    const authHeader =
      "Basic " +
      Buffer.from(`${GF_CONSUMER_KEY}:${GF_CONSUMER_SECRET}`).toString(
        "base64"
      );

    // Make the request to the Gravity Forms API
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify({ input_values: formData }),
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
