import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '@/styles/Global';
import { Home } from '@/pages/home';
import { NavBar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle>
      <ChakraProvider>
        <NavBar />
        <Home />
        <Footer />
      </ChakraProvider>
    </GlobalStyle>
  </React.StrictMode>
)
