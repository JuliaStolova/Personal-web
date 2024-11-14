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
        darkmode_btn.addEventListener('click', () => {
            body.classList.toggle('darkmode');
            setDarkmode(!darkmode);
        })
    })

    return (
        <div>
            <div className="navigation">
                <h3 id="home">{t('home')}</h3>
                <h3 id="about">{t('about')}</h3>
                <h3 id="experience">{t('experience')}</h3>
                <h3 id="projects">{t('projects')}</h3>
                <h3 id="contact">{t('contact')}</h3>
                <button id="darkmode_btn">
                    <i className="fa-solid fa-sun"></i>
                </button>
                <div className="dropdown">
                    <button className="dropbtn" onClick={ToggleDropdown}>
                        <h3>{t('language-button')}</h3>
                        {dropdownOpen && (
                            <div id="dropdown" className="dropdown-content">
                                <h3 id="en" onClick={() => changeLanguage('en')}>English</h3>
                                <h3 id="cz" onClick={() => changeLanguage('cs')}>Čeština</h3>
                                <h3 id="ru" onClick={() => changeLanguage('ru')}>Русский</h3>
                            </div>
                        )}
                    </button>
                </div>
            </div>

            <div className="home" id="home-section">
                <h1>{t('h_h1')}</h1>
                <h2>{t('h_h2')}</h2>
                <div className="home-contact">
                    <i className="fa-brands fa-discord"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-instagram"></i>
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
                    <i className="fa-brands fa-discord"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-instagram"></i>
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