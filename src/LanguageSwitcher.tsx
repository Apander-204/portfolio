

const LanguageSwitcher = ({ setLanguage }) => {

    return(
        <div className="language-switcher">
            <button onClick={() => setLanguage("en")}>En</button>
            <button onClick={() => setLanguage("ru")}>Ru</button>
        </div>
    );
}

export default LanguageSwitcher;