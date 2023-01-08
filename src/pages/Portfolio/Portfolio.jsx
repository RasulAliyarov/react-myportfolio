import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Data from "../../data"
import PortfolioStyle from "./Portfolio.scss"
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion'
import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

function Portfolio() {
  let [active, setActive] = useState("")
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <motion.div className="portfolio"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: window.innerWidth }}>
        <div className="portfolio__wrapper container">
          {
            Data.data.map(item => {
              return (
                <div key={item.id} className={`portfolio__wrapper__project `}>
                  <div className={`portfolio__wrapper__project__links  ${active === item.id ? 'active' : ''}`}
                    onMouseOver={() => setActive(item.id)}>
                    <a target="_blank" href={item?.link} id={item.id} className='portfolio__wrapper__project'><h4>{item.title}</h4></a>
                  </div>
                  <div id={`background${item.id}`} className="portfolio__wrapper__project__background ">
                    <OwlCarousel
                      items={1}
                      autoplay
                      loop
                      autoplayTimeout={4000}>
                      <img src={item?.img1} alt="" />
                      <img src={item?.img2} alt="" />
                      <img src={item?.img3} alt="" />
                    </OwlCarousel>
                  </div>
                </div>
              )
            })
          }
        </div>
      </motion.div>
    </>
  )
}

export default Portfolio