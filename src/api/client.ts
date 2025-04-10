import { ApiStructure } from "./types";
import realApi from "./index";
import mockApi from "./mockApi";
import { logNotification } from "../helpers/logger";

/**
 * Configuration for API client
 */
interface ApiConfig {
  /**
   * Whether to use mock implementation
   * @default false in production, true in development
   */
  useMockApi?: boolean;
}

/**
 * Default configuration
 */
const defaultConfig: ApiConfig = {
  // Use mock API in development by default
  useMockApi: process.env.NODE_ENV !== "production",
};

/**
 * Get the appropriate API client based on configuration
 *
 * @param config - API configuration
 * @returns API client instance
 */
export function getApiClient(config: ApiConfig = defaultConfig): ApiStructure {
  // Use mock API if explicitly configured or in development mode
  if (config.useMockApi) {
    logNotification("Using mock API implementation");
    return mockApi;
  }

  // Use real API implementation
  logNotification("Using real API implementation");
  return realApi;
}

/**
 * Default API client instance based on environment
 */
const api = getApiClient();
export default api;

// Re-export all types
export * from "./types";
