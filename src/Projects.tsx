import { useState } from 'react';
import './Projects.css';
import Project from './Project';

type project = {
    title: string;
    description: string;
    link: string;
    img: string;
    stack: string[];
};

const Projects = ({ language }) => {

    const translations = {
        "en": {
            projects_title: "My Projects",
        },
        "ru": {
            projects_title: "Мои проекты",
        }
    }

    const [openProject, setOpenProject] = useState<project | null>(null);

    const projects: project[] = [
        {
            title: "Members Only",
            description: "Hello, this is my learning project that was created during the TheOdinProject Node JS & Express course.",
            link: "",
            img: "../public/project1.jpg",
            stack: ["JavaScript", "NodeJS", "ExpressJS", "EJS", "PostgreSQL", "PassportJS"]
        },
        {
            title: "File Uploader",
            description: "Hello, this is my learning project that was created during the TheOdinProject Node JS & Express course.",
            link: "",
            img: "test2",
            stack: ["JavaScript", "NodeJS", "ExpressJS", "EJS", "PostgreSQL", "PassportJS", "Multer"]
        },
        {
            title: "Blog API",
            description: "Hello, this is my learning project that was created during the TheOdinProject Node JS & Express course.",
            link: "",
            img: "test2",
            stack: ["JavaScript", "NodeJS", "ExpressJS", "EJS", "PostgreSQL", "JWT"]
        },
        {
            title: "Skin Genetator",
            description: "test",
            link: "",
            img: "test2",
            stack: ["JavaScript", "React", "TypeScript", "Vite"]
        },
    ];

    return (
        <div className="projects">
            <h1 className="projects-title">{translations[language].projects_title}</h1>

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