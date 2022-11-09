import {Box, Button} from '@mui/material'
import { useRouter } from 'next/router';
import React from 'react'
import PlanCard from '../Cards/PlanCard';
import {lang} from '../Navbar/Navbar';
import Typo from '../Typography/Typo'

const plans = [
    {
        title: {
            en: 'Basic Plan',
            ar: 'الخطة الأساسية '
        },
        isFeatured: false,
        price: {en:19.99,ar:22},
        planFeatures: [
            {
                en: '2 pages',
                ar: '2 صفحات'
            }, {
                en: '2 month support',
                ar: 'شهرين دعم متواصل'
            }, {
                en: '2 month support',
                ar: 'شهرين دعم متواصل'
            }

        ]
    }, {
        title: {
            en: 'Pro Plan',
            ar: 'الخطة المتطورة '
        },
        isFeatured: true,
        price: {en:39.99,ar:22},
        planFeatures: [
            {
                en: '10 pages',
                ar: '10 صفحات'
            }, {
                en: '2 month support',
                ar: 'شهرين دعم متواصل'
            }, {
                en: '2 month support',
                ar: 'شهرين دعم متواصل'
            }

        ]
    }, {
        title: {
            en: 'Ultimate Plan',
            ar: 'الخطة المثالية '
        },
        isFeatured: false,
        price: {en:59.99,ar:22},
        planFeatures: [
            {
                en: '200 pages',
                ar: '200 صفحات'
            }, {
                en: '2 month support',
                ar: 'شهرين دعم متواصل'
            }, {
                en: '2 month support',
                ar: 'شهرين دعم متواصل'
            }

        ]
    }
]

const OurPricing = () => {
    const router = useRouter();
    const {l} = router.query;
    return (
        <Box
            className='mw'
            sx={{
            justifyContent: 'space-evenly',
            display: 'flex',
            py: '1em',
            gap: '1.5em',
            flexWrap: 'wrap'
        }}>

            {plans && plans.map(plan => {

                return <PlanCard
                title={plan.title}
                rtl={lang('false','true',l)}
                isFeatured={plan.isFeatured}
                 price={plan.price}/>
            })}

        </Box>
    )
}

export default OurPricing