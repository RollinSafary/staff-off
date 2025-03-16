// Application-wide configuration

// Environment configuration (safe, non-sensitive values only)
const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLang: 'en',
    supportedLngs: ['en', 'ru'],
  },
};

export default config;
