import {Box, Button, Typography} from '@mui/material'
import {useRouter} from 'next/router';
import React, { useEffect } from 'react'
import ReasonCard from '../Cards/ReasonCard';
import {lang} from '../Navbar/Navbar';
import Typo from '../Typography/Typo';
import gsap from 'gsap';

const Reasons = () => {
    const router = useRouter();
    const {l} = router.query;

    useEffect(() => {
      
        gsap.fromTo('.tt0',{y:'5',opacity:0},{y:0,opacity:1,scrollTrigger:{trigger:'.tt0',start:'top 60%'}})
        gsap.fromTo('.tt1',{y:'5',opacity:0},{delay:.15,y:0,opacity:1,scrollTrigger:{trigger:'.tt0',start:'top 60%'}})
        gsap.fromTo('.tt2',{x:'-5',opacity:0},{delay:.20,x:0,opacity:1,scrollTrigger:{trigger:'.tt0',start:'top 60%'}})
        

            gsap.fromTo(`.z1 , .z2 , .z3 , .z4`,{y:'5',opacity:0},{y:0,opacity:1,stagger:.25,scrollTrigger:{trigger:'.z1',markers:true,start:'top 60%'}})
    }, [])
    
    return (
        <Box sx={{
            mx: '1em',
            position: 'relative'
        }}>
            <Box className='mw'>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        md: lang('row', 'row-reverse', l)
                    },
                    justifyContent: 'left'
                }}>
                    <Box
                        sx={{
                        maxWidth: {
                            md: '500px'
                        },
                        width: {
                            xs: '100%',
                            md: '50%'
                        }
                    }}>

                        <Typo
                            en='Why Does Your Business Need A Website?'
                            ar='ليش ضاوري يكون عندك ويب سايت؟'
                            className='h1 tt0'
                            sx={{
                            fontSize: {
                                xs: '2.5em',
                                sm: '3em'
                            },
                            mb: '.4em'
                        }}/>

                        <Button
                            sx={{
                            mt: {
                                md: '1em'
                            },
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}
                            className='btn b1'>{lang('GET STARTED', ' البداء', `${l}`)}</Button>

                    </Box>

                    <Typography
                    className='tt1'
                        sx={{
                        maxWidth: {
                            md: '750px'
                        },
                        alignItems: 'center',
                        width: {
                            xs: '100%',
                            md: '85%'
                        },
                        display: 'flex',
                        color: '#000000b8',
                        fontWeight: '400',
                        fontSize: {
                            xs: '.9em',
                            sm: '1.3em',
                            lg: '1.5em'
                        }
                    }}>
                        {lang('  Web design? web development? doesnt matter! Get your effective website today f' +
                                'or a price of a t-shirt.',
                        'تصمبم ويب؟ تطوبر ويب؟ لايهم لاننا قادرين على تطوير كل ما تريد بسعر بيدزا', `${l}`)}
                    </Typography>
                    <Button
                        sx={{
                        mt: {
                            xs: '1em',
                            sm: 0
                        },
                        display: {
                            xs: 'flex',
                            md: 'none'
                        }
                    }}
                        className='btn b1 tt2'>{lang('GET STARTED', ' البداء', `${l}`)}</Button>

                </Box>
                <Box
                    sx={{
                    mt: '4.5em',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row'
                }}>
                    {[1,2,3,4].map(n=>{

                       return <ReasonCard key={n} className={n}/>
                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default Reasons