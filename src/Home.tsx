import './Home.css';

const Home = () => {

    return(
        <div className="home">
            <div className="home-container">
                <div className="home-left-container">
                    <h1 className="home-title">Hi, I'm Andrey Panin</h1>
                    <h3 className="home-subtitle">Frontend Developer</h3>
                    <p className="home-text">get me on intership please :)</p>
                    <div className="home-live-container">
                        <p className="home-live-text">Live in Russia Novosibirsk</p>
                    </div>
                    <div className="home-buttons">
                        <button className="home-contact-btn">Contact me</button>
                        <button className="home-cv-btn">Download CV</button>
                    </div>
                    <div className="footer">
                        <div className="footer-line" ></div>
                        <div className="footer-container">
                            <p>Follow me: </p>
                        </div>
                    </div>
                </div>
                <div className="home-right-container">
                    <img className="home-img" src="../public/programmist.jpg" />
                </div>
            </div>
        </div>
    );
};

export default Home;