# Gravity Forms Integration Guide

This document provides instructions for setting up and troubleshooting the Gravity Forms integration in the Profici website.

## Table of Contents

1. [Overview](#overview)
2. [Setup Instructions](#setup-instructions)
3. [Environment Variables](#environment-variables)
4. [Debugging Tools](#debugging-tools)
5. [Troubleshooting](#troubleshooting)
6. [Form Field Mapping](#form-field-mapping)
7. [Fallback Mechanism](#fallback-mechanism)

## Overview

The website integrates with Gravity Forms on the WordPress backend to handle form submissions. The integration uses the Gravity Forms REST API to submit form data directly from the Next.js frontend to the WordPress backend.

## Setup Instructions

### WordPress Setup

1. Ensure Gravity Forms is installed and activated on the WordPress site
2. Create a new form in Gravity Forms with the following fields:
   - First Name (input_1)
   - Last Name (input_2)
   - Email (input_3)
   - Phone (input_4)
   - Website (input_5)
   - Business Type (input_6)
   - Business Description (input_7)
   - Revenue (input_8)
   - Profit Margin (input_9)
   - Source (input_10)
3. Note the form ID (currently set to 14 in the code)
4. Enable the Gravity Forms REST API in the Gravity Forms settings
5. Create API credentials (Consumer Key and Consumer Secret) in the WordPress admin

### Next.js Setup

1. Set up the environment variables (see [Environment Variables](#environment-variables))
2. Ensure the form field mapping is correct (see [Form Field Mapping](#form-field-mapping))
3. Test the integration using the debug tools (see [Debugging Tools](#debugging-tools))

## Environment Variables

Create a `.env.local` file in the root of the project with the following variables:

```
NEXT_PUBLIC_WORDPRESS_API_URL=https://profici.co.uk
NEXT_PUBLIC_GF_CONSUMER_KEY=your_consumer_key_here
NEXT_PUBLIC_GF_CONSUMER_SECRET=your_consumer_secret_here
```

Replace `your_consumer_key_here` and `your_consumer_secret_here` with the actual credentials from your WordPress site.

## Debugging Tools

The application includes a debug mode that is automatically enabled in development environments. To use the debug tools:

1. Run the application in development mode (`npm run dev`)
2. Navigate to the questionnaire page
3. Click the debug icon in the bottom right corner to open the debug panel
4. Use the debug panel to:
   - Test the Gravity Forms API connection
   - View environment variables
   - View form data and errors
   - Fill test data
   - Log form data to the console

## Troubleshooting

### Common Issues

1. **API Credentials Missing**
   - Check that the environment variables are set correctly
   - Verify that the credentials are valid in the WordPress admin

2. **Form Submission Fails**
   - Check the browser console for error messages
   - Use the debug panel to test the API connection
   - Verify that the form ID is correct
   - Check that the form field mapping is correct

3. **Network Errors**
   - Ensure that the WordPress site is accessible
   - Check for CORS issues (the WordPress site should allow requests from your development domain)
   - Verify that the WordPress URL is correct

4. **Form Validation Errors**
   - Check that all required fields are filled
   - Ensure that the data format matches what Gravity Forms expects

### Testing the API Connection

Use the "Test Gravity Forms API" button in the debug panel to verify that the API connection is working. This will:

1. Check if the API credentials are set
2. Attempt to connect to the Gravity Forms API
3. Display the available forms if successful
4. Show detailed error information if unsuccessful

## Form Field Mapping

The form fields in the Next.js application are mapped to Gravity Forms fields as follows:

| Next.js Form Field | Gravity Forms Field |
|--------------------|---------------------|
| firstName          | input_1             |
| lastName           | input_2             |
| email              | input_3             |
| phone              | input_4             |
| website            | input_5             |
| businessType       | input_6             |
| description        | input_7             |
| revenue            | input_8             |
| profit             | input_9             |
| source             | input_10            |

If you change the form structure in Gravity Forms, you'll need to update the mapping in the `submitToGravityForms` function in `src/lib/gravityForms.js`.

## Fallback Mechanism

The application includes a fallback mechanism for form submissions in case the Gravity Forms API is unavailable. The fallback:

1. Attempts to submit the form data to the Gravity Forms API
2. If that fails, it sends the form data to a server-side API route (`/api/form-fallback`)
3. The fallback route can be configured to send the form data via email or store it in a database

To configure the fallback mechanism:

1. Edit the `src/app/api/form-fallback/route.js` file
2. Uncomment and configure the email sending code
3. Add your SendGrid API key or other email service configuration

---

For additional help or to report issues, please contact the development team. 