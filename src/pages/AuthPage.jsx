import css from '../css/Auth.module.css';

export function AuthPage({setCurrentPage}) {
    return <>
    
        <header>
        <div className="header_container">
            <div classNameName="header_text_container">
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
        <form className={css["form_container"]} action="">
            <div className={css["form"]}>
                <input type="text" name="login" id={css["login"]} placeholder="ваша почта"/>
                <input type="password" name="password" id={css["password"]} placeholder="ваш пароль"/>
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
}
