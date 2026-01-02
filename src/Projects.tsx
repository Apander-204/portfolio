import { useState } from 'react';
import './Projects.css';
import Project from './Project';

type project = {
    title: string;
    description: string;
    img: string;
    stack: string[];
};

const Projects = () => {

    const [openProject, setOpenProject] = useState<project | null>(null);

    const projects: project[] = [
        {
            title: "Members Only",
            description: "test",
            img: "../public/project1.jpg",
            stack: ["JavaScript", "NodeJS", "ExpressJS", "EJS", "PostgreSQL", "PassportJS"]
        },
        {
            title: "File Uploader",
            description: "test",
            img: "test2",
            stack: ["JavaScript", "NodeJS", "ExpressJS", "EJS", "PostgreSQL", "PassportJS", "Multer"]
        },
        {
            title: "Blog API",
            description: "test",
            img: "test2",
            stack: ["JavaScript", "NodeJS", "ExpressJS", "EJS", "PostgreSQL", "JWT"]
        },
        {
            title: "Skin Genetator",
            description: "test",
            img: "test2",
            stack: ["JavaScript", "React", "TypeScript", "Vite"]
        },
    ];

    return (
        <div className="projects">
            <h1 className="projects-title">My Projects</h1>

            {
                openProject ? (<Project project={openProject} setProject={setOpenProject}/>) : ""
            }

            <div className="projects-container">

                {
                    projects.reverse().map((project, key) => (
                        <div className="projects-item" key={key} onClick={() => setOpenProject(project)}>
                            <img src={project.img} className="projects-item-img" />
                            <div className="projects-item-text">
                                <h5 className="projects-item-title">{project.title}</h5>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
};

export default Projects;