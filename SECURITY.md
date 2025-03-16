# Security Best Practices

## Handling API Keys and Sensitive Information

This document outlines the security practices for handling sensitive information in this application.

### Environment Variables

1. **Never commit real API keys or secrets to version control**

   - Use `.env` files for local development
   - Add `.env` to your `.gitignore` file
   - Use `.env.example` as a template without real values

2. **Don't expose API keys in client-side code**
   - API keys included in client-side bundles are visible to anyone who inspects your application
   - This creates security vulnerabilities that can be exploited

### Recommended Approaches

#### For Development Environment

For local development, we use a development-only approach with dummy keys:

- We check if we're in development mode before loading Firebase configuration
- We use environment variables only for local testing

#### For Production Environment

For production, follow these best practices:

1. **Server-side API Key Management**

   - Store API keys securely on the server-side
   - Create a dedicated API endpoint that your frontend can call
   - Implement proper authentication for this endpoint
   - Return only the necessary configuration to authenticated clients

2. **Use Environment Variables in Build Process**

   - For static builds, inject environment variables during the build process
   - Only inject what's absolutely necessary for the frontend
   - Consider using build-time environment substitution

3. **Use Firebase App Check**

   - Implement [Firebase App Check](https://firebase.google.com/docs/app-check) to prevent unauthorized API usage
   - This adds an additional layer of security

4. **Restrict API Key Usage**
   - Use API restrictions in the Google Cloud Console
   - Limit API keys to specific domains, IP addresses, or services

## Security Reporting

If you discover a security vulnerability, please report it by [creating an issue](https://github.com/your-repo/issues/new) marked as "Security Vulnerability".

Do not disclose security vulnerabilities publicly until they have been addressed by the maintainers.
