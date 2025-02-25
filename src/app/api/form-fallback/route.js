import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.json();

    // Log the form data for debugging
    console.log("Received form data in fallback route:", formData);

    // In a real implementation, you would send an email with the form data
    // For now, we'll just log it and return success

    // Example of how you might format the data for an email
    const formattedData = `
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Website: ${formData.website}
      Business Type: ${formData.businessType}
      Description: ${formData.description}
      Revenue: ${formData.revenue}
      Profit: ${formData.profit}
      Source: ${formData.source || "Not specified"}
    `;

    console.log("Formatted data for email:", formattedData);

    // Here you would typically use an email service like SendGrid, Mailgun, etc.
    // Example with SendGrid (commented out):
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: 'your-email@example.com',
      from: 'noreply@yoursite.com',
      subject: 'New Questionnaire Submission',
      text: formattedData,
      html: formattedData.replace(/\n/g, '<br>'),
    };
    
    await sgMail.send(msg);
    */

    // For now, just return success
    return NextResponse.json({
      success: true,
      message: "Form data received via fallback method",
    });
  } catch (error) {
    console.error("Error in form fallback route:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process form submission",
      },
      { status: 500 }
    );
  }
}
