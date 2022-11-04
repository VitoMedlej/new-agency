import {Box, Typography} from '@mui/material'
import React from 'react'

const OurProjects = () => {
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
                        Our Latest Work
                </Typography>
                <Typography color='#000000b8'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>
            </Box>
        </Box>
    )
}

export default OurProjects