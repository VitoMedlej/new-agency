import {Box, Typography} from '@mui/material'
import {useRouter} from 'next/router';
import React from 'react'
import {lang} from '../Navbar/Navbar';
import Typo from '../Typography/Typo';

const Reasons = [
    {
        title: {
            en: 'The Cheapest',
            ar: 'الارخص'
        },
        text: {
            en: 'lorem the fuckeig fuocok fasf',
            ar: 'بشسب شسبش لضفتخ -ضصنل شجسصن لج جيح'
        },
        img: 'https://softweb.co.in/wp-content/uploads/2022/10/pace-new.png'
    }, {
        title: {
            en: 'The Cheapest',
            ar: 'الارخص'
        },
        text: {
            en: 'lorem the fuckeig fuocok fasf',
            ar: 'بشسب شسبش لضفتخ -ضصنل شجسصن لج جيح'
        },
        img: 'https://softweb.co.in/wp-content/uploads/2022/10/pace-new.png'
    }, {
        title: {
            en: 'The Cheapest',
            ar: 'الارخص'
        },
        text: {
            en: 'lorem the fuckeig fuocok fasf',
            ar: 'بشسب شسبش لضفتخ -ضصنل شجسصن لج جيح'
        },
        img: 'https://softweb.co.in/wp-content/uploads/2022/10/pace-new.png'
    }, {
        img: 'https://softweb.co.in/wp-content/uploads/2022/10/pace-new.png',
        title: {
            en: 'The Cheapest',
            ar: 'الارخص'
        },
        text: {
            en: 'lorem the fuckeig fuocok fasf',
            ar: 'بشسب شسبش لضفتخ -ضصنل شجسصن لج جيح'
        }
    }
]
const WhyUs = () => {
    return (
        <Box
            sx={{
            
            px: '1em',
            mb:'10em',
            position: 'relative',
            background: '#6000a9',
            color: 'white',
            textAlign: 'center'
        }}>
            <Box
                sx={{
                pt: '1.5em',
                px: '1em'
            }}>

                <Typo
                    className='h1'
                    en='Why Choose Us?'
                    ar='لما تخترنا؟'
                    sx={{
                    color: 'white'
                }}/>
                <Typo
                    en='this is some random ass text, dw about it nigga'
                    ar='ما تخترن تخترن تخترن تخترن تخترن تخترن'
                    sx={{
                    color: '#c2c2c2'
                }}/>

            </Box>
            <Box
                className='mw'
                sx={{
                margin: '0 auto',
                transform: {
                    xs: 'translateY(10%)',
                    sm: 'translateY(25%)',
                    md: 'translateY(35%)'
                },
                width: {
                    md: '90%'
                },
                padding: '1em',
                gap: '1em',
                flexWrap: 'wrap',
                color: 'black',
                boxShadow: '1px 1px 3px #00000036',
                display: 'flex',
                background: 'white',
                justifyContent: 'space-around',
                borderRadius: "9px"
            }}>

                {Reasons.map((reason, idx : number) => {

                    return <Box
                        key={idx}
                        sx={{
                        width: {
                            xs: '40%',
                            sm: '25%',
                            md: '21%'
                        },
                        padding: '.75em',
                        height: '100px',
                        background: 'white',
                        position: 'relative',
                        color: 'white',
                        zIndex: '111',
                        backgroundImage: `url('${reason
                            ?.img}')`
                    }}>
                        <Box
                            className='absolute'
                            sx={{
                            background: '#00000070',
                            zIndex: '-1'
                        }}></Box>

                        <Typo
                            sx={{
                            fontSize: '1.5em',
                            fontWeight: '700'
                        }}
                            en={reason.title.en}
                            ar={reason.title.ar}/>

                        <Typo en={reason.text.en} ar={reason.text.ar}/>

                    </Box>
                })}

            </Box>
        </Box>
    )
}

export default WhyUs