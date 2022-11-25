import {Box, Typography} from '@mui/material'
import {useRouter} from 'next/router'
import { useContext, useEffect } from 'react';
import { LangContext } from '../../../pages/_app';
import {lang} from '../Navbar/Navbar'

interface ITypo {
    en : string;
    ar?: string;
    className ?: string;
    sx ?: any
    onClick ?: () => void;

}
const Typo = ({en, ar,sx,onClick,className} : ITypo) => {
    const {l} = useContext(LangContext)
    
    
    return (
        <Typography 
        onClick={()=> onClick ? onClick() : null}
        sx={{
            ...sx
        }}
        className={className}>
            {ar && en
                ? lang(en, ar, l)
                : en
}
        </Typography>
    )
}

export default Typo