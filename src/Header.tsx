import './Header.css';

const Header = ({ setMenu }: {setMenu: React.Dispatch<React.SetStateAction<string>>}) => {
    

    return(
        <div className="header">
            <div className="header-container">
                <div className="header-item">
                    <svg></svg>
                    <a className="header-item-text" onClick={() => setMenu("Home")}>Home</a>
                </div>
                <div className="header-item">
                    <svg></svg>
                    <a className="header-item-text" onClick={() => setMenu("About")}>About</a>
                </div>
                <div className="header-item">
                    <svg></svg>
                    <a className="header-item-text" onClick={() => setMenu("Projects")}>Projects</a>
                </div>
                <div className="header-item">
                    <svg></svg>
                    <a className="header-item-text" onClick={() => setMenu("Contact")}>Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Header;