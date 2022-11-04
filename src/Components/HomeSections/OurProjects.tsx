import {Box, Typography} from '@mui/material'
import React from 'react'
import ProjectCard from '../Cards/ProjectCard'
import Typo from '../Typography/Typo'

const OurProjects = () => {
    return (
        <Box
        className='mw'
            sx={{
            pt: '7em',
            px: '1em',
            position: 'relative',
            textAlign: 'center'
        }}>
            <Box
                sx={{
                pt: '1.5em',
                px: '1em'
            }}>
                <Typo className='h1' en='Our Latest Work' ar='اخر مشاريعي اتاا'/>
                <Typo
                    sx={{
                    fontSize: '1.5em',
                    color: '#000000b8'
                }}
                    en='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                    ar='خرا خؤا شلنصف حلحشسح شيلةصض صضحخبن نبشر لشنؤ؟'/>

            </Box>
            <Box
                sx={{
                mt: '2em',
                flexWrap: 'wrap',
                gap:'1em',
                display: 'flex'
            }}>
             <ProjectCard display={{xs:'none'}}/>
             <ProjectCard />
             <ProjectCard />
               
         
              
                
            </Box>
        </Box>
    )
}

export default OurProjects