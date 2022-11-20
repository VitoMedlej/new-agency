import {Box, Button, Typography} from '@mui/material'
import {useRouter} from 'next/router'
import React, {useContext, useEffect} from 'react'
import ProjectCard from '../Cards/ProjectCard'
import {lang} from '../Navbar/Navbar'
import Typo from '../Typography/Typo'
import gsap from 'gsap'
import { LangContext } from '../../../pages/_app'

const projects = [
    {
        title: 'THE V214ITOZ',

        img: 'https://www.creative4all.com/uploads/portfolio/thumbs/small_ezzeddine.com-878958' +
                '1.jpg',
        href: 'https://home.com'
    }, {
        title: 'THE VI124TOZ',
        img: 'https://www.creative4all.com/uploads/portfolio/thumbs/small_ezzeddine.com-878958' +
                '1.jpg',
        href: 'https://home.com'
    }, {
        title: 'THE VI124TOZ',
        sx: {
            display: {
                xs: 'none',
                md: 'block'
            }
        },
        img: 'https://www.creative4all.com/uploads/portfolio/thumbs/small_ezzeddine.com-878958' +
                '1.jpg',
        href: 'https://home.com'
    }, {
        title: 'THE 124V214ITOZ',
        sx: {
            display: {
                xs: 'none',
                md: 'block'
            }
        },
        img: 'https://www.creative4all.com/uploads/portfolio/thumbs/small_ezzeddine.com-878958' +
                '1.jpg',
        href: 'https://home.com'
    }, {
        title: 'THE V124124ITOZ',
        sx: {
            display: {
                xs: 'none',
                lg: 'block'
            }
        },
        img: 'https://www.creative4all.com/uploads/portfolio/thumbs/small_ezzeddine.com-878958' +
                '1.jpg',
        href: 'https://home.com'
    }, {
        title: 'THE 125125125tq',
        sx: {
            display: {
                xs: 'none',
                lg: 'block'
            }
        },
        img: 'https://www.creative4all.com/uploads/portfolio/thumbs/small_ezzeddine.com-878958' +
                '1.jpg',
        href: 'https://home.com'
    }
]
const OurProjects = () => {
    const {l} = useContext(LangContext)

    
    useEffect(() => {

        gsap.fromTo('.tt01 p  ', {
            y: '5',
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: .20,
            scrollTrigger: {
                trigger: '.tt01',
                start: 'top 60%'
            }
        })
        gsap.fromTo('.tt01 p  ', {
            y: '5',
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: .20,
            scrollTrigger: {
                trigger: '.tt01',
                start: 'top 60%'
            }
        })
        gsap.fromTo('.p0 , .p1 , .p2 , .p3 , .p4 , .p5 ', {
            y: '5',
            opacity: 0
        }, {
            delay:.55,
            y: 0,
            opacity: 1,
            stagger: .30,
            scrollTrigger: {
                trigger: '.tt01',
                start: 'top 60%'
            }
        })

    }, [])

    return (
        <Box
            id='portfolio'
            className='mw'
            sx={{
            pt: '10em',
            px: '1em',
            position: 'relative',
            textAlign: 'center'
        }}>
            <Box className='tt01' sx={{
                px: '1em'
            }}>
                <Typo className='h1' en='Our Latest Work' ar='اخر مشاريعي اتاا'/>
                <Typo
                    className='tt1'
                    sx={{
                    // fontSize: '1.5em',
                    color: '#000000b8'
                }}
                    en='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                    ar='خرا خؤا شلنصف حلحشسح شيلةصض صضحخبن نبشر لشنؤ؟'/>

            </Box>
            <Box
                sx={{
                mt: '2em',
                flexWrap: 'wrap',
                gap: '1em',
                display: 'flex',
                justifyContent: 'center'
            }}>

                {projects.map((project, idx) => {
                    return <ProjectCard 
                    className={`p${idx}`}
                    sx={project.sx} key={project.title} data={projects[idx]}/>
                })
}


            </Box>
                <Button
                    className='btn b1'
                    sx={{
                    mt: '2em',
                    mb: '10em'
                }}>
                    {lang('Show More', ' مشاريعنا', `${l}`)}
                </Button>
        </Box>
    )
}

export default OurProjects