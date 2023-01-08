import React from 'react'
import { Link } from 'react-router-dom'
import AboutStyle from "./About.scss"
import { Helmet } from "react-helmet";
import Aboutİmg from "../../assets/img/man.png"
import { motion } from 'framer-motion'
import Data from "../../data"
import { FaRegCalendarAlt } from 'react-icons/fa';

function About() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
            </Helmet>
            <motion.div className="about"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ width: window.innerWidth }} >

                <div className="about__wrapper">
                    <div className="about__wrapper__top  container">
                        <div className="about__wrapper__top__left">
                            <div className="about__wrapper__top__left__top">
                                <div className="about__wrapper__top__left__top__text">
                                    <span>
                                        <h1>Rasul</h1>
                                        <h1 className='secondName'>Aliyarov</h1>
                                    </span>
                                 </div>
                                <div className="about__wrapper__top__left__top__images">
                                    <div className='box bounce-in-top '></div>
                                    <img className='bounce-in-top ' src="https://autoimage.capitalone.com/cms/Auto/assets/images/1611-hero-should-you-transfer-a-car-loan-to-another-person.jpg" alt="" />
                                </div>
                            </div>
                            <div className="about__wrapper__top__left__bottom">
                                <div className="line"></div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis numquam tempore a amet dignissimos excepturi voluptate, quo iste? Quo impedit, provident tenetur eaque nisi illo deleniti aliquid modi dicta velit?</p>
                            </div>
                        </div>
                        <div className="about__wrapper__top__right">
                            <img  src="img/background/sideImg2.jpg" alt="" />
                        </div>
                    </div>

                    <div className="about__wrapper__bottom  container">
                        <p className="section-title_label">
                            - Skills
                        </p>
                        <ul className='about__wrapper__bottom__skills'>

                            {
                                Data.skillsData.map(skill => {
                                    return (
                                        <li key={skill.id} className='about__wrapper__bottom__skills__skill'>
                                            <img src={skill.icon} alt="" />
                                            <input type="range" id={"skill" + skill.id} />
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <div className="about__wrapper__bottom__EduAndExp">
                            <ul>
                                <p className="section-title_label">
                                    - Experience
                                </p>
                                <li>
                                    <span> <i><FaRegCalendarAlt /></i> 04.05.2021 - 01.07.2021</span>
                                    <h3>Front-end <span> Proton</span></h3>
                                    <p>Lorem ipsum dolor sit amet  adipisicing elit .</p>
                                </li>
                                <li>
                                    <span> <i><FaRegCalendarAlt /></i> 2021 - 2022</span>
                                    <h3>Manager <span> Vape Shop</span></h3>
                                    <p>Lorem ipsum dolor sit amet  adipisicing elit.</p>
                                </li>
                         
                            </ul>
                            <ul>
                                <p className="section-title_label">
                                    - Education
                                </p>
                                <li>
                                    <span> <i><FaRegCalendarAlt /></i> 2020 - 2024</span>
                                    <h3>AzTU</h3>
                                    <p>Radio and Telecommunications Engineering</p>
                                </li>
                                <li>
                                    <span> <i><FaRegCalendarAlt /></i> 2022 - 2023</span>
                                    <h3>Code Academy</h3>
                                    <p>Front-end developer</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default About