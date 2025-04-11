import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase/config";
import { Endpoint } from "./types";
import { logCall, logResponse, logReject } from "../helpers/logger";

/**
 * Creates a typed endpoint for a Firebase Cloud Function
 *
 * @param functionName - The name of the cloud function
 * @returns A typed function that calls the cloud function
 */
export function createEndpoint<TRequest, TResponse>(
  functionName: string,
): Endpoint<TRequest, TResponse> {
  // Create the endpoint function
  const endpoint = async (data?: TRequest): Promise<TResponse> => {
    // Record start time for performance measurement
    const startTime = performance.now();

    try {
      if (!functions) {
        throw new Error("Firebase functions not initialized");
      }

      // Log the API call
      logCall(`API Call: ${functionName}`, data || {});

      // Call the Firebase function
      const cloudFunction = httpsCallable<TRequest | undefined, TResponse>(
        functions,
        functionName,
      );
      const result = await cloudFunction(data);

      // Calculate duration
      const duration = Math.round(performance.now() - startTime);

      // Log the successful response
      logResponse(`API Response: ${functionName} (${duration}ms)`, result.data);

      return result.data;
    } catch (error) {
      // Calculate duration
      const duration = Math.round(performance.now() - startTime);

      // Log the rejection
      logReject(`API Rejection: ${functionName} (${duration}ms)`, error);

      throw error;
    }
  };

  // Attach the function name for reference
  endpoint.functionName = functionName;

  return endpoint;
}

/**
 * Creates a mock endpoint for testing or development
 *
 * @param functionName - The name of the mock function
 * @param mockImplementation - A function that returns a mock response
 * @returns A typed function that returns the mock response
 */
export function createMockEndpoint<TRequest, TResponse>(
  functionName: string,
  mockImplementation: (data?: TRequest) => Promise<TResponse>,
): Endpoint<TRequest, TResponse> {
  const endpoint = async (data?: TRequest): Promise<TResponse> => {
    // Record start time for performance measurement
    const startTime = performance.now();

    try {
      // Log the mock API call
      logCall(`MOCK API Call: ${functionName}`, data || {});

      // Call the mock implementation
      const result = await mockImplementation(data);

      // Calculate duration
      const duration = Math.round(performance.now() - startTime);

      // Log the successful response
      logResponse(`MOCK API Response: ${functionName} (${duration}ms)`, result);

      return result;
    } catch (error) {
      // Calculate duration
      const duration = Math.round(performance.now() - startTime);

      // Log the rejection
      logReject(`MOCK API Rejection: ${functionName} (${duration}ms)`, error);

      throw error;
    }
  };

  endpoint.functionName = functionName;

  return endpoint;
}
