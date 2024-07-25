import React from 'react'
import avatar from '../assets/img/avatar-dunsin.png'
import linkedin from '../assets/img/linkedin.svg'
import download from '../assets/img/cloud-arrow-down-fill.svg'


const About = () => {
    return (
        <section class="about" id="about">
            <div class="about-img">
                <img src={avatar} alt="" />
            </div>
            <div class="about-text">
                <h2>About Me</h2>
                <div class="underline"></div>
                <p>Hi! I'm a self-taught Full Stack Developer in Nigeria, passionate about building efficient, user-friendly web applications.</p>
                <br />
                <p>I specialize in Python/Django for backend, React for frontend, and excel in PostgreSQL database management and RESTful API development.</p>
                <div class="btn-group">
                    <button class="btn"><a href="https://www.linkedin.com/in/htcode/"><img src={linkedin} alt="" /><span>Linkedin</span></a></button>
                    <button class="btn"><a href=""><img src={download} alt="" /><span>Resume</span></a></button>
                </div>
            </div>
        </section>
    )
}

export default About