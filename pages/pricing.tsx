import React from 'react'
import Layout from '../src/Layout/Layout'

import HeadSection from '../src/Components/PricingSections/HeadSection';
import OurPricing from '../src/Components/PricingSections/OurPricing';

const pricing = () => {

    return (
        <Layout
            title={{
            en: 'Simple Beirut Web | Best affordable web services in Lebanon',
            ar: 'بيروت ويب البسيط | ارخص اسعار خدمات ويب في كل لبنان'
        }}
            description={
              {en:'Cheapest Web Development in Lebanon | Best prices for excelent quality software services.',
              ar : 'ارخص خدمات تطوير ويب سايت في لبنان | تصميم مواقع الكترونية بجودة ممتازة'
            }
            }>
            <> <HeadSection/>
            <OurPricing/>
        </>
    </Layout>
    )
}

export default pricing
