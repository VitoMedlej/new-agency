import {Box, Button, TextField} from '@mui/material'
import {useRouter} from 'next/router'
import React from 'react'
import Dots from '../Desgin/Dots'
import {lang} from '../Navbar/Navbar'
import Typo from '../Typography/Typo'

const Contact = () => {
    const router = useRouter();
    const {l} = router.query;
    return (
        <Box
            sx={{
            py: '5em',
            mx: {xs:0,md:'1em'},
            mb: '5em',
            pt: {xs:'5em',md:'10em'},
            position: 'relative'
        }}>
            <Box
                sx={{
                display: 'flex',
                flexDirection: lang('row-reverse', 'row', l),
                justifyContent: {
                    xs: 'center',
                    md: 'space-between'
                }
            }}
                className='mw'>

                <Box
                    sx={{

                        position:'relative',
                        width: '57%',
                    display: {
                        xs: 'none',
                        md: 'block'
                    }
                }}>
                    <Dots 
                    sx={{
                        top: '-23%',
                        left: '-5%',
                    
                    }}
                    color='#6000a9'/>

                    <img
                        className='img'
                        src="https://images.pexels.com/photos/7792770/pexels-photo-7792770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""/>
                 <Box className='mw'>
                faksfasf
            </Box>
                </Box>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems:{xs:'center',md: lang('baseline', 'end', l)},
                    padding: '1em',
                    width: {
                        xs: '100%',
                        md: '43%'
                    },
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
                        gap: '1.25em',
                        width: '90%',
                        position:'relative',
                        justifyContent: 'right'
                    }}>
                             <Dots 
                    sx={{
                        top: '105%',
                        left: '-8%',
                        display : {md:'none`'}
                    }}
                  color='#02010182' />
                        <TextField id="outlined-basic" label={lang('Name',"الاسم",l)} variant="outlined"/>
                        <TextField id="outlined-basic" label={lang('Email',"الايميل",l)} variant="outlined"/>
                        <TextField id="outlined-basic" label={lang('Phone',"الهاتف",l)} variant="outlined"/>
                        <TextField id="outlined-basic" rows={4} multiline={true} label={lang('Message',"رسالة",l)}variant="outlined"/>
                        <Box sx={{
                                textAlign: {xs:'center',md:'inherit'},
                            width: '100%'
                        }}>
                            <Button className='btn b1'>
                                {lang('OUR WORK', ' مشاريعنا', `${l}`)}
                            </Button>
                    
                        </Box>
                    </Box>
                </Box>
            </Box>
         

        </Box>
    )
}

export default Contact