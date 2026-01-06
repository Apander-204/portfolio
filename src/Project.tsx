type project = {
    title: string;
    description: string;
    img: string;
    stack: string[];
};

const Project = ( { project, setProject }:{project: project; setProject: React.Dispatch<React.SetStateAction<project | null>>} ) => {

    return(
        <div className="project">
            <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <button className="project-close-btn" onClick={() => setProject(null)}>X</button>
                <div className="project-previu">
                    <img src={project.img} />
                </div>
                <p className="project-description">{project.description}</p>
                <a href="https://blog-api-top-4b3t.onrender.com/">Link to demo site</a>
            </div>

            <div className="project-stack">
                <p className="project-stack-title">Stack: </p>
                {
                    project.stack.map((stack, key) => (
                        <div key={key} className="project-stack-item">{stack}</div>
                    ))
                }
            </div>
        </div>
    );
};

export default Project;