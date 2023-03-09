import React from 'react'
import "./Home.scss"
import BackgroundVideo from "../../assets/img/keyboard_stock_preview.mp4"
import { AiOutlineDownload } from 'react-icons/ai';
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion'
import Typewriter from "typewriter-effect";

function Home() {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Rasul Aliyarov</title>
            </Helmet>
            <motion.div className='home'
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ width: window.innerWidth }}
            >
                <video loop muted autoPlay className='home__video'>
                    <source src={BackgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="home__content container">
                    <div className="home__content__title">
                        <h2><i>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Hi, there")
                                        .start();
                                }}
                            />
                        </i></h2>
                        <h1 className='wordflick'>

                            {
                                < Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("I'am Web Developer")
                                            .start();
                                    }}
                                />
                            }
                        </h1>
                        <div className='line'></div>
                        <p>I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
                        <a href="https://drive.google.com/uc?export=download&id=1gDPd2WUQenuaqjZpetuqyPyfRYGoDrjB">
                            <button className='pulsate-fwd btn'>
                                <span className='btnName'>
                                    <AiOutlineDownload />
                                    CV
                                </span>
                            </button>
                        </a>
                    </div>
                    <div className='home__content__image'>

                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Home

