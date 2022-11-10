import '../src/Styles/Styles.css'
import type { AppProps } from 'next/app'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import gsap from 'gsap';
import { useEffect } from 'react';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Tajawal, sans-serif',

    },
  },
});


function MyApp({ Component, pageProps }: AppProps) {
  
    gsap.registerPlugin(ScrollTrigger)

return <ThemeProvider theme={theme}>

  <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
