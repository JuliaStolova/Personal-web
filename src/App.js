import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
    const { t, i18n } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [darkmode, setDarkmode] = React.useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const ToggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        console.log(dropdownOpen);
    }
    
    const scrollToID = (id) => {
        const element = document.getElementById(id);
        if (element) {
            if (id === 'home-section') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        } 
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.matches('.dropbtn')) {
                setDropdownOpen(false);
            }
        }

        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        }
    }, []);

    useEffect(() => {
        if (i18n.language === 'ru') {
            document.body.classList.add('ru');
        }
        else {
            document.body.classList.remove('ru');
        }
    })

    useEffect(() => {
        const darkmode_btn = document.getElementById('darkmode_btn');
        const body = document.body;
        if (darkmode) {
            body.classList.add('darkmode');
            darkmode_btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
        else {
            body.classList.remove('darkmode');
            darkmode_btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    }, [darkmode]);

    const toggleDarkmode = () => {
        setDarkmode(!darkmode);
    }


    return (
        <div>
            <div className="navigation">
                <h3 id="home" onClick={() => scrollToID('home-section')}>{t('home')}</h3>
                <h3 id="about" onClick={() => scrollToID('about-section')}>{t('about')}</h3>
                <h3 id="experience" onClick={() => scrollToID('experience-section')}>{t('experience')}</h3>
                <h3 id="projects" onClick={() => scrollToID('projects-section')}>{t('projects')}</h3>
                <h3 id="contact" onClick={() => scrollToID('contact-section')}>{t('contact')}</h3>
                <button id="darkmode_btn" onClick={toggleDarkmode}>
                    <i className={`fa-solid ${darkmode ? 'fa-moon' : 'fa-sun'}`}></i>
                </button>
                <div className="dropdown">
                    <button className="dropbtn" onClick={ToggleDropdown}>
                        <h4>{t('language-button')}</h4>
                        {dropdownOpen && (
                            <div id="dropdown" className="dropdown-content">
                                <h4 id="en" onClick={() => changeLanguage('en')}>English</h4>
                                <h4 id="cz" onClick={() => changeLanguage('cs')}>Čeština</h4>
                                <h4 id="ru" onClick={() => changeLanguage('ru')}>Русский</h4>
                            </div>
                        )}
                    </button>
                </div>
            </div>

            <div className="home" id="home-section">
                <h1>{t('h_h1')}</h1>
                <h2>{t('h_h2')}</h2>
                <div className="home-contact">
                    <a href="https://discordapp.com/users/746376744189296651" target="_blank"><i className="fa-brands fa-discord"></i></a>
                    <a href="https://www.linkedin.com/in/julia-stolova/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/juliastolova/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>

            <div className="about" id="about-section">
                <h1>{t('a_h1')}</h1>
                <div className="about-content">
                    <div>
                        <p>{t('a_p1')}</p>
                        <p>{t('a_p2')}</p>
                    </div>
                    <img src="/pictures/me-3.png" alt="My photo" />
                </div>
            </div>

            <div className="experience" id="experience-section">
                <h1>{t('e_h1')}</h1>
                <div className="experience-content">
                    <div className="skill-1">
                        <h3>{t('e_sk1_date')}</h3>
                        <h1>{t('e_sk1_h1')}</h1>
                        <h2>{t('e_sk1_h2')}</h2>
                        <ul>
                            <li>{t('e_sk1_li1')}</li>
                            <li>{t('e_sk1_li2')}</li>
                            <li>{t('e_sk1_li3')}</li>
                            <li>{t('e_sk1_li4')}</li>
                        </ul>
                    </div>
                    <div className="skill-2">
                        <h3>{t('e_sk2_date')}</h3>
                        <h1>{t('e_sk2_h1')}</h1>
                        <h2>{t('e_sk2_h2')}</h2>
                        <ul>
                            <li>{t('e_sk2_li1')}</li>
                            <li>{t('e_sk2_li2')}</li>
                            <li>{t('e_sk2_li3')}</li>
                        </ul>
                    </div>
                    <div className="skill-3">
                        <h3>{t('e_sk3_date')}</h3>
                        <h1>{t('e_sk3_h1')}</h1>
                        <h2>{t('e_sk3_h2')}</h2>
                        <ul>
                            <li>{t('e_sk3_li1')}</li>
                            <li>{t('e_sk3_li2')}</li>
                            <li>{t('e_sk3_li3')}</li>
                            <li>{t('e_sk3_li4')}</li>
                        </ul>
                    </div>
                    <div className="skill-4">
                        <h3>{t('e_sk4_date')}</h3>
                        <h1>{t('e_sk4_h1')}</h1>
                        <h2>{t('e_sk4_h2')}</h2>
                        <ul>
                            <li>{t('e_sk4_li1')}</li>
                            <li>{t('e_sk4_li2')}</li>
                            <li>{t('e_sk4_li3')}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projects" id="projects-section">
                <h1>{t('p_h1')}</h1>
                <div className="projects-content">
                    <h2>{t('p_h2')}</h2>
                    <p>{t('p_p1')} <a href="https://github.com/JuliaStolova/Snake\" target="_blank">Github!</a></p>
                    <div className="project-1-img">
                        <img src="/pictures/snake.png" alt="Snake" />
                    </div>
                    <h4>{t('p_p2')}</h4>
                </div>
            </div>

            <div className="contact" id="contact-section">
                <h1>{t('c_h1')}</h1>
                <div className="contact-icons">
                    <a href="https://discordapp.com/users/746376744189296651" target="_blank"><i className="fa-brands fa-discord"></i></a>
                    <a href="https://www.linkedin.com/in/julia-stolova/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/juliastolova/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>

            <footer>
                <p>{t('footer_email')}</p>
                <p>{t('footer_phone')}</p>
                <p>{t('footer_author')}</p>
            </footer>
        </div>
    );
};

export default App;