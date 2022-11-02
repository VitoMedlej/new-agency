import {Box, Button, Typography} from '@mui/material'
import {useRouter} from 'next/router';
import React from 'react'
import ReasonCard from '../Cards/ReasonCard';
import {lang} from '../Navbar/Navbar';

const Reasons = () => {
    const router = useRouter();
    const {l} = router.query;
    return (
        <Box
            sx={{
            // py: '5em',
            mx: '1em',
            mb:'5em',
            pt:'2em',
            position: 'relative'
        }}>
            <Box className='mw'>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        md: lang('row','row-reverse',l),
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

                        <Typography
                            className='h1'
                            sx={{
                            fontSize: {
                                xs: '2.5em',
                                sm: '3em'
                            },
                            mb: '.4em'
                        }}>
                            

                            {lang('  Why Does Your Business Need A Website?',
                        'ليش ضاوري يكون عندك ويب سايت؟', `${l}`)}
                        </Typography>
                        <Button
                            sx={{
                                mt:{md:'1em'},
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}
                            className='btn b1'>{lang('GET STARTED', ' البداء', `${l}`)}</Button>

                    </Box>

                    <Typography
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
                        className='btn b1'>{lang('GET STARTED', ' البداء', `${l}`)}</Button>

                </Box>
                <Box sx={{mt:'4.5em',display:'flex',flexWrap:'wrap',flexDirection:'row'}}>
                    <ReasonCard/>
                    <ReasonCard/>
                    <ReasonCard/>
                    <ReasonCard/>
                </Box>
            </Box>
        </Box>
    )
}

export default Reasons