import About from "../src/Components/HomeSections/About"
import Contact from "../src/Components/HomeSections/Contact"
import Hero from "../src/Components/HomeSections/Hero"
import OurProjects from "../src/Components/HomeSections/OurProjects"
import Reasons from "../src/Components/HomeSections/Reasons"
import WhyUs from "../src/Components/HomeSections/WhyUs"
import Layout from "../src/Layout/Layout"

const index = () => {
  return (
    <Layout title='Hello world' description='hello'>
      <>
        <Hero/>
        <About/>
        <Reasons/>
        <WhyUs/>
        <OurProjects/>
        <Contact/>
      </>
    </Layout>
  )
}

export default index