import { Box, Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { LangContext } from '../../../pages/_app'
import { lang } from '../Navbar/Navbar'
import Typo from '../Typography/Typo'

const HeadSection = () => {
    const {l} = useContext(LangContext)

  return (
    <Box sx={{
        position: 'relative',
        background : '#6000a9',
        color : 'white',
        
    }}>

        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column'
        }}
            className='mw center'>

            <Box
                sx={{
                textAlign: 'center',
                py: '4em',
                px: '1em'
            }}>

                <Typo
                className='mw'
                    sx={{
                   
                    margin: '0 auto',
                    fontWeight: 'bolder',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    fontSize: {
                        xs: '2.2em',
                        sm: '4em',
                        md: '5em',
                        xl: '5.5em'
                    }
                }}
                    en='OUR PRICES ARE THE'
                    ar='تصمبم ويب؟ تطوبر لاننا '/>

                <Typo
                    sx={{
                    maxWidth: '640px',
                    margin: '0em auto',
                    color: '#ffffff91',
                    fontWeight: '400',
                    fontSize: {
                        xs: '.9em',
                        sm: '1.3em',
                        lg: '1.5em'
                    }
                }}
                    en=' Web design? web development? doesnt matter! Get your effective website today for a price of a t-shirt.'
                    ar='تصمبم ويب؟ تطوبر ويب؟ لايهم لاننا قادرين على تطوير كل ما تريد بسعر بيدزا'/>

                <Box
                    sx={{
                    my: '2.5em',
                    gap: '.7em',
                    flexWrap: 'wrap',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Button 
                    sx={{color:'#6000a9 !important',background:'white !important'}}
                    className='btn b1'>{lang('GET STARTED', ' البداء', `${l}`)}</Button>
                    <Button 
                    sx={{
                        border: '1px solid white !important',
                        color: 'white !important',
                    }}
                    className='btn b2'>{lang('OUR WORK', ' مشاريعنا', `${l}`)}
                    </Button>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default HeadSection