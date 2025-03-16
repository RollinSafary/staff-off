/* eslint no-process-env: 0 */
export const getEnvironmentVariables = (): Record<string, string> => ({
  NODE_ENV: process.env.NODE_ENV!,
});

export const isEmptyObject = (obj: Record<string, unknown>): boolean => {
  if (!obj) return true;
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};
