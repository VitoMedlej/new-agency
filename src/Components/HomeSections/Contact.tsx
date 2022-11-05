import {Box, Button, TextField} from '@mui/material'
import {useRouter} from 'next/router'
import React from 'react'
import {lang} from '../Navbar/Navbar'
import Typo from '../Typography/Typo'

const Contact = () => {
    const router = useRouter();
    const {l} = router.query;
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
                display: 'flex',
                justifyContent: {xs:'center',md:'space-between'}
            }}
                className='mw'>

                <Box sx={{
                    width: '57%',
                    display : {xs:'none',md:'block'}
                }}>
                    <img
                        className='img'
                        src="https://images.pexels.com/photos/7792770/pexels-photo-7792770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""/>
                </Box>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'end',
                    padding: '1em',
                    width: {xs:'100%',md:'43%'},
                    maxWidth: '500px',
                    borderRadius: '9px',
                    textAlign: lang('left', 'right', l)
                }}>
                    <Typo className='h1' en='Contact Us' ar='تواصل معنا'/>
                    <Typo
                        sx={{
                        color: '#000000b8',
                        pt: '.25em'
                    }}
                        en='contact us now bitch or else imma kill you'
                        ar='  تواصل معنا الان والا قتلتك يا بيتش هاها'/>
                    <Box
                        component='form'
                        sx={{
                        display: 'flex',
                        mt: '2em',
                        flexDirection: 'column',
                        gap : '1.25em',
                        width: '90%',
                        justifyContent: 'right'
                    }}>
                        <TextField id="outlined-basic" label="الاسم" variant="outlined"/>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                        <Button className='btn b2'>
                            {lang('OUR WORK', ' مشاريعنا', `${l}`)}
                        </Button>

                    </Box>
                </Box>
            </Box>
                <Box className='mw'>
                    faksfasf
                </Box>

        </Box>
    )
}

export default Contact