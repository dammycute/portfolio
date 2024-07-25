import React from 'react'
import link from '../assets/img/link-45deg.svg'
import github from '../assets/img/github.svg'


const projects = [
    {
        title: 'McBennyng',
        description: 'This Website was created for a construction company as a form of portfolio. It showcase the buildings and construction process of this company.',
        link: 'https://mc-bennyng.netlify.app/',
        git_repo: 'https://github.com/dammycute/'
    },
    {
        title: 'Realown Website',
        description: 'This is a website for a real estate investment company. I used HTML, CSS and JavaScript for the development.',
        link: 'https://realowndigital.com',
        git_repo: 'https://github.com/dammycute/'
    },
    {
        title: 'McBennyng',
        description: 'This Website was created for a construction company as a form of portfolio. It showcase the buildings and construction process of this company.',
        link: 'https://mc-bennyng.netlify.app/',
        git_repo: 'https://github.com/dammycute/'
    },
    {
        title: 'McBennyng',
        description: 'This Website was created for a construction company as a form of portfolio. It showcase the buildings and construction process of this company.',
        link: 'https://mc-bennyng.netlify.app/',
        git_repo: 'https://github.com/dammycute/'
    },
    {
        title: 'McBennyng',
        description: 'This Website was created for a construction company as a form of portfolio. It showcase the buildings and construction process of this company.',
        link: 'https://mc-bennyng.netlify.app/',
        git_repo: 'https://github.com/dammycute/'
    },
]

const Projects = () => {
    return (
        <section class="portfolio" id="port">
            <h2>Projects</h2>
            <div class="underline"></div>
            <div class="card-container">
                {projects.map((project, index) => (
                    <div class="card-col" key={index}>
                        <p class="card-title">{project.title}</p>
                        <p>{project.description}</p>
                        <div class="btn-group">
                            <button class="btn"><a href={project.link} target="_blank"><img src={link} alt="" /><span>Website</span></a></button>
                            <button class="btn"><a href={project.git_repo} target="_blank"><img src={github} alt="" /><span>Github</span></a></button>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Projects