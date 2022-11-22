import About from "../src/Components/HomeSections/About"
import Contact from "../src/Components/HomeSections/Contact"
import Hero from "../src/Components/HomeSections/Hero"
import OurProjects from "../src/Components/HomeSections/OurProjects"
import Reasons from "../src/Components/HomeSections/Reasons"
import WhyUs from "../src/Components/HomeSections/WhyUs"
import Layout from "../src/Layout/Layout"

const index = () => {
  return (
    <Layout
    description={{
      en:'We are a web/software development agency with highest quality services and lowest pricing in whole Lebanon',
      ar:'نحن وكالة تطوير ويب والافضل جودة و الارخص سعرا في كل لبنان'
    }}
    title={{ar:'اوفر وكالة تطوير مواقع الكترونية في لبنان | بيروت ويب البسيط  '
    ,en:`Simple Beirut Web | Affordable Software Engineering Agency In Lebanon`}} >
      <>
        <Hero/>
        <About/>
        <Reasons/>
        <OurProjects/>
        <WhyUs/>
        <Contact/>
      </>
    </Layout>
  )
}

export default index