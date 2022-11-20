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
            en: 'Basic Plan',
            ar: 'الخطة الأساسية '
        },
        isFeatured: false,
        price: {
            en: 19.99,
            ar: 22
        },
        description: {
            en: 'Best for starters',
            ar: 'جيد للنوبس'
        },

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
        description: {
            en: 'Best for professionals',
            ar: 'مقلبشل شسلهخشت'
        },
        price: {
            en: 39.99,
            ar: 22
        },
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
        description: {
            en: 'Fully customized plan ',
            ar: 'فات اسس نيغا'
        },
        price: {
            en: 59.99,
            ar: 22
        },
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