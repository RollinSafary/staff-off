import { createEndpoint } from './core';
import {
  ApiStructure,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
  ResetPasswordRequest,
  VerifyEmailRequest,
  UserProfile,
  UpdateProfileRequest,
  SaveDocumentRequest,
  GetDocumentRequest,
  DeleteDocumentRequest,
  DocumentResponse,
  ListDocumentsRequest,
  ListDocumentsResponse,
} from './types';

/**
 * API client for Firebase Cloud Functions
 *
 * This is a structured and typed way to interact with backend functions
 */
class Api implements ApiStructure {
  // Auth section
  auth = {
    signIn: createEndpoint<SignInRequest, SignInResponse>('auth-signIn'),
    signUp: createEndpoint<SignUpRequest, SignUpResponse>('auth-signUp'),
    resetPassword: createEndpoint<ResetPasswordRequest, null>('auth-resetPassword'),
    verifyEmail: createEndpoint<VerifyEmailRequest, null>('auth-verifyEmail'),
  };

  // User section
  user = {
    getProfile: createEndpoint<null, UserProfile>('user-getProfile'),
    updateProfile: createEndpoint<UpdateProfileRequest, UserProfile>('user-updateProfile'),
    deleteAccount: createEndpoint<null, null>('user-deleteAccount'),
  };

  // Data section
  data = {
    saveDocument: createEndpoint<SaveDocumentRequest, DocumentResponse>('data-saveDocument'),
    getDocument: createEndpoint<GetDocumentRequest, DocumentResponse>('data-getDocument'),
    listDocuments: createEndpoint<ListDocumentsRequest, ListDocumentsResponse>(
      'data-listDocuments'
    ),
    deleteDocument: createEndpoint<DeleteDocumentRequest, null>('data-deleteDocument'),
  };
}

// Create and export the API instance
const api = new Api();
export default api;

// Export types for convenience
export * from './types';
