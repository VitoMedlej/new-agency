import {Box, Button, Typography} from '@mui/material'
import { useContext, useEffect } from 'react';
import {lang} from '../Navbar/Navbar';
import gsap from 'gsap';
import Typo from '../Typography/Typo';
import { LangContext } from '../../../pages/_app';



const Hero = () => {
    const {l} = useContext(LangContext)


    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo('.s1 ', {opacity : 0,y:'10'},{y:0,opacity:1,delay:'.2'})
        tl.fromTo('.s2',{opacity : 0,y:'10'},{y:0,opacity:1},'-=.15')
        tl.fromTo('.s3', {opacity : 0,y:'10'},{y:0,opacity:1},'-=.15')
        tl.fromTo('.t2', {opacity : 0,y:'5'},{y:0,opacity:1},'-=.08')
        tl.fromTo('.btns ', {opacity : 0,x:'-2'},{x:0,opacity:1,stagger:.3})
    },[])
    return (
        <Box sx={{
            position: 'relative'
        }}>

            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column'
            }}
                className='mw center'>

                <Box
                    sx={{
                    textAlign: 'center',
                    py: '4em',
                    px: '1em'
                }}>

                    <Typography
                    className='t1'
                        sx={{
                        fontWeight: 'bolder',
                        display: 'flex',
                        flexWrap: 'wrap',
                        
                        justifyContent: 'center',
                        fontSize: {
                            xs: '2.9em',
                            sm: '3.5em',
                            md: '4.5em',
                            lg: '6.5em',
                            xl: '7.5em'
                        }
                    }}>
                        <span className='s1'>{lang('Simple', '  بيروت ', `${l}`)}</span>
                        &nbsp;
                        <span className='clr s2'>{lang('Beirut', 'ويب', `${l}`)}</span>
                        &nbsp;
                        <span className='s3'>{lang('Web', ' بسيط', `${l}`)}</span>
                    </Typography>
                    <Typo
                    className='t2'
                        en='Web design? web development? doesnt matter! Get your effective website today for a price of a t-shirt.'
                        ar='تصمبم ويب؟ تطوبر ويب؟ لايهم لاننا قادرين على تطوير كل ما تريد بسعر بيدزا'
                        sx={{
                        opacity:0,

                        maxWidth: '640px',
                        margin: '0em auto',
                        color: '#000000b8',
                        fontWeight: '400',
                        fontSize: {
                            xs: '.9em',
                            sm: '1.3em',
                            lg: '1.5em'
                        }
                    }} />
                       
                    
                    <Box
                        className='btns'
                        sx={{
                        opacity:0,

                        mt: '2em',
                        gap: '.7em',
                        flexWrap: 'wrap',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Button 
                        onClick={()=>gsap.to(window, {duration:.7,scrollTo:'#contact'})} 
                        className='btn b1'>{lang('GET STARTED', ' البداء', `${l}`)}</Button>
                        <Button 
                        onClick={()=>gsap.to(window, {duration:.7,scrollTo:'#portfolio'})}
                        className='btn b2'>{lang('OUR WORK', ' مشاريعنا', `${l}`)}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Hero