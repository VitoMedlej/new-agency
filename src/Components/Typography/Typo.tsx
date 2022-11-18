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

}
const Typo = ({en, ar,sx,className} : ITypo) => {
    const values = useContext(LangContext)
    const l = 'en'
    console.log('values: ', values);
    
    return (
        <Typography 
        sx={{
            ...sx
        }}
        className={className}>
            {ar && en
                ? lang(en, ar, l)
                : en
}
{/* https://www.creative4all.com/uploads/portfolio/thumbs/small_ezzeddine.com-8789581.jpg */}
        </Typography>
    )
}

export default Typo