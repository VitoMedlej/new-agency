import '../src/Styles/Styles.css'
import type {AppProps}
from 'next/app'
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import gsap from 'gsap';
import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";
import {createContext, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
export const LangContext = createContext < {
    l: string,
    setLanguage: any
} > ({l: 'en', setLanguage: ''});

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Tajawal, sans-serif'
        }
    }
});

function MyApp({Component, pageProps} : AppProps) {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
    const [language,
        setLanguage] = useState('en');

  

    return <ThemeProvider theme={theme}>
        <LangContext.Provider
            value={{
            l: language,
            setLanguage
        }}>

            <Component {...pageProps}/>
        </LangContext.Provider>
    </ThemeProvider>
}

export default MyApp
