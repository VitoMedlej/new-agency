import {Box, Button, TextField} from '@mui/material'
import {useRouter} from 'next/router'
import React, {useContext, useRef, useState} from 'react'
import Dots from '../Desgin/Dots'
import {lang} from '../Navbar/Navbar'
import Typo from '../Typography/Typo'
import emailjs from '@emailjs/browser';
import {LangContext} from '../../../pages/_app'

const contacts = [
    {
        title: {
            en: 'Email',
            ar: 'ايميل'
        }

    }
]
const Contact = () => {
    const form = useRef();
    const [details,
        setDetails] = useState({status: 0, error: ''})
    const [email,
        setEmail] = useState('')

    const {l} = useContext(LangContext)

    const sendEmail = async(e : any) => {
        setDetails({status: 0, error: ''})

        e.preventDefault();

        if (!form.current) 
            return;
        let regexEmail = /^\S+@\S+\.\S+$/;
        if (!email || !email.match(regexEmail)) {
            setDetails({status: 400, error: 'Please Use a Valid Email Address'})
            console.log('return: ');
            return;
        }

        const req = await emailjs.sendForm(`service_eig2qxb`, 'template_gc3j6xq', form.current, '8qJYIm7toZyMq3yN_')
        const res = await req;
        if (res.status === 200) {
            setDetails({status: 200, error: 'Email sent successfully, thank you!'})
            return
        }
        setDetails({status: 400, error: 'We could not send your email, please try again.'})

    };
    return (
        <Box
            id='contact'
            sx={{
            py: '5em',
            mx: {
                xs: 0,
                md: '1em'
            },
            mb: '5em',
            pt: {
                xs: '5em',
                md: '10em'
            },
            position: 'relative'
        }}>
            <Dots
                sx={{
                top: '-23%',
                left: '-5%',
                display: {
                    xs: 'block',
                    md: 'none'
                }
            }}
                color='#6000a9'/>
            <Box
                sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column-reverse',
                    md: lang('row-reverse', 'row', l)
                },
                justifyContent: {
                    xs: 'center',
                    md: 'space-between'
                }
            }}
                className='mw'>

                <Box
                    sx={{
                    position: 'relative',
                    width: {
                        md: '60%' 
                    }
                }}>
                    <Dots
                        sx={{
                        top: '-23%',
                        left: '-5%',
                        display: {
                            xs: 'none',
                            md: 'block'
                        }
                    }}
                        color='#6000a9'/>
                    <Box
                        sx={{
                        display: {
                            xs: 'none',
                            md: 'block'
                        }
                    }}>

                        <img
                            className='img'
                            src="https://images.pexels.com/photos/7792770/pexels-photo-7792770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""/>
                    </Box>
                    <Box
                        className='mw'
                        sx={{
                        display: 'flex',
                        gap: '1em',
                        flexWrap: 'wrap',
                        justifyContent: {
                            xs: 'center',
                            sm: 'left'
                        },
                        textAlign: 'center',
                        pt: '1.5em'
                    }}>

                        <Box
                            sx={{
                            display: 'flex',
                            gap: '.5em'
                        }}>
                            <Typo
                                en='Email:'
                                sx={{
                                fontWeight: '600'
                            }}/>
                            <Typo en='simplebeirutweb@gmail.com'/>
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            gap: '.5em'
                        }}>
                            <Typo
                                en='Phone:'
                                sx={{
                                fontWeight: '600'
                            }}/>
                            <Typo en='+961 81/826445'/>
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            gap: '.5em'
                        }}>
                            <Typo
                                en='Location:'
                                sx={{
                                fontWeight: '600'
                            }}/>
                            <Typo en='Lebanon/Beirut '/>
                        </Box>

                    </Box>
                </Box>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '0 auto',
                    alignItems: {
                        xs: 'center',
                        md: lang('baseline', 'end', l)
                    },
                    width: {
                        xs: '100%',
                        md: '39%'
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
                        en='Send us a message and we will respond to you within an hour.'
                        ar='ارسل لنا رسالة وسوف نرد عليك في غضون ساعة'/>

                    <Typo
                        en={details.error}
                        sx={{
                        color: details.status === 200
                            ? 'white'
                            : ' red',
                        background: details.status === 200
                            ? '#238c23'
                            : ' pink',
                        width: '100%',
                        textAlign: 'center',
                        mt: '1em',
                        opacity: details.error.length > 1
                            ? 1
                            : 0
                    }}/>
                    <Box
                        ref={form}
                        onSubmit={sendEmail}
                        component='form'
                        sx={{
                        display: 'flex',
                        mt: '2em',
                        flexDirection: 'column',
                        gap: '1.25em',
                        width: '90%',
                        position: 'relative',
                        justifyContent: 'right'
                    }}>
                        <Dots
                            sx={{
                            top: '105%',
                            left: '-8%',
                            display: {

                                xs:'none',
                                md: 'block'
                            }
                        }}
                            color='#02010182'/>
                        <TextField
                            type='text'
                            name='Name'
                            id="outlined-basic1"
                            label={lang('Name', "الاسم", l)}
                            variant="outlined"/>
                        <TextField
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type='email'
                            name='Email'
                            id="outlined-basic2"
                            label={lang('Email', "الايميل", l)}
                            variant="outlined"/>
                        <TextField
                            type='text'
                            name='Phone'
                            id="outlined-basic3"
                            label={lang('Phone', "الهاتف", l)}
                            variant="outlined"/>
                        <TextField
                            type='text'
                            name='Message'
                            id="outlined-basic4"
                            rows={4}
                            multiline={true}
                            label={lang('Message', "رسالة", l)}variant="outlined"/>
                        <Box
                            sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'inherit'
                            },
                            width: '100%'
                        }}>
                            <Button type='submit' className='btn b1'>
                                {lang('Submit', ' ارسل', `${l}`)}
                            </Button>

                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Contact