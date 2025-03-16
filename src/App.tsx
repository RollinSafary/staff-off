import React from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { LanguageProvider } from './theme/LanguageContext';
import Layout from './components/Layout';
import { Typography, Button, Box, Paper, Grid, CssBaseline } from '@mui/material';
import { useLanguage } from './theme/LanguageContext';
import { getTranslation } from './mock/translations';
import { ResponsiveProvider } from './theme/ResponsiveContext';

// Translated content component
const TranslatedContent = () => {
  const { language } = useLanguage();

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        {getTranslation('title', language)}
      </Typography>

      <Paper elevation={0} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" paragraph>
          {getTranslation('description', language)}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            {getTranslation('primaryBtn', language)}
          </Button>
          <Button variant="outlined" color="primary">
            {getTranslation('secondaryBtn', language)}
          </Button>
        </Box>
      </Paper>

      <Grid container spacing={3}>
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} md={4} key={item}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                {getTranslation('feature', language)} {item}
              </Typography>
              <Typography variant="body2">{getTranslation('featureDesc', language)}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <ResponsiveProvider>
        <LanguageProvider>
          <Layout>
            <TranslatedContent />
          </Layout>
        </LanguageProvider>
      </ResponsiveProvider>
    </ThemeProvider>
  );
}

export default App;
