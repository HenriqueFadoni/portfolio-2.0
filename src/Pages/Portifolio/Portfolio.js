import React, { Component } from 'react';

class Portifolio extends Component {
    state = {
        projects: [
            { title: "Money Now", skills: "React/Redux + Jest/Enzyme + SASS", github: "", website: "" },
            { title: "My Chat Example", skills: "React/Redux", github: "", website: "" },
            { title: "Nexter", skills: "HTML/CSS + SASS", github: "", website: "" },
            { title: "Portfolio", skills: "React + SASS", github: "", website: "" },
            { title: "The Burger Builder", skills: "React/Redux + Jest/Enzyme", github: "", website: "" }

        ]
    }

    render() {
        const portfolioProjects = this.state.projects.map(project => {
            return (
                <div className="portfolio__item">
                    <h3 className="portfolio__item-title">{project.title}</h3>
                    <h4 className="portfolio__item-skills">{project.skills}</h4>
                    <a
                        target="_blank"
                        href={project.github}
                        rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a
                        target="_blank"
                        href={project.website}
                        rel="noopener noreferrer">
                        Website
                    </a>
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