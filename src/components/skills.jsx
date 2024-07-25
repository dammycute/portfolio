import React from 'react'
// import front from 
import html from '../assets/img/html5.svg'
import bootstrap from '../assets/img/bootstrap.svg'
import css from '../assets/img/css3-alt.svg'
import js from '../assets/img/js.svg'
import react from '../assets/img/react.svg'
import dj from '../assets/img/dj.svg'
import github from '../assets/img/github.svg'
import linkedin from '../assets/img/linkedin.svg'
import instagram from '../assets/img/instagram.svg'

const Skills = () => {
  return (
    <>
    <div class="skills" id="skills">
        <div class="skills-text">
            <h2>Skills</h2>
            <p>These are list of Technologies and Languages I write and I work with currently. I love coding thing from scratch and developing new projects.</p>
        </div>
        <div class="skills-img">
            <div class="img">
                <img src={html} alt="" />
                <p>Html5</p>
            </div>
            <div class="img">
                <img src={bootstrap} alt="" />
                <p>BootStrap</p>
            </div>
             
             <div class="img">
                <img src={css} alt="" />
                <p>CSS3</p>
             </div>
            <div class="img">
                <img src={js} alt="" />
                <p>Js</p>
            </div>
            <div class="img">
                <img src={react} alt="" />
                <p>ReactJs</p>
            </div>
            <div class="img">
                <img src={dj} alt="" />
                <p>Django</p>
            </div>
        </div>
    </div>

    <footer>
        <div class="foot">
            <a href="https://www.linkedin.com/in/htcode/"><img src={linkedin} alt=""/></a>
            <a href="https://github.com/dammycute"><img src={github} alt=""/></a>
            <a href="https://www.instagram.com/ht__code/"><img src={instagram} alt=""/></a>
        </div>
    </footer>
    </>
  )
}

export default Skills