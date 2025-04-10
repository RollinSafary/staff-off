import { createMockEndpoint } from "./core";
import {
  ApiStructure,
  UserProfile,
  DocumentResponse,
  SignInRequest,
  SignUpRequest,
  UpdateProfileRequest,
  SaveDocumentRequest,
  GetDocumentRequest,
} from "./types";

/**
 * Mock API client for development and testing
 *
 * This provides mock implementations of all API endpoints
 */
class MockApi implements ApiStructure {
  // Auth section
  auth = {
    signIn: createMockEndpoint("auth-signIn", async (data?: SignInRequest) => {
      // Return a mock user
      return {
        user: {
          id: "mock-user-id",
          email: data?.email || "mock@example.com",
          firstName: "Mock",
          lastName: "User",
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
        },
        token: "mock-token-123456",
      };
    }),

    signUp: createMockEndpoint("auth-signUp", async (data?: SignUpRequest) => {
      return {
        user: {
          id: "mock-user-id",
          email: data?.email || "mock@example.com",
          firstName: data?.firstName || "Mock",
          lastName: data?.lastName || "User",
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
        },
        token: "mock-token-123456",
      };
    }),

    resetPassword: createMockEndpoint("auth-resetPassword", async () => {
      return null;
    }),

    verifyEmail: createMockEndpoint("auth-verifyEmail", async () => {
      return null;
    }),
  };

  // User section
  user = {
    getProfile: createMockEndpoint<null, UserProfile>(
      "user-getProfile",
      async () => {
        return {
          id: "mock-user-id",
          email: "mock@example.com",
          firstName: "Mock",
          lastName: "User",
          photoUrl: "https://via.placeholder.com/150",
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
        };
      },
    ),

    updateProfile: createMockEndpoint(
      "user-updateProfile",
      async (data?: UpdateProfileRequest) => {
        return {
          id: "mock-user-id",
          email: "mock@example.com",
          firstName: data?.firstName || "Mock",
          lastName: data?.lastName || "User",
          photoUrl: data?.photoUrl || "https://via.placeholder.com/150",
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
        };
      },
    ),

    deleteAccount: createMockEndpoint("user-deleteAccount", async () => {
      return null;
    }),
  };

  // Data section
  data = {
    saveDocument: createMockEndpoint(
      "data-saveDocument",
      async (data?: SaveDocumentRequest) => {
        const now = new Date().toISOString();
        return {
          id:
            data?.id ||
            `mock-doc-${Math.random().toString(36).substring(2, 9)}`,
          data: data?.data || { title: "Mock Document" },
          createdAt: now,
          updatedAt: now,
        };
      },
    ),

    getDocument: createMockEndpoint(
      "data-getDocument",
      async (data?: GetDocumentRequest) => {
        const now = new Date().toISOString();
        return {
          id: data?.id || "mock-doc-id",
          data: { title: "Mock Document", content: "This is a mock document" },
          createdAt: now,
          updatedAt: now,
        };
      },
    ),

    listDocuments: createMockEndpoint("data-listDocuments", async () => {
      const now = new Date().toISOString();

      // Create array of mock documents
      const mockDocs: DocumentResponse[] = Array.from(
        { length: 5 },
        (_, i) => ({
          id: `mock-doc-${i}`,
          data: {
            title: `Mock Document ${i}`,
            content: `This is mock document ${i}`,
          },
          createdAt: now,
          updatedAt: now,
        }),
      );

      return {
        items: mockDocs,
        total: mockDocs.length,
      };
    }),

    deleteDocument: createMockEndpoint("data-deleteDocument", async () => {
      return null;
    }),
  };
}

// Export the mock API
export default new MockApi();
