import css from '../css/Auth.module.css';
import { useState } from "react";

export function AuthPage({setCurrentPage, setCurrentUsernpm }) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        setIsInvalid(false);

        if (password.trim().length < 8) {
            alert('Пароль должен быть минимум 8 символов');
            setIsInvalid(true);
            return;
        }

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({login, password})
            }) 

            const data = await response.json();

            if (data.error) {
                alert(data.error)
                return
            }

            console.log('Пользователь создан:', data);
            setCurrentUser(data.login);
            setCurrentPage('home');


        } catch(err) {
            console.error("Ошибка регистрации:", err);
        }

 
    }

    return (
        <>
        
        <header>
        <div className="header_container">
            <div className="header_text_container">
                <div className="Kavro_title_header">
                    <span><h3>K</h3></span>

                    <h3>avro</h3>
                </div>

                <span>Услуги в твоем районе</span>
            </div>

            <div className="header_link_gallery">
                <nav>  
                    <button onClick={() => setCurrentPage('home')}>‹ Главное</button>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <form className={css["form_container"]} onSubmit={handleSubmit}>
            <div className={css["form"]}>
                <input
                type='text'
                name='login'
                id={css["login"]}
                placeholder='ваша почта'
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                />

                <input
                type='password'
                name='password'
                className={`${css["password"]} ${isInvalid ? css['red'] : ''}`}
                placeholder='ваш пароль'
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" name="btn_login" id={css["btn_login"]}>войти</button>
            </div>
        </form>
    </main>

    <div className="footer_gradient"></div>
    
    <footer>
        <div className="footer_contetnt">
            <span>Kavro © 2026 - Делаем просто</span>
        </div>
        <div className="fog"></div>
    </footer>
        </>
    )
}
