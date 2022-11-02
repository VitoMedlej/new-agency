import {Box} from '@mui/material'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const SocialMedia = (sx : any) => {
    return (
        <Box
            sx={{
            ...sx,
            display: 'flex',
            gap: '1em',
            justifyContent: 'center',
            pt: '1em'
        }}>
            <a href='/' className=' ins'>
                <InstagramIcon fontSize='large'/>
            </a>
            <a href='/' target='_blank' className=' fb'>
                <FacebookOutlinedIcon fontSize='large'/>
            </a>
            <a href='/' target='_blank' className=' wts'>
                <WhatsAppIcon fontSize='large'/>
            </a>

            <a href='/' target='_blank' className=' phn'>
                <LocalPhoneIcon fontSize='large'/>
            </a>

        </Box>
    )
}

export default SocialMedia