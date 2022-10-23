import '../src/Styles/Styles.css'
import type { AppProps } from 'next/app'

import { ThemeProvider, createTheme } from '@mui/material/styles'; 

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Tajawal, sans-serif',
     
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>

  <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
