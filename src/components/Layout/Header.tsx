import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import { createLocalizedPath } from '../../constants/i18n';
import { Translations } from '../../constants/translations';

function Header() {
  const { t, i18n } = useTranslation();

  // Helper to create localized links
  const localizedLink = (path: string) => {
    return createLocalizedPath(path, i18n.language);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t(Translations.COMMON_WELCOME)}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button color="inherit" component={RouterLink} to={localizedLink('/')}>
            {t(Translations.COMMON_HOME)}
          </Button>
          <LanguageSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
