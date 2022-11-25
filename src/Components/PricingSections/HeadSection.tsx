import { Box, Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { LangContext } from '../../../pages/_app'
import { lang } from '../Navbar/Navbar'
import Typo from '../Typography/Typo'
import gsap from 'gsap';

const HeadSection = () => {
    const {l} = useContext(LangContext)
    const router = useRouter();
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
                    en='Low budget? Worry not!'
                    ar=' ميزانية ضيقة؟ لا تقلق  '/>

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
                    en='Having a website is priority, and it should not cost $300. Thats why we are here to make your life easier. '
                    ar='امتلاك موقع الكتروني هو من الاساسيات, و و ولا يجب ان تكلفك ٣٠٠ دولار, لذالك نحن هنا لنسهل حياتك'/>

                <Box
                    sx={{
                    my: '2.5em',
                    gap: '.7em',
                    flexWrap: 'wrap',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Button 
                    onClick={()=>{router.push('/');gsap.to(window, {duration:.7,scrollTo:'#contact'})}}
                    sx={{color:'#6000a9 !important',background:'white !important'}}
                    className='btn b1'>{lang('GET STARTED', ' البداء', `${l}`)}</Button>
                    <Button 
                    onClick={()=>router.push('/')}
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