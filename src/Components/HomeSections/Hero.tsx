import {Box, Button, Typography} from '@mui/material'
import { useRouter } from 'next/router';
import Dots from '../Desgin/Dots';
import { lang } from '../Navbar/Navbar';

const Hero = () => {
    const router = useRouter()
    const {l} = router.query; 
        return ( 
        <Box sx={{position:'relative'}}>

            <Box sx={{display:'flex',flexDirection:'column'}} className='mw center' >
                
                <Box sx={{textAlign:'center',py:'4em',px:'1em'}}>
                    {/* <Typography sx={{
                        fontWeight:'bolder',
                        fontSize:{
                            xs:'2.5em',
                            sm:'3.5em',
                            md:'4.5em',
                            lg:'6.5em',
                            xl:'7.5em'
                        }
                    }}>
                            Beirut Web Affordable
                    </Typography> */}
                    <Typography
                    sx={{
                        fontWeight:'bolder',
                        display:'flex',flexWrap: 'wrap',justifyContent: 'center',
                        fontSize:{
                            xs:'2.9em',
                            sm:'3.5em',
                            md:'4.5em',
                            lg:'6.5em',
                            xl:'7.5em'
                        }
                    }}
                    
                    >
                        <span>{lang('Beirut','رخيص',`${l}`)}</span>
                        &nbsp;
                        <span className='clr'>{lang('Web','ويب',`${l}`)}</span>
                        &nbsp;
                        <span>{lang('Affordable',' بيروت' ,`${l}`)}</span>
                    </Typography>
                    <Typography 
                    sx={{
                        maxWidth:'640px',
                        margin: '0em auto',
                        color:'#000000b8',
                        fontWeight:'400',
                        fontSize:{
                            xs:'.9em',
                            sm:'1.3em',
                            lg:'1.5em'
                        }
                    }}>
                          {lang('  Web design? web development? doesnt matter! Get your effective website today for a price of a t-shirt.','تصمبم ويب؟ تطوبر ويب؟ لايهم لاننا قادرين على تطوير كل ما تريد بسعر بيدزا',`${l}`)}
                    </Typography>
                <Box sx={{mt:'2em',gap:'.7em',flexWrap:'wrap',display:'flex',justifyContent:'center'}}>
                    <Button className='btn b1'>{lang('GET STARTED',' البداء' ,`${l}`)}</Button>
                    <Button className='btn b2'>{lang('OUR WORK',' مشاريعنا' ,`${l}`)} </Button>
                </Box>
                </Box>
            </Box>
            <Dots color='#6000a9'/>
        </Box>
    )
}

export default Hero