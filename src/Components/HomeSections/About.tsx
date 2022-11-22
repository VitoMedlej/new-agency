import {Box, Button, Typography} from '@mui/material'
import {useRouter} from 'next/router';
import React, { useContext, useEffect } from 'react'
import Dots from '../Desgin/Dots';
import {lang} from '../Navbar/Navbar';
import gsap from 'gsap';
import { LangContext } from '../../../pages/_app';

const content = [
    {
        en: `Simple beirut web is a web development agency based in 
        lebanon aimed help businesses and individuls grow. Getting a website/web app
        with good SEO is the our main focus while keeping the costs extremely low to satisfy all budgets. 
        `,
        ar: `
        
          مواسسة بيروت ويب بسيط هي وكالة تطوير ويب مقرها  
        لبنان  يهدف إلى مساعدة الشركات والأفراد على النمو. الحصول على موقع ويب / تطبيق ويب
          مع تحسين محركات البحث الجيدة هو تركيزنا الرئيسي مع إبقاء التكاليف منخفضة للغاية لتلبية جميع الميزانيات
        `
    }, {
        en: `We are relativly small but our goals and ambitions are big, therefore you can rely and trust us 
        with your projects and ideas and we surely won't disappoint. We also believe in ideal customer service so contact us
        right now and test how fast our response time is. 

        `,
        ar: `
        نحن صغيرون نسبيًا ولكن أهدافنا وطموحاتنا كبيرة ، لذلك يمكنك الاعتماد علينا والثقة بنا في مشاريعك وأفكارك ، ولن نخيب آمالنا بالتأكيد. نحن نؤمن أيضًا بخدمة العملاء المثالية ، لذا اتصل بنا الآن واختبر مدى سرعة وقت استجابتنا.`
    }
]
const About = () => {
    const router = useRouter();
    const {l} = useContext(LangContext)

    useEffect(() => {

        gsap.to('.about-img div',{duration:1.2,delay:1,width:'100%',scrollTrigger : {
            trigger : '.about-img',
            start : 'top 50%',
        }})

        gsap.fromTo('.t3',{opacity:0,y:'5'},{y:0,opacity:'1',scrollTrigger : {
            trigger : '.t3',
            start : 'top 50%',
         
        }})
        gsap.fromTo('.t4',{opacity:0,y:'10'},{y:0,opacity:'1',delay:'.1',scrollTrigger : {
            trigger : '.t3',
            start : 'top 50%',
         
        }})
        gsap.fromTo('.t5',{opacity:0,y:'10'},{y:0,opacity:'1',delay:'.15',scrollTrigger : {
            trigger : '.t3',
            start : 'top 50%',
         
        }})
        gsap.fromTo('.t6',{opacity:0,x:'-10'},{x:0,opacity:'1',delay:'.25',scrollTrigger : {
            trigger : '.t3',
            start : 'top 50%',
         
        }})
        
        
    },[])
    return (
        <Box
        id='about'
            sx={{
            my: '10em',
            mx: '1em',
            position: 'relative',

        }}>

            <Box
                sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column-reverse',
                    md: lang('row', 'row-reverse', l)
                },
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                overflow: 'hidden'
            }}
                className='mw '>
                <Box
                    sx={{
                    maxWidth: {
                        xs: '95%',
                        md: '460px',
                        lg: '600px',
                        textAlign: lang('left', 'right', l)
                    }
                }}>
                    <Typography className='h1 t3'>
                        {lang('Who We Are', 'من نحن؟', l)}
                    </Typography>
                    <Typography
                    className='t4'
                        sx={{
                        fontSize: {
                            xs: '1em',
                            lg: '1.2em'
                        },
                        fontWeight: '500',
                        py: '.75em',
                        color: '#000000b8'
                    }}>
                        {lang(content[0].en, content[0].ar, l)}

                    </Typography>
                    <Typography
                    className='t5'

                        sx={{
                        fontWeight: '500',
                        fontSize: {
                            xs: '1em',
                            lg: '1.2em'
                        },
                        pb: '1.25em',
                        color: '#000000b8'
                    }}>

                        {lang(content[1].en, content[1].ar, l)}
                    </Typography>

                    <Button 
                    onClick={()=>gsap.to(window, {duration:.7,scrollTo:'#contact'})}
                    className='btn b2 t6'>{lang('Contact Us ', ' تواصل معنا', `${l}`)}
                    </Button>

                </Box>
                <Box
                    className='about-img'
                    sx={{
                        overflow: 'hidden',
                    mb: {
                        xs: '1em',
                        lg: 0
                    },
                    width: {
                        xs: '95%',
                        sm: '470px',
                        lg: '550px',
                        xl: '600px'
                    },
                    height: {
                        sm: '270px',
                        md: '300px'
                    },
                    position: 'relative'
                }}>
                    <Box
                        sx={{
                        width: '0%',
                        position: 'absolute',
                        height: `100%`,
                        borderRadius: '4px',
                        
                    }}>

                        <img
                            src="https://res.cloudinary.com/dwcu3wcol/image/upload/v1667124444/pexels-photo-5821296_mroznf.jpg"
                            className='img '
                            alt=""/>
                    </Box>
                    <Box
                        className='style-box '
                        sx={{
                        right: lang('-6%', '85%', l)
                    }}>
                        <Box className='sb1'>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Dots
                sx={{
                top: {
                    xs: '-15%',
                    lg: '90%'
                },
                right: {
                    xs: '70%',
                    sm: '1%',
                    lg: '92%'
                }
            }}
                color='#55555594'/>

        </Box>

    )
}

export default About