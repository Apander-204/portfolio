

const ThemeSwitcher = ({ theme, setTheme }: {theme: string; setTheme: React.Dispatch<React.SetStateAction<string>>}) => {

    const toggleThemeSwitch = () => {
        if(theme == "light") setTheme("dark");
        else setTheme('light');
    };

    return(
        <div className="theme-switcher">
            <button onClick={toggleThemeSwitch}>
                <div>White</div>
                <div>Dark</div>
            </button>
        </div>
    );
}

export default ThemeSwitcher;