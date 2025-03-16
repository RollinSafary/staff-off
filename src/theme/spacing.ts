// Spacing definitions based on readability and comfortable viewing
// Uses an 8px baseline grid for consistency

// Base spacing unit in pixels
const BASE_SPACING = 8;

// Spacing multiplier function
export const createSpacing = () => (factor: number) => `${BASE_SPACING * factor}px`;

// Common spacing values as an object for reference
export const spacing = {
  xs: BASE_SPACING / 2, // 4px
  sm: BASE_SPACING, // 8px
  md: BASE_SPACING * 2, // 16px
  lg: BASE_SPACING * 3, // 24px
  xl: BASE_SPACING * 4, // 32px
  xxl: BASE_SPACING * 5, // 40px
};
