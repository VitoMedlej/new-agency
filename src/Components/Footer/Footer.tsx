import gsap from 'gsap';
import {Box, Typography, Divider, Grid} from '@mui/material';

import Link from 'next/link';
import { useRouter } from 'next/router';
import Typo from '../Typography/Typo';
function Copyright() {
 
    return (
<>
        <Divider/>
        <Box
        maxWidth='lg' 
        sx={{
            textAlign:'center',
            margin : '1em auto'
        }}>
            

            <Typography variant='h1' fontSize='1em'>
                {'Copyright © '}
                <Link color="inherit" href={`${window.location.href || 'https://simplebeirut.onrender.com/'}`}>
                {window.location.href || 'simplebeirut.onrender.com'}
                </Link>{' '} {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
        </>

    );
}
const styles = {
    mt: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    flexWrap: 'wrap',
    color: 'white'
}

function Footer() {
    const router = useRouter()
    return (
        <Box >
            <Divider/>
            <Box
                sx={{
             padding:'1em',
                color: 'black',
                minHeight: '200px',
                display: 'flex',
                margin: '0 auto'
            }}>
                <Grid
                    sx={{
                    gap: '1.5em',
                    mx: {
                        xs: '3vw',
                        lg: 'auto'
                    },
                    my: '2em'
                }}
                    maxWidth='lg'
                    container>
                    <Grid item xs={12} sm={6} md={5}>
                        <Typo  sx={{fontSize:'1.4em', fontWeight:'400'}} en='About' ar='من نكون'></Typo>

                        <Box sx={styles}>
                            <Typo
                            sx={{color:'black'}}
                            en={`
                                                        We are a web and software development agency, we are helping lebanese businesses to grow. We provide a wide array of services and quality work for all budgets making us the most affordable website development company in lebanon and the middle east.


                            `}
                            ar={`
                            نحن وكالة لتطوير الويب والبرمجيات ، نحن نساعد الشركات اللبنانية على النمو. نحن نقدم مجموعة واسعة من الخدمات والعمل الجيد لجميع الميزانيات مما يجعلنا شركة تطوير مواقع الويب الاقل تكلفة في لبنان والشرق الأوسط.                            
                            `}
                            />
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Typo en='Links' ar='الروابط'  sx={{fontSize:'1.4em',fontWeight:'400'}}/>

                        <Box className='link' sx={styles}>
                            <Typo 
                            en='Home'
                            ar='الرئيسية'
                            className='FooterLink'
                            onClick={()=>{router.push('/'); gsap.to(window, {duration: .8, scrollTo: `#hero`})}}
                            />
                            <Typo
                            className='FooterLink'
                            onClick={()=>{router.push('/'); gsap.to(window, {duration: .5, scrollTo: `#contact`})}}
                            
                            en='Contact' ar='تواصل'/>
                         
                            <Typo en='About' ar='من نحن' 
                            className='FooterLink'
                            onClick={()=>{router.push('/'); gsap.to(window, {duration: .5, scrollTo: `#about`})}}
                            />
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Typo  sx={{fontSize:'1.4em', fontWeight:'400'}} en='Contact' ar='التواصل'></Typo>
                        <Box className='links' sx={styles}>
                            <a target='_blank' rel="noreferrer" href='https://github.com/VitoMedlej'>

                                <Typo
                                en='Facebook'
                                ar='فيسبوك'
                                />
                            </a>
                            <Typography variant='h1' fontSize='1em'>simplebeirutweb@gmail.com</Typography>
                            <Typography variant='h1' fontSize='1em'>Lebanon/beirut</Typography>
                            <Typography variant='h1' fontSize='1em'>+961/81826445</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Copyright/>
        </Box>

    );

}
export default Footer