import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import React from 'react'
import { lang } from '../Navbar/Navbar';

const WhyUs = () => {
    const router = useRouter()
    const {l} = router.query;
  return (
    <Box
    sx={{
    my: '5em',
    px: '1em',
    py:'2em',
    position: 'relative',
    background: '#6000a9',
    color:'white',
    textAlign: 'center',
}}>
    <Box
        sx={{
    }}
        >
        <Typography className='h1'>
            {lang('Why Choose Us?',"لما تخترنا؟",l)}
        </Typography>
        <Typography sx={{color:'#c2c2c2'}}>
        {lang('this is some random ass text, dw about it nigga',"ما تخترن تخترن تخترن تخترن تخترن تخترن",l)}
        </Typography>
    </Box>
</Box>
  )
}

export default WhyUs