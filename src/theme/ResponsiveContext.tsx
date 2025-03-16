import React, { createContext, useContext, ReactNode } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

// Define the type for our responsive context
interface ResponsiveContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
}

// Create the context with default values
const ResponsiveContext = createContext<ResponsiveContextType>({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  isLargeDesktop: false,
});

// Create a provider component
export const ResponsiveProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useTheme();

  // Define common responsive breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = React.useMemo(
    () => ({
      isMobile,
      isTablet,
      isDesktop,
      isLargeDesktop,
    }),
    [isMobile, isTablet, isDesktop, isLargeDesktop]
  );

  return <ResponsiveContext.Provider value={contextValue}>{children}</ResponsiveContext.Provider>;
};

// Custom hook to use the responsive context
export const useResponsive = () => useContext(ResponsiveContext);

// Responsive component that renders different content based on screen size
interface ResponsiveComponentProps {
  mobile?: ReactNode;
  tablet?: ReactNode;
  desktop?: ReactNode;
  largeDesktop?: ReactNode;
  fallback?: ReactNode;
}

export const Responsive: React.FC<ResponsiveComponentProps> = ({
  mobile,
  tablet,
  desktop,
  largeDesktop,
  fallback,
}) => {
  const { isMobile, isTablet, isDesktop, isLargeDesktop } = useResponsive();

  if (isMobile && mobile) return <>{mobile}</>;
  if (isTablet && tablet) return <>{tablet}</>;
  if (isDesktop && desktop) return <>{desktop}</>;
  if (isLargeDesktop && largeDesktop) return <>{largeDesktop}</>;
  if (fallback) return <>{fallback}</>;

  // Default case: render nothing
  return null;
};

// Grid helper component for common layout patterns
interface ResponsiveGridProps {
  children: ReactNode;
  spacing?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  // Add other props as needed
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  spacing = { xs: 1, sm: 2, md: 3 },
  ...props
}) => {
  const { isMobile } = useResponsive();

  return (
    <div
      style={{
        display: 'grid',
        gridGap: `${(isMobile ? spacing.xs : spacing.md) || 1}rem`,
        // Add more responsive styling as needed
        ...props,
      }}
    >
      {children}
    </div>
  );
};
