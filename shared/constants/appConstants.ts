export const APP_NAME = 'My Next.js App';
export const DEFAULT_LANGUAGE = 'en';
export const SUPPORTED_LANGUAGES = ['en', 'ja', 'es'] as const;

export const APP_BASE_URL = 'http://localhost:3000';
export const API_ENDPOINTS = {
  SAMPLE: '/api/sample',
  USERS: '/api/users',
  POSTS: '/api/posts',
};

export const HUGGINGFACE_URL_BASE = 'https://api-inference.huggingface.co';
export const INFERENCE_API = {
  CLASSIFICATION: '/models/facebook/bart-large-mnli',
}
