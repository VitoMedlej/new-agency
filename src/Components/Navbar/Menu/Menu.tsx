import {Box, IconButton, Typography} from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import Link from 'next/link';
import SocialMedia from '../../SocialMedia/SocialMedia';
import Dots from '../../Desgin/Dots';
import { INavbar } from '../../../Types';

const Menu = ({animateMenu } : INavbar) => {

   
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
                alignItems: 'baseline',
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
                    pt: {
                        xs: '2em',
                        sm: 0
                    }
                }}>

                    {[
                        {
                            title: 'HOME',
                            href: '/'
                        }, {
                            title: 'SERVICES',
                            href: '/services'
                        }, {
                            title: 'PORTFOLIO',
                            href: '/portfolio'
                        }, {
                            title: 'ABOUT',
                            href: '/about'
                        }, {
                            title: 'PRICING',
                            href: '/pricing'
                        }
                    ].map(link => {
                        return <Link key={link.title} href={`${link.href}`}>
                            <Typography>
                                {link.title}
                            </Typography>
                        </Link>
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