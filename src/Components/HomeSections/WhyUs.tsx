import {Box, Typography} from '@mui/material'
import {useRouter} from 'next/router';
import React from 'react'
import {lang} from '../Navbar/Navbar';
import Typo from '../Typography/Typo';

const Reasons = [
    {
        title: {
            en: '1-The Cheapest',
            ar: '١-الارخص'
        },
        text: {
            en: 'Cheapest Web Agency in the entire Middle East',
            ar: 'ارخص وكالة ويب في الشرق الاوسط'
        },
        img: 'https://img.freepik.com/free-photo/billie-dollar-money-background_1150-749.jpg?t=st=1669372241~exp=1669372841~hmac=cc1852b0187ab69bffe5632aaf307373ecb2f8e885a5529794011b9290bd0782'
    }, {
        title: {
            en: '2-Satisfying results',
            ar: '٢-نتيجة مرضية'
        },
        text: {
            en: 'Pay if and only if you are satisfied with the website.',
            ar: 'ادفع فقط اذا اعجبك الموقع '
        },
        img: `https://img.freepik.com/free-photo/tablet-with-annual-report_1098-3459.jpg?w=826&t=st=1669372466~exp=1669373066~hmac=0acc249034ee7d20a8e4b0ca294a23b5b8387c697e7e83e35d87a78cb8c52eaa`
    }, {
        title: {
            en: '3-Fast Service ',
            ar: '٣-اسرع خدمة'
        },
        text: {
            en: 'Small company means you are served instantly. ',
            ar: 'كوننا شركة صغيرة يعني خدمتك بتكون في نفس الوقت'
        },
        img: 'https://img.freepik.com/premium-photo/businessman-rocket-mixed-media_641298-6645.jpg?w=826'
    }, {
        img: 'https://img.freepik.com/premium-photo/headset-with-blurred-call-center-employee-hand-working-operation-room_42708-612.jpg?w=826',
        title: {
            en: '4- Permanet Support',
            ar: '٤-خدمة زبئن دائما'
        },
        text: {
            en: '24/7 free support for a year for our beloved clients. ',
            ar: '٢٤\٧ خدمة ودعم لمدة سنة كاملة مجانا'
        }
    }
]
const WhyUs = () => {
    const router = useRouter();
    const {l} = router.query;
    return (
        <Box
            sx={{
            
            px: '1em',
            mb:'10em',
            position: 'relative',
            background: '#6000a9',
            color: 'white',
            textAlign: 'center'
        }}>
            <Box
                sx={{
                pt: '1.5em',
                px: '1em'
            }}>

                <Typo
                    className='h1'
                    en='Why Choose Us?'
                    ar='لما تخترنا؟'
                    sx={{
                    color: 'white'
                }}/>
                <Typo
                    en='Few of many reasons to choose us over other web agencies.'
                    ar='بعض الاسباب لما عليك اختيارنا بدل الوكالات الاخرى'
                    sx={{
                    pt:'.15em',
                    color: '#c2c2c2'
                }}/>

            </Box>
            <Box
                className='mw'
                sx={{
                margin: '0 auto',
                transform: {
                    xs: 'translateY(10%)',
                    sm: 'translateY(25%)',
                    md: 'translateY(35%)'
                },
                width: {
                    md: '90%'
                },
                padding: '1em',
                gap: '1em',
                flexWrap: 'wrap',
                color: 'black',
                boxShadow: '1px 1px 3px #00000036',
                display: 'flex',
                background: 'white',
                justifyContent: 'space-around',
                flexDirection : lang('row', 'row-reverse',l),
                borderRadius: "9px"
            }}>

                {Reasons.map((reason, idx : number) => {

                    return <Box
                        key={idx}
                        sx={{
                        width: {
                            xs: '40%',
                            sm: '25%',
                            md: '21%'
                        },
                        padding: '.75em',
                        // height: '100px',
                        background: 'white',
                        position: 'relative',
                        color: 'white',
                        zIndex: '111',
                        backgroundImage: `url('${reason
                            ?.img}')`
                    }}>
                        <Box
                            className='absolute'
                            sx={{
                            background: '#0000009e',
                            zIndex: '-1'
                        }}></Box>

                        <Typo
                            sx={{
                            fontSize: '1.5em',
                            fontWeight: '700',
                            mb:'.25em',
                        }}
                            en={reason.title.en}
                            ar={reason.title.ar}/>

                        <Typo en={reason.text.en} ar={reason.text.ar}/>

                    </Box>
                })}

            </Box>
        </Box>
    )
}

export default WhyUs