import {Box, Button, Typography} from '@mui/material'
import {useRouter} from 'next/router';
import React, {useContext, useEffect} from 'react'
import ReasonCard from '../Cards/ReasonCard';
import {lang} from '../Navbar/Navbar';
import Typo from '../Typography/Typo';
import gsap from 'gsap';
import {LangContext} from '../../../pages/_app';

const rsns = [
    {
        img: 'https://www.svgrepo.com/show/429960/people-support-avatar.svg',
        title: {
            en: 'Credibility',
            ar: "الثقة"
        },
        text: {
            en: 'Having a website proves to customers that you are a real business.',
            ar: ' الموقع يعطي الناس احساس بمصداقية تجارتك وثقة فيك '
        }
    }, {
        img: 'https://www.svgrepo.com/show/38099/brand.svg',
        title: {
            en: 'Brand',
            ar: "الماركة"
        },
        text: {
            en: 'It represents you and what you stand for, increasing the chances of your custome' +
                    'rs buying from you.',
            ar: '    يمثل ما من انت وما تقوم به مما يزيد فرصة شراء الناس منك'
        }
    },
    {
        img: 'https://www.svgrepo.com/show/233933/online-marketing-advertising.svg',
        title: {
            en: 'Digital Marketing',
            ar: "تسويق الكتروني"
        },
        text: {
            en: 'Having a website allows you to reach new customers in addition to local ones.  ',
            ar: '    الموقع الالكتروني يساهم في ايجادك عملاء جدد بالاضافة الى عملاء محليين'
        }
    },
    {
        img: 'https://www.svgrepo.com/show/280934/web-site.svg',
        title: {
            en: 'Showcase Services/Products',
            ar: "عرض بضاعة وخدمات"
        },
        text: {
            en: 'Displaying important information about your products and services in attractive ways.',
            ar: 'عرض ما تقدمه من خدمات وبضاعة على الانترنت بطريقة ملفتة للانتباه'
        }
    }

]
const Reasons = () => {
    const {l} = useContext(LangContext)

    useEffect(() => {

        gsap.fromTo('.h00 p', {
            y: '5',
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.tt0',
                start: 'top 60%'
            }
        })
        gsap.fromTo('.tt1', {
            y: '5',
            opacity: 0
        }, {
            delay: .15,
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.tt0',
                start: 'top 60%'
            }
        })
        gsap.fromTo('.tt2', {
            x: '-5',
            opacity: 0
        }, {
            delay: .20,
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.tt0',
                start: 'top 60%'
            }
        })
        gsap.fromTo('.h00 button', {
            x: '-5',
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.tt0 ',
                start: 'top 60%'
            }
        })

        gsap.fromTo(`.z1 , .z2 , .z3 , .z4`, {
            y: '5',
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: .25,
            scrollTrigger: {
                trigger: '.z1',
                start: 'top 60%'
            }
        })
    }, [])

    return (
        <Box sx={{
            mx: '1em',
            position: 'relative'
        }}>
            <Box className='mw'>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        md: lang('row', 'row-reverse', l)
                    },
                    justifyContent: 'left'
                }}>
                    <Box
                        className='h00'
                        sx={{
                        maxWidth: {
                            md: '500px'
                        },
                        width: {
                            xs: '100%',
                            md: '50%'
                        }
                    }}>

                        <Typo
                            en='Why Does Your Business Need A Website?'
                            ar='ليش ضاوري يكون عندك ويب سايت؟'
                            className='h1 tt0'
                            sx={{
                            fontSize: {
                                xs: '2.5em !important',
                                sm: '3em !important'
                            },
                            mb: '.4em'
                        }}/>

                        <Button
                            onClick={() => gsap.to(window, {
                            duration: .7,
                            scrollTo: '#contact'
                        })}
                            sx={{
                            mt: {
                                md: '1em'
                            },
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}
                            className='btn b1'>{lang('Our Services', ' خدماتنا', `${l}`)}</Button>

                    </Box>

                    <Typography
                        className='tt1'
                        sx={{
                        maxWidth: {
                            md: '750px'
                        },
                        alignItems: 'center',
                        width: {
                            xs: '100%',
                            md: '85%'
                        },
                        display: 'flex',
                        color: '#000000b8',
                        fontWeight: '400',
                        fontSize: {
                            xs: '.9em',
                            sm: '1.3em',
                            lg: '1.5em'
                        }
                    }}>
                        {lang('Having a high quality website is crucial for any business that aims to get clien' +
                                'ts and generate more revenue.',
                        '.اذا كان هدفك تجيب ذباين وتزيد الارباح يعني بدون شك لازمك موقع جودته عالية', `${l}`)}
                    </Typography>
                    <Button
                        sx={{
                        mt: {
                            xs: '1em',
                            sm: 0
                        },
                        display: {
                            xs: 'flex',
                            md: 'none'
                        }
                    }}
                        onClick={() => gsap.to(window, {
                        duration: .7,
                        scrollTo: '#contact'
                    })}
                        className='btn b1 tt2'>{lang('Our Services', ' خدماتنا', `${l}`)}</Button>

                </Box>
                <Box
                    sx={{
                    mt: '4.5em',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: lang('left', 'right', l)
                }}>
                    {rsns.map((reason, idx : number) => {

                        return <ReasonCard
                            key={reason.title.en}
                            title={reason.title}
                            img={reason.img}
                            text={reason.text}
                            className={idx}/>
                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default Reasons