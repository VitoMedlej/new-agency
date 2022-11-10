import {Box, Button, Typography} from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import ProjectCard from '../Cards/ProjectCard'
import { lang } from '../Navbar/Navbar'
import Typo from '../Typography/Typo'



const projects = [
    {
        title : 'THE VITOZ',
        img : 'https://www.creative4all.com/uploads/portfolio/thumbs/small_ezzeddine.com-8789581.jpg',
        href : 'https://home.com'
    },
    {
        title : 'THE VITOZ',
        img : 'https://www.creative4all.com/uploads/portfolio/thumbs/small_ezzeddine.com-8789581.jpg',
        href : 'https://home.com'
    },
    {
        title : 'THE VITOZ',
        img : 'https://www.creative4all.com/uploads/portfolio/thumbs/small_ezzeddine.com-8789581.jpg',
        href : 'https://home.com'
    },
    {
        title : 'THE VITOZ',
        img : 'https://www.creative4all.com/uploads/portfolio/thumbs/small_ezzeddine.com-8789581.jpg',
        href : 'https://home.com'
    },
    {
        title : 'THE VITOZ',
        img : 'https://www.creative4all.com/uploads/portfolio/thumbs/small_ezzeddine.com-8789581.jpg',
        href : 'https://home.com'
    },
    {
        title : 'THE VITOZ',
        img : 'https://www.creative4all.com/uploads/portfolio/thumbs/small_ezzeddine.com-8789581.jpg',
        href : 'https://home.com'
    },

]
const OurProjects = () => {
    const router = useRouter();
    const {l} = router.query;
    return (
        <Box
        className='mw'
            sx={{
            pt: '10em',
            px: '1em',
            position: 'relative',
            textAlign: 'center'
        }}>
            <Box
                sx={{
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
                display: 'flex',justifyContent: 'center'
            }}>
        
            
             <ProjectCard data={projects[0]} />
             <ProjectCard data={projects[1]}/>
             <ProjectCard data={projects[2]} sx={{display:{xs:'none',md:'block'}}}/>
             <ProjectCard data={projects[3]} sx={{display:{xs:'none',md:'block'}}}/>
             <ProjectCard data={projects[4]} sx={{display:{xs:'none',lg:'block'}}}/>
             <ProjectCard data={projects[5]} sx={{display:{xs:'none',lg:'block'}}}/>
               
                        <Button className='btn b1'
                        sx={{mt:'2em',mb:'10em'}}
                        >
                            {lang('Show More', ' مشاريعنا', `${l}`)}
                        </Button>
            
              
                
            </Box>
        </Box>
    )
}

export default OurProjects