import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Get environment variables
    const wordpressUrl =
      process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://profici.co.uk";
    const consumerKey = process.env.NEXT_PUBLIC_GF_CONSUMER_KEY;
    const consumerSecret = process.env.NEXT_PUBLIC_GF_CONSUMER_SECRET;

    // Check if API credentials are set
    if (!consumerKey || !consumerSecret) {
      return NextResponse.json(
        {
          success: false,
          message: "API credentials are not configured",
          environment: {
            wordpressUrl,
            hasConsumerKey: !!consumerKey,
            hasConsumerSecret: !!consumerSecret,
          },
        },
        { status: 400 }
      );
    }

    // Construct the endpoint URL for testing (get forms list)
    const endpoint = `${wordpressUrl}/wp-json/gf/v2/forms`;

    // Log the request details
    console.log("Testing Gravity Forms API connection:", {
      endpoint,
      hasCredentials: !!consumerKey && !!consumerSecret,
    });

    // Make the request to the Gravity Forms API
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64"),
      },
    });

    // Check if the response is OK
    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        {
          success: false,
          message: "Failed to connect to Gravity Forms API",
          status: response.status,
          statusText: response.statusText,
          error: errorText,
        },
        { status: response.status }
      );
    }

    // Parse the response
    const data = await response.json();

    // Return the successful response
    return NextResponse.json({
      success: true,
      message: "Successfully connected to Gravity Forms API",
      forms: data.map((form) => ({
        id: form.id,
        title: form.title,
      })),
    });
  } catch (error) {
    console.error("Error testing Gravity Forms API:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Error testing Gravity Forms API",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
