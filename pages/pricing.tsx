import React from 'react'
import Layout from '../src/Layout/Layout'
import {Box, Button, Typography} from '@mui/material'
import {useRouter} from 'next/router';
import {lang} from '../src/Components/Navbar/Navbar';
import Typo from '../src/Components/Typography/Typo';

const pricing = () => {
    const router = useRouter()
    const {l} = router.query;

    return (
        <Layout title='pricing' description='foo bar baz'>
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

                        <Typo
                            sx={{
                            fontWeight: 'bolder',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            fontSize: {
                                xs: '2.9em',
                                sm: '3.5em',
                                md: '4.5em',
                                lg: '5.5em',
                                xl: '6.5em'
                            }
                        }}
                            en='OUR PRICES ARE THE FUCKING BEST'
                            ar='تصمبم ويب؟ تطوبر ويب؟ لايهم لاننا '/>

                        <Typo
                            sx={{
                            maxWidth: '640px',
                            margin: '0em auto',
                            color: '#000000b8',
                            fontWeight: '400',
                            fontSize: {
                                xs: '.9em',
                                sm: '1.3em',
                                lg: '1.5em'
                            }
                        }}
                            en=' Web design? web development? doesnt matter! Get your effective website today for a price of a t-shirt.'
                            ar='تصمبم ويب؟ تطوبر ويب؟ لايهم لاننا قادرين على تطوير كل ما تريد بسعر بيدزا'/>

                        <Box
                            sx={{
                            mt: '2em',
                            gap: '.7em',
                            flexWrap: 'wrap',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Button className='btn b1'>{lang('GET STARTED', ' البداء', `${l}`)}</Button>
                            <Button className='btn b2'>{lang('OUR WORK', ' مشاريعنا', `${l}`)}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}

export default pricing
