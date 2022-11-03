import {Box, Typography} from '@mui/material'
import {useRouter} from 'next/router';
import React from 'react'
import {lang} from '../Navbar/Navbar';

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
                transform: {sm:'translateY(25%)',md:'translateY(50%)'},
                background: {md:'gray'},
                width: {
                    md: '90%'
                },
                padding:'1em',
                gap:'1em',
                borderRadius: '9px',
                flexWrap: 'wrap',
                display:'flex',justifyContent: 'space-around'
            }}>
                <Box sx={{width:{xs:'47%',md:'21%'},height:'100px',background:'red'}}>
                        Lorem ipsum dolor sit amet.
                </Box>
                <Box sx={{width:{xs:'47%',md:'21%'},height:'100px',background:'red'}}>
                        Lorem ipsum dolor sit amet.
                </Box>
                <Box sx={{width:{xs:'47%',md:'21%'},height:'100px',background:'red'}}>
                        Lorem ipsum dolor sit amet.
                </Box>
                <Box sx={{width:{xs:'47%',md:'21%',},height:'100px',background:'red'}}>
                        Lorem ipsum dolor sit amet.
                </Box>
              
            </Box>
        </Box>
    )
}

export default WhyUs