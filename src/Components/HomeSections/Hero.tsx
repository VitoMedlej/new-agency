import {Box, Button, Typography} from '@mui/material'

const Hero = () => {
    return (
        <Box >

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
                        <span>Beirut</span>
                        &nbsp;
                        <span className='clr'>Web</span>
                        &nbsp;
                        <span>Affordable</span>
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
                            Web design? web development? doesnt matter! Get your effective website today for a price of a t-shirt.
                    </Typography>
                <Box sx={{mt:'2em',gap:'.7em',flexWrap:'wrap',display:'flex',justifyContent:'center'}}>
                    <Button className='btn b1'>GET STARTED</Button>
                    <Button className='btn b2'>OUR WORK</Button>
                </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Hero