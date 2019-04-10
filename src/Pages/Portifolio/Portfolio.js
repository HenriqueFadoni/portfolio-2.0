import React, { Component } from 'react';

class Portifolio extends Component {
    state = {
        projects: [
            { 
                title: "Money Now", 
                skills: "React/Redux + Jest/Enzyme + SASS", 
                github: "https://github.com/HenriqueFadoni/money-now", 
                website: "https://henriquefadoni.github.io/money-now/" 
            },
            { 
                title: "My Chat Example", 
                skills: "React/Redux", 
                github: "https://github.com/HenriqueFadoni/my-chat-example", 
                website: null },
            { 
                title: "Nexter", 
                skills: "HTML/CSS + SASS", 
                github: "https://github.com/HenriqueFadoni/nexter", 
                website: "https://henriquefadoni.github.io/nexter/" 
            },
            { 
                title: "Portfolio", 
                skills: "React + SASS", 
                github: "https://github.com/HenriqueFadoni/portfolio", 
                website: "https://henriquefadoni.github.io/portfolio/" 
            },
            { 
                title: "The Burger Builder", 
                skills: "React/Redux + Jest/Enzyme", 
                github: "https://github.com/HenriqueFadoni/the-burguer-builder", 
                website: "https://react-my-burger-fadoni.firebaseapp.com/" 
            },
            { 
                title: "Trillo", 
                skills: "HTML5/CSS + SASS", 
                github: "https://github.com/HenriqueFadoni/trillo", 
                website: "https://henriquefadoni.github.io/trillo/" 
            },
            { 
                title: "Forkify Website", 
                skills: "HTML5/CSS + SASS", 
                github: "https://github.com/HenriqueFadoni/Forkify-Website", 
                website: null 
            }
        ]
    }

    render() {
        const portfolioProjects = this.state.projects.map((project, index) => {
            return (
                <div className="portfolio__item" key={index}>
                    <h3 className="portfolio__item-title">{project.title}</h3>
                    <h4 className="portfolio__item-skills">{project.skills}</h4>
                    <a
                        className="portfolio__github"
                        target="_blank"
                        href={project.github}
                        rel="noopener noreferrer">
                        GitHub
                    </a>
                    {
                        project.website ? 
                        <a
                            className="portfolio__website"
                            target="_blank"
                            href={project.website}
                            rel="noopener noreferrer">
                            Website
                        </a> 
                        : null
                    }
                </div>
            );
        });

        return (
            <section className="portfolio__container">
                <div className="portfolio-title">
                    <h1>Portfolio</h1>
                </div>
                <div className="portfolio__list-container">
                    {portfolioProjects}
                </div>
            </section>
        );
    }
}

export default Portifolio;