import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import Header from "../components/header.component";
import Hero from "../components/hero.component"
import Description from "../components/description.component";
import Stats from "../components/stats.component";
import Feature from "../components/features.component";
import FAQ from "../components/FAQ.component";
import Reviews from "../components/reviews.component";
import Footer from "../components/footer.component";
const IndexPage = () => (
<div>
  <div className="font-body antialiased text-[#41454c] bg-[#FFFFFF]">
    <div className="my-5 px-[10%]">
      <Header/>
      <Hero/>
      <Description/>
      <Stats/>
      <Feature/>
      <FAQ/>
      <Reviews/>
    </div>
    <Footer/>
  </div>

</div>

)

export default IndexPage