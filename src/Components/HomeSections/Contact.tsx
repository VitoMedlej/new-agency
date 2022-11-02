import {Box} from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <Box
            sx={{
            py: '5em',
            mx: '1em',
            mb: '5em',
            pt: '2em',
            position: 'relative'
        }}>
            <Box
                sx={{
                padding: '1em',
                width: '95%',
                background: '#3D4A6D',
                borderRadius: '9px',
                color:'white'
            }}
                className='mw'>
                Text
            </Box>
        </Box>
    )
}

export default Contact