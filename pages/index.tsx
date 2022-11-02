import About from "../src/Components/HomeSections/About"
import Hero from "../src/Components/HomeSections/Hero"
import Reasons from "../src/Components/HomeSections/Reasons"
import Layout from "../src/Layout/Layout"

const index = () => {
  return (
    <Layout title='Hello world' description='hello'>
      <>
        <Hero/>
        <About/>
        <Reasons/>
      </>
    </Layout>
  )
}

export default index