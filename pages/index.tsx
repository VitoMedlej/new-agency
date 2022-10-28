import About from "../src/Components/HomeSections/About"
import Hero from "../src/Components/HomeSections/Hero"
import Layout from "../src/Layout/Layout"

const index = () => {
  return (
    <Layout title='Hello world' description='hello'>
      <>
        <Hero/>
        <About/>
      </>
    </Layout>
  )
}

export default index