import './About.css';

const About = () => {

    return(
        <div className="about">
            <div className="about-container">
                <h1 className="about-title">About me</h1>
                <p className="about-text">Страстно увлечён созданием веб-сайтов. Готов погружаться с головой, чтобы из идеи сделать работающий и красивый интерфейс. Ищу команду, где смогу расти и приносить пользу.</p>
                <div className="about-data">
                    <div className="about-item">
                        <div className="about-item-img">

                        </div>
                        <p className="about-item-title">Name</p>
                        <p className="about-item-data">Andrey Panin</p>
                    </div>
                    <div className="about-item">
                        <div className="about-item-img">

                        </div>
                        <p className="about-item-title">Phone</p>
                        <p className="about-item-data">+7 923 559 07 57</p>
                    </div>
                    <div className="about-item">
                        <div className="about-item-img">

                        </div>
                        <p className="about-item-title">Email</p>
                        <p className="about-item-data">apander204@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;