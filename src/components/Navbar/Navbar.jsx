import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.scss"
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiShoppingBag, HiUser } from 'react-icons/hi';
import { AiFillHome, AiFillMessage, AiOutlineClose } from 'react-icons/ai';
import { Toaster } from 'react-hot-toast';

function Navbar() {
  let [activeBurger, setActiveBurger] = useState(false)

  return (
    <>
      <header className='header container'>
        <div className="header__left">
          <NavLink to="/" className={`logo`} >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8klEQVR4nO2YX4hNQRzHf3tnzszd1dIV8ayQTUpbFiUvlsKDPGjVah/kkZdVhKL2Rf5FoTbJn2135p6SkqQsHr14kTyskhRhWS3tpiW+Otmtc2bn3jNn7962U/Op+/j7/r6/OfOb+c0l8ng8Ho/Hk06gg9VSsVdSsVMiFCspb0jFeqTmmPoJza5SnpCavY4XIFWwn/JCEAatCfOa/6KQFlJekJqdMQq4P2dmABwG0AsgcAugBqHZ23gBRVXYZ9FlAC4B6K6H76kkewH8wX8eASilxRRDvsFY/Z8U0gJDtzSpF/EXQFc9zLcDmECSwbQ4qdlFo4A7Fu1BQzfK0z6b5lsB/DCSfAGwqmrgSSoIxd/HCwjKhT0W/RYAI4b+OID1s2F+GYBPFvGNabHFkG9OHp18nG7TvAp51gEYsyzSilrMLwYwZPm821zio8vKKECl5NsB4LeR7w2ApTMx3wzguSEWNfC0LWAlJCY0/2zcvrsc8nZONnKcFwASjZ8mEgB4iOkcdNWQim01mvc7hdTomP+IJfcTANIluAHATYvAMcqAUOx6YvUVv5UlHsB5iwcFoDCTwMtZklMvBVLxEWP7bM9YQEOFhazuBcC5WgsQiu00ts83CknMUgFnZxp43L0A3pfcPuxaFvNVdsJA6hZKaeJDqcE3qCgVH01+AbYlNS4GgKOW3I+dmjgm0gTgWdZjVCi222jeYXpKPEPeTssxGh3nzc7mY2KLsl5kUvGy0bzO/YPKF9mSzOaNUeKj0yhxj5qk5mPJ0ZlvcszTZhklhmsaJWLiawCMGuJfzWEu0IWO5OrzD9FA56DfYhnmouGxtWbzWcZpqfhdo3kvOGoP1nWcjiXqqPig6aP50WMlXkDjAG9z1C3V/UETS9YN4AqAxMlSLBe6jNPnXfSczKDLJ3Xr96SshtT8gbF9TlNu6KeSVHwi8fIaCNZSXpDl4ICx+kOUJ8S0lxfrobwh+sVyofkJqdjL6I/cufbj8Xg8Hg/lgX8bq4x/YxPZ2QAAAABJRU5ErkJggg==" alt='Logo Rasul Aliyarov' />
          </NavLink>
        </div>
        <div className="header__right">
          <NavLink to="/" className={({ isActive }) => isActive ? 'activeTab' : 'navLink'}
          ><span><AiFillHome /> Home</span></NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'activeTab' : 'navLink'}  ><span>< HiShoppingBag />Portfolio</span></NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'activeTab' : 'navLink'} ><span><AiFillMessage /> Contact</span></NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'activeTab' : 'navLink'}><span><HiUser />About</span></NavLink>
          <button className='burger' onClick={() => setActiveBurger(true)}><GiHamburgerMenu /></button>
        </div>
        <div className={`respNavbar ${activeBurger ? 'respNavActive' : ""}`} style={activeBurger ? { opacity: "1" } : { opacity: "0" }}>
          <div className="respNavbar__top">
            <button className='burger' onClick={() => setActiveBurger(false)} ><AiOutlineClose /></button>
          </div>
          <div className="respNavbar__content" >
            <NavLink className={({ isActive }) => isActive ? 'activeTabResp' : ''} to="/" onClick={() => setActiveBurger(false)}><span><AiFillHome /> Home</span></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'activeTabResp' : ''} to="/portfolio" onClick={() => setActiveBurger(false)}><span>< HiShoppingBag />Portfolio</span></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'activeTabResp' : ''} to="/contact" onClick={() => setActiveBurger(false)}><span><AiFillMessage /> Contact</span></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'activeTabResp' : ''} to="/about" onClick={() => setActiveBurger(false)}><span><HiUser />About</span></NavLink>
          </div>
        </div>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              backgroundColor: 'white',
              color: 'black',
              fontFamily: "sans-serif"
            }
          }}
        />
      </header >
    </>
  )
}

export default Navbar