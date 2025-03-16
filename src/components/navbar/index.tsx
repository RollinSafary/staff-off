import { AppBar, Container, Toolbar, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useLanguage } from '../../theme/LanguageContext';
import { useNavigate } from 'react-router-dom';

import MobileMenu from './MobileMenu';
import DesktopNav from './DesktopNav';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import UserMenu from './UserMenu';
import LogoSvg from '../../assets/main/logo.svg';

const Navbar = () => {
  const { language } = useLanguage();
  const theme = useTheme();
  const navigate = useNavigate();

  // Function to get the root URL based on the current language
  const getRootUrl = () => {
    return language === 'en' ? '/' : '/ru';
  };

  // Handle logo click
  const handleLogoClick = () => {
    navigate(getRootUrl());
  };

  return (
    <AppBar
      position="static"
      color="primary"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo - Desktop */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 2,
              cursor: 'pointer',
            }}
            onClick={handleLogoClick}
          >
            <img src={LogoSvg} alt="Logo" width={120} height={40} />
          </Box>

          {/* Mobile menu button & drawer */}
          <MobileMenu />

          {/* Logo - Mobile */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            onClick={handleLogoClick}
          >
            <img src={LogoSvg} alt="Logo" width={100} height={35} />
          </Box>

          {/* Desktop Navigation */}
          <DesktopNav language={language} />

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* User Menu */}
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
