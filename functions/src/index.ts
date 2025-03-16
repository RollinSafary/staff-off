import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// Hello world function example
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.json({ message: 'Hello from Firebase!' });
});

// Example of a Firestore trigger
export const onUserCreate = functions.firestore
  .document('users/{userId}')
  .onCreate((snap, context) => {
    const newUser = snap.data();
    const userId = context.params.userId;

    functions.logger.log(`New user created: ${userId}`, newUser);

    // You could add custom logic here, like:
    // - Creating a user profile document
    // - Sending a welcome email

    return null;
  });

// Example of a callable function that would be used directly from the client
export const getServerConfig = functions.https.onCall(async (data, context) => {
  // Check if user is authenticated if needed
  if (context.auth) {
    const uid = context.auth.uid;
    functions.logger.log(`User ${uid} requested server config`);
  }

  // Return configuration data
  return {
    // Return any configuration data needed by the client
    // This is a secure way to provide configuration without exposing it in client code
    apiEndpoints: {
      main: '/api/v1',
    },
    features: {
      enableNewFeature: true,
    },
    // You can include environment-specific configurations
    environment: process.env.NODE_ENV || 'production',
  };
});
