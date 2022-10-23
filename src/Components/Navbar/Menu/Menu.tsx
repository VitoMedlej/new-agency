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
                }
            }}>
                hello world
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
                pl:'1.5em'
                // alignItems: {
                //     xs: 'baseline',
                //     md: 'center'
                // },
                // justifyContent: 'space-between'
            }}>
             
                <Box className='menu-links center' sx={{pt:{xs:'2em',sm:0}}}>
                    <Link href='/'>
                    <Typography>
                        Home
                    </Typography>
                    </Link>
                    <Link href='/'>
                    <Typography>
                        Home
                    </Typography>
                    </Link>
                    <Link href='/'>
                    <Typography>
                        Home
                    </Typography>
                    </Link>
                    <Link href='/'>
                    <Typography>
                        Home
                    </Typography>
                    </Link>
                 

                </Box>
                <SocialMedia sx={{display:{md:'none'}}}/>
            </Box>
                <IconButton
                    className='cursor close-btn'
                    sx={{
                        position:'absolute',
                        top:'0%',
                        right:'0%',
                        ':hover' : {color:'red'},

                    margin: '1em'
                }}>
                    <CancelIcon
                        fontSize='large'
                        sx={{
                        ':hover' : {color:'red'},
                        color: 'white',
                        transform: 'scale(1.3)'
                    }}/>
                </IconButton>
        </Box>
    )
}

export default Menu