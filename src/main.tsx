import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '@/styles/Global';
import { Home } from '@/pages/home';
import { NavBar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ParallaxProvider } from "react-scroll-parallax"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle>
      <ChakraProvider>
        <ParallaxProvider>
          <NavBar />
          <Home />
          <Footer />
        </ParallaxProvider>
      </ChakraProvider>
    </GlobalStyle>
  </React.StrictMode>
)
