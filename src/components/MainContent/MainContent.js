import React from 'react'
import '../../components/MainContent/MainContent.css';

import { BsEnvelopeFill, BsGithub, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";




function MainContent() {
    return (
        <div className='mainContainer'>
            
            <h1 className='name'>TJ Janus</h1>
            <h2 className='role'>Frontend Developer</h2>
            <p className='small-email'>TJJanus1@gmail.com</p>

            <div className='btn-container'>
            <a href="mailto:TJJanus1@gmail.com" target='_blank' rel="noreferrer"> <button className='btn-1'><BsEnvelopeFill className='icon' />Email</button></a>
            <a href='https://www.linkedin.com/in/tj-janus/' target='_blank' rel="noreferrer"> <button className='btn-2'><FaLinkedinIn className='icon' />LinkedIn</button></a>
            </div>

            <div className='info section'>
                <h2 className='about'>About</h2>
                <p className='para'>I am a full stack developer interested in React, JS, HTML, CSS and Node.js!  I worked as frontend developer at NewMarket Health and now I am on the job hunt.</p>
            </div>

            <div className='info'>
                <h2 className='interests'>Interests</h2>
                <p className='para'>In my free-time I run the National Ball Hockey League, watch sports, play video games and spend time with family.  </p>
            </div>

            <footer className='footer'>
                <a href='https://github.com/TJJanus' target='_blank' rel="noreferrer"><BsGithub className='socialIcon' /> </a>
                <a href='https://twitter.com/12TJanus' target='_blank' rel="noreferrer"><BsTwitter className='socialIcon' /> </a>
                <a href='https://www.instagram.com/12tjanus/' target='_blank' rel="noreferrer"><BsInstagram className='socialIcon' /> </a>
                <a href='https://facebook.com' target='_blank' rel="noreferrer"><BsFacebook className='socialIcon' /> </a>
            </footer>


        </div>
    )
}

export default MainContent
