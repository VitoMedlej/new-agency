import {Box, Button, Typography} from '@mui/material'
import {INavbar} from '../../Types'
import DragHandle from '@mui/icons-material/DragHandle';
import router from 'next/router';
import { useContext } from 'react';
import { LangContext } from '../../../pages/_app';



export const lang = (en:string,ar : string,language ?: string  | string[]) => {
    if (language && language === "ar") {
        return ar
    }
    return en
}
const Navbar = ({animateMenu} : INavbar) => {
    // l simply stands for language, duh
    const {l,setLanguage} = useContext(LangContext)
  
 
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
                flexDirection: lang('row','row-reverse',l)
            }}
                className="mw">
                <Box 
                onClick={()=>router.push('/')}
                sx={{width:{xs:'100px',sm:'130px'}}} className='cursor center '>
                     <img className='img' src="https://res.cloudinary.com/dwcu3wcol/image/upload/v1670593195/logo022_a1f8zy.jpg" alt="SBW logo" />
                </Box>
                <Box
                sx={{
                    flexDirection : lang('row','row-reverse',l)
                }} className='center '>
                    <Button
                    // change language to "en" if state is "ar" and vise-versa
                    onClick={()=>{setLanguage(lang('ar','en',l)); 
                        
                        router.push(`${router.pathname}?l=` + lang('ar','en',l))}}
                    
                    sx={{
                        mx: '1em'
                    }}>

                        <Typography 
                        
                        className='cursor' color='black'>
                            {lang('العربية','English',l)}
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