import {Box, Typography} from '@mui/material'
import {useRouter} from 'next/router';
import React from 'react'
import {lang} from '../Navbar/Navbar';

const Reasons = [
    {
        title: {
            en: 'The Cheapest',
            ar: 'الارخص'
        },
        text: {
            en: 'lorem the fuckeig fuocok fasf',
            ar: 'بشسب شسبش لضفتخ -ضصنل شجسصن لج جيح'
        }
    ,    img:'https://softweb.co.in/wp-content/uploads/2022/10/pace-new.png',

    }, {
        title: {
            en: 'The Cheapest',
            ar: 'الارخص'
        },
        text: {
            en: 'lorem the fuckeig fuocok fasf',
            ar: 'بشسب شسبش لضفتخ -ضصنل شجسصن لج جيح'
        }
    ,    img:'https://softweb.co.in/wp-content/uploads/2022/10/pace-new.png',
    
    }, {
        title: {
            en: 'The Cheapest',
            ar: 'الارخص'
        },
        text: {
            en: 'lorem the fuckeig fuocok fasf',
            ar: 'بشسب شسبش لضفتخ -ضصنل شجسصن لج جيح'
        },
        img:'https://softweb.co.in/wp-content/uploads/2022/10/pace-new.png',

    }, {
        img:'https://softweb.co.in/wp-content/uploads/2022/10/pace-new.png',
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
    const router = useRouter()
    const {l} = router.query;
    return (
        <Box
            sx={{
            my: '5em',
            px: '1em',
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
                <Typography className='h1'>
                    {lang('Why Choose Us?', "لما تخترنا؟", l)}
                </Typography>
                <Typography sx={{
                    color: '#c2c2c2'
                }}>
                    {lang('this is some random ass text, dw about it nigga', "ما تخترن تخترن تخترن تخترن تخترن تخترن", l)}
                </Typography>
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
                borderRadius:"9px",
}}>

                {Reasons.map((reason, idx : number) => {

                    return <Box
                        key={idx}
                        sx={{
                        width: {
                            xs: '42%',
                            sm : '25%',
                            md: '21%'
                        },
                        padding: '.75em',
                        height: '100px',
                        background: 'white',
                        position: 'relative',
                        color:'white',
                        zIndex: '111',
                        backgroundImage: `url('${reason?.img}')`
                    }}>
                        <Box
                            className='absolute'
                            sx={{
                            background: '#00000070',
                            zIndex: '-1'
                        }}></Box>
                        <Typography
                            sx={{
                            fontSize: '1.5em',
                            fontWeight: '700'
                        }}>
                            {lang(reason.title.en, reason.title.ar, l)}
                        </Typography>
                        <Typography >
                            {lang(reason.text.en, reason.text.ar, l)}

                        </Typography>
                    </Box>
                })}

            </Box>
        </Box>
    )
}

export default WhyUs