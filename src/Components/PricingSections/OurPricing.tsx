import {Box, Button} from '@mui/material'
import {useRouter} from 'next/router';
import React, { useContext } from 'react'
import { LangContext } from '../../../pages/_app';
import PlanCard from '../Cards/PlanCard';
import {lang} from '../Navbar/Navbar';
import Typo from '../Typography/Typo'

const plans = [
    {
        title: {
            en: 'Basic Plan (No hosting)',
            ar: 'الخطة الأساسية (بدون استضافة) '
        },
        isFeatured: false,
        price: {
            en: 19.99,
            ar: '١٩.٩٩'
        },
        description: {
            en: 'Best for small business',
            ar: 'ممتاز للشركات الصغيرة'
        },

        planFeatures: [
            {
                en: '2 pages',
                ar: '٢ صفحات'
            }, {
                en: '2 month maintenance',
                ar: 'شهرين دعم متواصل'
            }, {
                en: 'Takes time to complete',
                ar: 'يستهلك وقت ليجهز'
            },
            {
                en: 'Cost-Effective, low-risk investment',
                ar: 'ستثمار فعال من حيث التكلفة ومنخفض المخاطر'
            },
            {
                en: 'Simple but effective desgin',
                ar: `تصميم بسيط ولكنه فعال`
            }

        ]
    }, {
        title: {
            en: 'Advanced Plan',
            ar: 'الخطة المتطورة '
        },
        isFeatured: true,
        description: {
            en: 'Best for professionals',
            ar: 'مماثل للمحترفين'
        },
        price: {
            en: 39.99,
            ar: '٣٩.٩٩'
        },
        planFeatures: [
            {
                en: '6 pages',
                ar: '٦ صفحات'
            }, {
                en: '6 month support',
                ar: ' دعم وصيانة لمدة ٦ اشهر'
            }, {
                en: 'Long life-span website',
                ar: 'موقع طويل العمر'
            },{
                en: 'Enhanced design',
                ar: 'تصميم حديث'
            }
            ,{
                en : "Full content control",
                ar : 'تحكم كامل بالمحتوى'
            },
            {
                en : "High quality code and customization",
                ar : 'كود عالي الجودة والتخصيص'
            }

        ]
    }, {
        title: {
            en: 'Ultimate Plan',
            ar: 'الخطة المثالية '
        },
        isFeatured: false,
        description: {
            en: 'Fully customized plan',
            ar: 'الافضل لذيادة الارباح'
        },
        price: {
            en: 79.99,
            ar: '٧٩.٩٩'
        },
        planFeatures: [
            {
                en: 'Everything in Advanced plan ',
                ar: 'كل ما يوجد في الخطة المتطورة'
            }
            ,
            {
                en: '15 pages',
                ar: '١٥ صفحة'
            }, {
                en: '12 month support',
                ar: 'دعم لمدة 12 شهرًا'
            }, {
                en: 'Enterprise-level marketing data and analytics',
                ar: 'تحليلات وبيانات التسويق على مستوى المؤسسة'
            }
            ,
            {
                en : 'Complete control of design',
                ar : 'تحكم كامل في التصميم'
            },
            {
                en : 'Full custom functionality',
                ar : 'وظائف مخصصة كاملة'
            },
            {
                en : "Hosting + Domain + SSL",
                ar : 'استضافة + نطاق + طبقة المقابس الآمنة'
            },

        ]
    }
]

const OurPricing = () => {
    const {l} = useContext(LangContext)

    return (
        <Box
            className='mw'
            sx={{
            justifyContent: 'space-evenly',
            display: 'flex',
            flexDirection: lang('row','row-reverse',l),
            py: '1em',
            gap: '1.5em',
            flexWrap: 'wrap'
        }}>

            {plans && plans.map(plan => {

            return <PlanCard
                    key={plan.title.en}
                    title={plan.title}
                    description={plan.description}
                    rtl={lang('false', 'true', l)}
                    isFeatured={plan.isFeatured}
                    planFeatures={plan.planFeatures}
                    price={plan.price}/>
            })}

        </Box>
    )
}

export default OurPricing