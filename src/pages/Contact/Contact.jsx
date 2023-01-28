import React, { useRef } from 'react'
import ContactStyle from "./Contact.scss"
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiMail } from 'react-icons/hi';
import { GrMail } from 'react-icons/gr';
import { BsTelegram, BsFillTelephoneFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import { useFormik } from 'formik';
import emailjs from "emailjs-com"
import * as Yup from "yup"
import toast from 'react-hot-toast';
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion'

function Contact() {

    let name = useRef()
    let surname = useRef()
    let email = useRef()
    let message = useRef()
    let phone = useRef()

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(1, "Min symbol 1!").max(30, "Max symbol 30!").required("Please write name!"),
        surname: Yup.string().min(1, "Min symbol 1!").max(30, "Max symbol 30!").required("Please write surname!"),
        phone: Yup.number().min(1, "Min symbol 1!").required("Please write phone number!"),
        email: Yup.string().required("Please write email!"),
        message: Yup.string().min(1, "Min symbol 1!").max(30, "Max symbol 30!").required("Please write something!"),

    })

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            message: "",
            phone: ""
        },
        validateOnBlur: "",
        validationSchema: validationSchema,
        onSubmit: (values, e) => {
            emailjs.send("service_hr3e18y", "template_gfe2hqn", values, "rbxC2OB92xzOC8DeD").then(resp => {
                console.log(resp, "ok")
                toast.success('Email successfuly send!')
            }).catch(err => {
                toast.error("Failing to send")
            })
            console.log(values)
            name.current.value = ""
            email.current.value = ""
            message.current.value = ""
            surname.current.value = ""
            phone.current.value = ""
        }
    })

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact</title>
            </Helmet>
            <motion.div className="contact"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ width: window.innerWidth }}
            >
                <div className="contact__wrapper container">
                    <div className="contact__wrapper__left">
                        <div className='contact__wrapper__left__top'>
                            <h2>Just say hi!</h2>
                            <p>Tell me more about you and we'll contact soon:)</p>
                        </div>

                        <form onSubmit={formik.handleSubmit} className='contact__wrapper__left__form'>
                            <div>
                                <div>
                                    {formik.errors.name && formik.touched.name ? (<div className='errorMessage'>{formik.errors.name}</div>) : null}
                                    <label htmlFor="name">Firstname</label>
                                    <input ref={name} type="text" name="name" id="name" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                </div>
                                <div>
                                    {formik.errors.surname && formik.touched.surname ? (<div className='errorMessage'>{formik.errors.surname}</div>) : null}
                                    <label htmlFor="surname">Surname</label>
                                    <input ref={surname} type="text" name="surname" id="surname" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                </div>
                            </div>
                            <div>
                                <div>
                                    {formik.errors.email && formik.touched.email ? (<div className='errorMessage'>{formik.errors.email}</div>) : null}
                                    <label htmlFor="email">Email</label>
                                    <input ref={email} type="email" name="email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                </div>
                                <div>
                                    {formik.errors.phone && formik.touched.phone ? (<div className='errorMessage'>{formik.errors.phone}</div>) : null}
                                    <label htmlFor="phone">Phone number</label>
                                    <input ref={phone} type="number" name="phone" id="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                </div>
                            </div>
                            <div className='messageBox'>
                                {formik.errors.message && formik.touched.message ? (<div className='errorMessage'>{formik.errors.message}</div>) : null}
                                <label htmlFor="message">Message</label>
                                <textarea ref={message} type="text" name="message" id="message" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </div>

                            <button type='submit'><span>Submit</span> <span>Submit</span> </button>
                        </form>
                    </div>
                    <div className="contact__wrapper__right">
                        <div className="content">
                            <h1>Contact Information</h1>
                            <div className='contact__wrapper__right__address'>
                                <h2>Azerbaijan</h2>
                                <h3>Baku</h3>
                            </div>
                            <div className="social">
                                <a href="tel:+994708069716"><div><BsFillTelephoneFill /></div></a>
                                <a href="mailto:rasulaliyarov2002@gmail.com"> <div> <GrMail /></div> </a>
                                <a href="https://github.com/RasulAliyarov" target="_blank"> <div><BsGithub /></div> </a>
                                <a href="https://www.linkedin.com/in/rasulaliyarov/" target="_blank"> <div> <BsLinkedin /></div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Contact