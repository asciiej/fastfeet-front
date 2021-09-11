import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';
import { PackageProvider } from './hooks/PackageContext';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <PackageProvider>
            <Routes />
          </PackageProvider>
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
