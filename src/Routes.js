import theme from 'styles';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FetchStatusProvider } from 'contexts/FetchStatus';
import { ValidationsProvider } from 'contexts/Validations';
import ScrollToTop from 'components/ScrollToTop';
import Content from 'components/Content';
import Home from 'pages/Home';
import NewVideo from 'pages/NewVideo';
import NewCategory from 'pages/NewCategory';
import NotFound from 'pages/NotFound';

const AppRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <FetchStatusProvider>
          <ValidationsProvider>
            <Routes>
              <Route path='/' element={<Content />}>
                <Route index element={<Home />} />
                <Route path='new-video' element={<NewVideo />} />
                <Route path='new-category' element={<NewCategory />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </ValidationsProvider>
        </FetchStatusProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRoutes;
