import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Language } from '../../theme/LanguageContext';
import { pages, getPageTranslation } from '../../mock/navigation';

interface DesktopNavProps {
  language: Language;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ language }) => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page}
          sx={{
            my: theme.spacing(2),
            mx: theme.spacing(1),
            color: theme.palette.primary.contrastText,
            display: 'block',
            '&:hover': {
              backgroundColor: `${theme.palette.primary.contrastText}10`, // 10% opacity
            },
          }}
        >
          {getPageTranslation(page, language)}
        </Button>
      ))}
    </Box>
  );
};

export default DesktopNav;
