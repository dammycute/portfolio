import React from 'react'
import github from '../assets/img/github.svg'
import heroImg from '../assets/img/winter-dunsin.svg'

const Hero = () => {
    return (
        <div  className="hero" id='header'>
            <div class="header-text">
                <h3>Hello, I'm</h3>
                <h1>Olawoore Damilola James</h1>
                <p>Front-End Developer and BackEnd Developer.</p>
                <button class="btn btn-header">
                    <a href="https://github.com/dammycute">
                        <img src={github} alt="" />
                        <span>Github</span>
                    </a>
                </button>
            </div>

            <div class="header-img">
                <img src={heroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero