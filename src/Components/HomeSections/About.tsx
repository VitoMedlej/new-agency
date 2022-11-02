import {Box, Button, Typography} from '@mui/material'
import {useRouter} from 'next/router';
import React from 'react'
import Dots from '../Desgin/Dots';
import {lang} from '../Navbar/Navbar'

const content = [
    {
        en: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quidem labore ' +
                'eveniet facere aspernatur blanditiis dolorem eligendi consectetur, atque consequ' +
                'atur deserunt et sed facilis repellendus!',
        ar: ' ارسله معنا غدا يرتع ويلعب وانا له لحافظون  ارسله معنا غدا يرتع ويلعب وانا له لح' +
                'افظون ارسله معنا غدا يرتع ويلعب وانا له لحافظون ارسله معنا غدا يرتع ويلعب وانا ل' +
                'ه لحافظون'
    }, {
        en: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quidem labore ' +
                'eveniet facere aspernatur blanditiis dolorem eligendi consectetur, atque consequ' +
                'atur deserunt et sed facilis repellendus!',
        ar: ' ارسله معنا غدا يرتع ويلعب وانا له لحافظون  ارسله معنا غدا يرتع ويلعب وانا له لح' +
                'افظون ارسله معنا غدا يرتع ويلعب وانا له لحافظون ارسله معنا غدا يرتع ويلعب وانا ل' +
                'ه لحافظون'
    }
]
const About = () => {
    const router = useRouter();
    const {l} = router.query;
    return (
        <Box
            sx={{
            my: '10em',
            mx: '1em',
            position: 'relative'
        }}>

            <Box
                sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column-reverse',
                    md: lang('row', 'row-reverse', l)
                },
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                overflow:'hidden'
            }}
                className='mw '>
                <Box
                    sx={{
                    maxWidth: {
                        xs: '95%',
                        md: '460px',
                        lg: '600px',
                        textAlign: lang('left', 'right', l)
                    }
                }}>
                    <Typography className='h1'>
                        {lang('Who We Are', 'من نحن؟', l)}
                    </Typography>
                    <Typography
                        sx={{
                        fontSize:{xs:'1em',lg:'1.2em'},
                        fontWeight: '500',
                        py: '.75em',
                        color: '#000000b8'
                    }}>
                        {lang(content[0].en, content[0].ar, l)}

                    </Typography>
                    <Typography
                        sx={{
                        fontWeight: '500',
                        fontSize:{xs:'1em',lg:'1.2em'},
                        pb: '1.25em',
                        color: '#000000b8'
                    }}>

                        {lang(content[1].en, content[1].ar, l)}
                    </Typography>
                    
                    <Button className='btn b2'>{lang('OUR WORK', ' مشاريعنا', `${l}`)}
                    </Button>

                </Box>
                <Box
                    className='about-img'
                    sx={{
                    mb: {
                        xs: '1em',
                        lg: 0
                    },
                    width: {
                        xs: '95%',
                        sm: '470px',
                        lg: '550px',
                        xl: '600px'
                    },
                    height: {
                        sm: '270px',
                        md: '300px'
                    },
                    position: 'relative'
                }}>
                    <img
                        src="https://res.cloudinary.com/dwcu3wcol/image/upload/v1667124444/pexels-photo-5821296_mroznf.jpg"
                        className='img '
                        alt=""/>
                    <Box className='style-box ' sx={{right:lang('-6%','85%',l)}}>
                        <Box className='sb1'>
                            {/* <Box className='sb2'/> */}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Dots
                sx={{
                top: {
                    xs: '-15%',
                    lg: '90%'
                },
                right: {
                    xs: '70%',
                    sm: '1%',
                    lg: '92%'
                }
            }}
                color='#55555594'/>

        </Box>

    )
}

export default About