import {Box, IconButton, Typography} from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import Link from 'next/link';
import SocialMedia from '../../SocialMedia/SocialMedia';
import Dots from '../../Desgin/Dots';
import { INavbar } from '../../../Types';
import Typo from '../../Typography/Typo';
import { lang } from '../Navbar';
import router, { useRouter } from 'next/router';
import gsap from 'gsap';
import { useContext } from 'react';
import { LangContext } from '../../../../pages/_app';


const links = 
[
    {
        title: {en:'HOME',ar:'الرايسية'},
        href: '/'
    }, {
        title: {en:'ABOUT',ar:'من نحن'},
        href: '/?s=about'
    }, {
        title: {en:'PORTFOLIO',ar:'معرض'},
        href: '/?s=portfolio'
    }, {
        title: {en:'PRICING',ar:'السعر'},
        href: '/pricing'
    }, {
        title: {en:'CONTACT',ar:'تواصل معنا'},
        href: '/?s=contact'
    }
]
const Menu = ({animateMenu } : INavbar) => {

    const {l} = useContext(LangContext)


    return (
        <Box
        className='main-menu'
            sx={{
            height: '100vh',
            width: '100%',
            display:  'none',
            // display: isOpen ? 'flex' : 'none',
            zIndex: '555',
            position: 'fixed',
            top: 0,
            right: 0
        }}>
            <Box
                sx={{
                height: '100%',
                position: 'absolute',
                display:{xs:'none',md:'flex'},
                width: {
                    xs: 0,
                    md: '33%',
                    xl: '25%'
                }
            }}>
                <Box
                    className='slide3 center'
                    sx={{
                    height: '50%',
                    flexDirection: 'column',
                    background:'white',               
                    position:'absolute',
                    top:0,
                    left:0,
                    width:'100%',
                    // px: '1em'
                }}>

                    <Typography
                        sx={{
                        fontSize: '2em',
                        fontWeight: 'bolder',
                        textAlign: 'center',
                        pb: '.75em'
                    }}>
                        Get your own website today
                    </Typography>
                    <Link href='/'>
                        <Typography
                            sx={{
                            color: '#6000a9',
                            textDecoration: 'underline',
                            cursor: 'pointer'
                        }}>
                            Book an Appointment
                        </Typography>
                    </Link>

                </Box>
                <Box
                    className='center menu-bg slide2'
                    sx={{
               
                    flexDirection: 'column',
                    height: '50%',
                    position: 'absolute',
                    width:'100%',
                    bottom:0,
                    left:0
                }}>
                    <Box className='menu-color absolute'></Box>
                    <Box sx={{
                        zIndex: '111'
                    }}>

                        <Typography
                            sx={{
                            fontSize: '2em',
                            letterSpacing: '.54em',
                            fontWeight: 'bolder',
                            color: 'white'
                        }}>
                            FOLLOW US
                        </Typography>
                        <SocialMedia
                            sx={{
                            margin:'0 auto',
                            justifyContent: 'center',
                            display: {
                                md: 'none'
                            }
                        }}/>
                    </Box>
                </Box>

            </Box>
            <Box
            className='slide1'
                sx={{
                    position: 'absolute',
                    right:0,
                display: 'flex',
                flexDirection: 'column',
                textAlign: lang('left','right',l),
                alignItems: lang('baseline','end',l),
                justifyContent: 'center',
                background: '#19181d !important',
                height: '100%',
                width: {
                    xs: '100%',
                    md: '67%',
                    xl: '75%'
                },
                padding: '0'
            }}>

                <Box
                    className='menu-links '
                    sx={{
                    pl : lang('3em','0',l),
                    pr : lang('0','3em',l),
                    pt: {
                        xs: '2em',
                        sm: 0
                    },
                    
                }}>

                    {links.map(link => {
                        return  <Typography
                        component='p'
                            onClick={()=>{
                                animateMenu('0%','-150%',true);
                          if (link.href.includes('#')) {
                            router.push('/')      
                            gsap.to(window,{duration:.8,scrollTo:`${link.href}`})
                              return
                            } 
                            router.push(link.href)      
                        
                        
                        }}
                        key={link.href}>
                            {lang(link.title.en,link.title.ar,l)}
                            {/* <Typo en={} ar={link.title.ar} /> */}
                        </Typography>
                    })
}

                </Box>
            </Box>
            <IconButton
            
                onClick={()=>{animateMenu('0%','-150%',true);
                }}
                className='cursor close-btn'
                sx={{
                position: 'absolute',
                opacity:'0',
                pointerEvents:'none',
                top: '0%',
                right: '0%',
                ':hover': {
                    color: 'red'
                },
                margin: '1em'
            }}>
                <CancelIcon
                
                    fontSize='large'
                    sx={{
                    ':hover': {
                        color: 'red'
                    },
                    color: 'white',
                    transform: 'scale(1.3)'
                }}/>
            </IconButton>
            <Dots/>
        </Box>
    )
}

export default Menu