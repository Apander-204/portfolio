import './Home.css';

const Home = ({ setMenu, language }: {setMenu: React.Dispatch<React.SetStateAction<string>>, language: string}) => {

    const translations = {
        "en": {
            home_title: "Hi, I'm Andrey Panin",
            home_subtitle: "Frontend Developer",
            home_text: "get me on intership please :)",
            home_live_text: "Live in Russia Novosibirsk",
            home_contact_btn: "Contact me",
            home_cv_btn: "Download Resume",
            follow: "Follow me:"
        },
        "ru": {
            home_title: "Здравствуйте, я Андрей Панин",
            home_subtitle: "Frontend Developer",
            home_text: "Возьмите меня пожалуйста на стажировку :)",
            home_live_text: "Живу в России в г. Новосибирске",
            home_contact_btn: "Связаться со мной",
            home_cv_btn: "Скачать резюме",
            follow: "Смотреть также:"
        }
    }

    return(
        <div className="home">
            <div className="home-container">
                <div className="home-left-container">
                    <h1 className="home-title">{translations[language].home_title}</h1>
                    <h3 className="home-subtitle">{translations[language].home_subtitle}</h3>
                    <p className="home-text">{translations[language].home_text}</p>
                    <div className="home-live-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path fill="currentColor" d="M18 6.72a5.73 5.73 0 1 0 5.73 5.73A5.73 5.73 0 0 0 18 6.72m0 9.46a3.73 3.73 0 1 1 3.73-3.73A3.73 3.73 0 0 1 18 16.17Z" /><path fill="currentColor" d="M18 2A11.79 11.79 0 0 0 6.22 13.73c0 4.67 2.62 8.58 4.54 11.43l.35.52a99.61 99.61 0 0 0 6.14 8l.76.89l.76-.89a99.82 99.82 0 0 0 6.14-8l.35-.53c1.91-2.85 4.53-6.75 4.53-11.42A11.79 11.79 0 0 0 18 2m5.59 22l-.36.53c-1.72 2.58-4 5.47-5.23 6.9c-1.18-1.43-3.51-4.32-5.23-6.9l-.35-.53c-1.77-2.64-4.2-6.25-4.2-10.31a9.78 9.78 0 1 1 19.56 0c0 4.1-2.42 7.71-4.19 10.31" /><path fill="none" d="M0 0h36v36H0z"/></svg>
                        <p className="home-live-text">{translations[language].home_live_text}</p>
                    </div>
                    <div className="home-buttons">
                        <button className="home-contact-btn" onClick={() => setMenu("Contact")}>{translations[language].home_contact_btn}</button>
                        <button className="home-cv-btn">{translations[language].home_cv_btn}</button>
                    </div>
                    <div className="footer">
                        <div className="footer-line" ></div>
                        <div className="footer-container">
                            <p>{translations[language].follow} </p>
                            <a href="https://github.com/Apander-204">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsGithubFill0)"><path fill="currentColor" fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsGithubFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
                            </a>
                            <a href="https://t.me/Apandeer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsTelegramFill0)"><path fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0s12 5.373 12 12M12.43 8.859c-1.167.485-3.5 1.49-6.998 3.014c-.568.226-.866.447-.893.663c-.046.366.412.51 1.034.705c.085.027.173.054.263.084c.613.199 1.437.432 1.865.441c.389.008.823-.152 1.302-.48c3.268-2.207 4.955-3.322 5.061-3.346c.075-.017.179-.039.249.024c.07.062.063.18.056.212c-.046.193-1.84 1.862-2.77 2.726c-.29.269-.495.46-.537.504c-.094.097-.19.19-.282.279c-.57.548-.996.96.024 1.632c.49.323.882.59 1.273.856c.427.291.853.581 1.405.943c.14.092.274.187.405.28c.497.355.944.673 1.496.623c.32-.03.652-.331.82-1.23c.397-2.126 1.179-6.73 1.36-8.628a2.111 2.111 0 0 0-.02-.472a.506.506 0 0 0-.172-.325c-.143-.117-.365-.142-.465-.14c-.451.008-1.143.249-4.476 1.635" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsTelegramFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div className="home-right-container">
                    <img className="home-img" src="../public/programmer.png" />
                </div>
            </div>
        </div>
    );
};

export default Home;