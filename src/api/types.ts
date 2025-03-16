/**
 * API type definitions for cloud functions
 */

/**
 * Base endpoint type for cloud functions
 */
export interface Endpoint<TRequest, TResponse> {
  (data?: TRequest): Promise<TResponse>;
  functionName: string;
}

/**
 * API structure type definition
 */
export interface ApiStructure {
  auth: {
    signIn: Endpoint<SignInRequest, SignInResponse>;
    signUp: Endpoint<SignUpRequest, SignUpResponse>;
    resetPassword: Endpoint<ResetPasswordRequest, null>;
    verifyEmail: Endpoint<VerifyEmailRequest, null>;
  };
  user: {
    getProfile: Endpoint<null, UserProfile>;
    updateProfile: Endpoint<UpdateProfileRequest, UserProfile>;
    deleteAccount: Endpoint<null, null>;
  };
  data: {
    saveDocument: Endpoint<SaveDocumentRequest, DocumentResponse>;
    getDocument: Endpoint<GetDocumentRequest, DocumentResponse>;
    listDocuments: Endpoint<ListDocumentsRequest, ListDocumentsResponse>;
    deleteDocument: Endpoint<DeleteDocumentRequest, null>;
  };
}

/**
 * Auth related types
 */
export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  user: UserProfile;
  token: string;
}

export interface SignUpRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface SignUpResponse {
  user: UserProfile;
  token: string;
}

export interface ResetPasswordRequest {
  email: string;
}

export interface VerifyEmailRequest {
  code: string;
}

/**
 * User related types
 */
export interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  photoUrl?: string;
  createdAt: string;
  lastLoginAt: string;
}

export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  photoUrl?: string;
}

/**
 * Data related types
 */
export interface SaveDocumentRequest {
  collection: string;
  id?: string;
  data: Record<string, any>;
}

export interface GetDocumentRequest {
  collection: string;
  id: string;
}

export interface DeleteDocumentRequest {
  collection: string;
  id: string;
}

export interface DocumentResponse {
  id: string;
  data: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface ListDocumentsRequest {
  collection: string;
  filters?: Record<string, any>;
  orderBy?: string;
  orderDirection?: 'asc' | 'desc';
  limit?: number;
  offset?: number;
}

export interface ListDocumentsResponse {
  items: DocumentResponse[];
  total: number;
}
