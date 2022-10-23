import { Box } from '@mui/material'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramOutlinedIcon from '@mui/icons-material/InstagramOutlinedIcon'

const SocialMedia = (sx:any) => {
  return (
    <Box sx={{...sx}}>
        <a href='/' className='social-link'>
        <InstagramOutlinedIcon/>
        </a>
    </Box>
  )
}

export default SocialMedia