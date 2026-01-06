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
                <button className="project-close-btn" onClick={() => setProject(null)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Cross SVG Icon</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/></svg></button>
                <div className="project-previu">
                    <img src={project.img} />
                </div>
                <p className="project-description">{project.description}</p>
                <a href="https://blog-api-top-4b3t.onrender.com/" className="project-link">Link to demo site</a>
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