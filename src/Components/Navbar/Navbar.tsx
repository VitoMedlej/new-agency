import {Box, Button, Typography} from '@mui/material'
import {INavbar} from '../../Types'
import {DragHandle} from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';



export const lang = (en:string,ar : string,language ?: string) => {
    if (language && language === "ar") {
        return ar
    }
    return en
}
const Navbar = ({animateMenu} : INavbar) => {
    const router = useRouter();
    
    const language = `${router.query.l}`;
    useEffect(() => {
      
    if (language) {
        localStorage.setItem('language', `${language}`);
        return;
    } 
    localStorage.setItem('language', 'en');
      
    }, [language])
 
    return (
        <Box
            sx={{
            boxShadow: '1px 1px 5px #00000012',
            width: "100%"
        }}>
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                padding: '1em',
                justifyContent: 'space-between',
                flexDirection: lang('row','row-reverse',language)
            }}
                className="mw">
                <Box sx={{width:'100px'}} className='center '>
                     <img className='img' src="/bwa.JPG" alt="BWA logo" />
                </Box>
                <Box
                sx={{
                    flexDirection : lang('row','row-reverse',language)
                }} className='center '>
                    <Button sx={{
                        mx: '1em'
                    }}>

                        <Typography 
                        onClick={()=> router.push('/?l=' + lang('ar','en',language))}
                        className='cursor' color='black'>
                            {lang('العربية','English',language)}
                        </Typography>
                    </Button>
                    <DragHandle
                    onClick={()=> {
                        animateMenu('-150%','0%',false)}}
                        className='cursor'
                        sx={{
                        color: 'black',
                        fontSize: '2em'
                    }}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar