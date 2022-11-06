import React from 'react'
import Layout from '../src/Layout/Layout'
import {Box, Button, Typography} from '@mui/material'
import {useRouter} from 'next/router';
import {lang} from '../src/Components/Navbar/Navbar';
import Typo from '../src/Components/Typography/Typo';
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
