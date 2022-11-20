import React from 'react'
import Layout from '../src/Layout/Layout'

import HeadSection from '../src/Components/PricingSections/HeadSection';
import OurPricing from '../src/Components/PricingSections/OurPricing';

const pricing = () => {
   

    return (
        <Layout title='pricing' description='foo bar baz'>
         <>
           <HeadSection/>
           <OurPricing/>
         </>
        </Layout>
    )
}

export default pricing
