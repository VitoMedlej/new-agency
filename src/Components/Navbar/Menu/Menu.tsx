import {Box, IconButton, Typography} from '@mui/material'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import CancelIcon from '@mui/icons-material/Cancel';
import Link from 'next/link';
import SocialMedia from '../../SocialMedia/SocialMedia';

const Menu = () => {
    return (
        <Box
            sx={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            zIndex: '555',
            position: 'fixed',
            top: 0,
            right: 0
        }}>
            <Box
                sx={{
                height: '100%',
                background: '#fff',
                width: {
                    xs: 0,
                    md: '33%',
                    xl: '25%'
                },
                
            }}>
                <Box sx={{
                    height: '50%'
                }}></Box>
                <Box
                className='center'
                sx={{
                    px:'1em',
                    flexDirection: 'column',
                    background:'#6000a9',
                    height: '50%'
                }}>
                    <Typography sx={{fontSize:'2em',letterSpacing:'.54em',fontWeight:'bolder',color:'white'}}>
                        FOLLOW US
                    </Typography>
                    <SocialMedia
                        sx={{
                        display: {
                            md: 'none'
                        }
                    }}/>
                </Box>

            </Box>
            <Box
                sx={{
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
                pl: '1.5em'
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
                        return <Link href={`${link.href}`}>
                            <Typography>
                                {link.title}
                            </Typography>
                        </Link>
                    })
}

                </Box>
            </Box>
            <IconButton
                className='cursor close-btn'
                sx={{
                position: 'absolute',
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
        </Box>
    )
}

export default Menu