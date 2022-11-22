import React from 'react'
import Layout from '../src/Layout/Layout'

import HeadSection from '../src/Components/PricingSections/HeadSection';
import OurPricing from '../src/Components/PricingSections/OurPricing';

const pricing = () => {

    return (
        <Layout
            title={{
            en: 'Simple Beirut Web | View our pricing and be amazed',
            ar: 'بيروت ويب البسيط | ارخص الاسعار في كل لبنان'
        }}
            description={
              {en:'Cheapest Web Development in Lebanon | Best prices for excelent quality software services.',
              ar : 'ارخص خدمات تطوير ويب سايت في لبنان | افضل اسعار بجودة ممتازة'
            }
            }>
            <> <HeadSection/>
            <OurPricing/>
        </>
    </Layout>
    )
}

export default pricing
