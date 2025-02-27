import OAuth from "oauth-1.0a";
import crypto from "crypto";

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
const CONSUMER_KEY = process.env.NEXT_PUBLIC_GF_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.NEXT_PUBLIC_GF_CONSUMER_SECRET;

// Initialize OAuth
const oauth = new OAuth({
  consumer: {
    key: CONSUMER_KEY,
    secret: CONSUMER_SECRET,
  },
  signature_method: "HMAC-SHA1",
  hash_function(base_string, key) {
    return crypto.createHmac("sha1", key).update(base_string).digest("base64");
  },
});

/**
 * Get form data from Gravity Forms API
 * @param {number} formId - The ID of the form to retrieve
 * @returns {Promise<Object>} - The form data
 */
export async function getForm(formId) {
  try {
    const requestData = {
      url: `${WORDPRESS_API_URL}/wp-json/gf/v2/forms/${formId}`,
      method: "GET",
    };

    const headers = oauth.toHeader(oauth.authorize(requestData));

    const response = await fetch(requestData.url, {
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch form: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching form:", error);
    throw error;
  }
}

/**
 * Submit form data to Gravity Forms API
 * @param {number} formId - The ID of the form to submit to
 * @param {Object} formData - The form data to submit
 * @returns {Promise<Object>} - The submission response
 */
export async function submitForm(formId, formData) {
  try {
    const requestData = {
      url: `${WORDPRESS_API_URL}/wp-json/gf/v2/forms/${formId}/submissions`,
      method: "POST",
    };

    const headers = oauth.toHeader(oauth.authorize(requestData));

    const response = await fetch(requestData.url, {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input_values: formData,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `Failed to submit form: ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}

/**
 * Get entries for a specific form
 * @param {number} formId - The ID of the form to get entries for
 * @param {Object} params - Optional parameters for filtering entries
 * @returns {Promise<Object>} - The entries data
 */
export async function getEntries(formId, params = {}) {
  try {
    const queryParams = new URLSearchParams(params).toString();
    const requestData = {
      url: `${WORDPRESS_API_URL}/wp-json/gf/v2/forms/${formId}/entries${
        queryParams ? `?${queryParams}` : ""
      }`,
      method: "GET",
    };

    const headers = oauth.toHeader(oauth.authorize(requestData));

    const response = await fetch(requestData.url, {
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch entries: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching entries:", error);
    throw error;
  }
}

/**
 * Get a specific entry by ID
 * @param {number} entryId - The ID of the entry to retrieve
 * @param {number} formId - The ID of the form the entry belongs to
 * @returns {Promise<Object>} - The entry data
 */
export async function getEntry(entryId, formId) {
  try {
    const requestData = {
      url: `${WORDPRESS_API_URL}/wp-json/gf/v2/entries/${entryId}`,
      method: "GET",
    };

    const headers = oauth.toHeader(oauth.authorize(requestData));

    const response = await fetch(requestData.url, {
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch entry: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching entry:", error);
    throw error;
  }
}
