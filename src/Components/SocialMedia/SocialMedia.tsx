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
            <a href='https://github.com/VitoMedlej/new-agency' rel="noreferrer" target="_blank" className=' ins'>
                <InstagramIcon fontSize='large'/>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100088433730809' rel="noreferrer" target='_blank' className=' fb'>
                <FacebookOutlinedIcon fontSize='large'/>
            </a>
            <a href='https://wa.me/96181826445' rel="noreferrer" target='_blank' className=' wts'>
                <WhatsAppIcon fontSize='large'/>
            </a>

            <a href='https://github.com/VitoMedlej/new-agency' rel="noreferrer" target='_blank' className=' phn'>
                <LocalPhoneIcon fontSize='large'/>
            </a>

        </Box>
    )
}

export default SocialMedia