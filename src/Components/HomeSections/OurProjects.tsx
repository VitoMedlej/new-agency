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
        title: 'Ecommerce Web App',
        img: 'https://res.cloudinary.com/dwcu3wcol/image/upload/v1658233071/photo-1517292987719-0369a794ec0f_qexfcf.jpg',
        href: 'https://elvito-property.netlify.app/'
    }, {
        title: 'Real Estate Web App',
        img: 'https://res.cloudinary.com/dwcu3wcol/image/upload/v1658232753/photo-1588702547923-7093a6c3ba33_nxjka5.jpg',
        href: 'https://elvito-property.netlify.app/'
    }, {
        title: 'Travel Guide website',
        sx: {
            display: {
                xs: 'none',
                md: 'block'
            }
        },
        img: 'https://res.cloudinary.com/dwcu3wcol/image/upload/v1661587010/New_Project_byfwqi.jpg',
        href: 'https://elvito-planet.netlify.app/'
    }
]
const OurProjects = () => {
    const {l} = useContext(LangContext)
    const router = useRouter();
    
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
                <Typo className='h1' en='Our Latest Succesful Projects' ar=' مشاريعنا الناجحة'/>
                <Typo
                    sx={{
                    pt:'.15em',
                    fontSize: '1.5em',
                    color: '#000000b8'
                }}
                    en='We have the experience and the ability to turn ideas into success'
                    ar='لدينا الخبرة والقدرة على تحويل الافكار الى انجازات مزهرة'/>

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
                    className={`p${idx}`
                }
                    sx={project.sx} key={project.title} data={projects[idx]}/>
                })
}


            </Box>
                <Button
                onClick={ ()=> router.push('/pricing')}
                    className='btn b1'
                    sx={{
                    mt: '2em',
                    mb: '10em'
                }}>
                    {lang('Our Pricings', ' اسعارنا ', `${l}`)}
                </Button>
        </Box>
    )
}

export default OurProjects