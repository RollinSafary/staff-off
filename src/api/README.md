# API Client for Cloud Functions

This module provides a structured and type-safe way to interact with backend Cloud Functions.

## Usage

```typescript
import api from './api/client';
```

### Switching Between Implementations

By default, the API client uses:

- Mock implementation in development
- Real implementation in production

To explicitly choose an implementation:

```typescript
import { getApiClient } from './api/client';
const apiClient = getApiClient({ useMockApi: false });
```

## API Structure

The API is organized into logical sections:

### Authentication

- `api.auth.signIn()`
- `api.auth.signUp()`
- `api.auth.resetPassword()`
- `api.auth.verifyEmail()`

### User Management

- `api.user.getProfile()`
- `api.user.updateProfile()`
- `api.user.deleteAccount()`

### Data Operations

- `api.data.saveDocument()`
- `api.data.getDocument()`
- `api.data.listDocuments()`
- `api.data.deleteDocument()`

## Type Safety

All API methods are fully typed with request and response types, providing IntelliSense support and type checking.

## Mock Implementation

Mock implementation is available for development and testing without a backend connection.
