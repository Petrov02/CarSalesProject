import React from 'react';
import './home.css'

export const Home: React.FC = () => {
    return (
        <section className="info-section">
            <h2>Добре дошли на нашия уебсайт</h2>
            <p>В меню 'Регистрация' може да създадете вашия профил и след това разгледате или качите обявите на автомобили.</p>
            <p>Не се колебайте да се свържете с нас за повече информация.</p>
        </section>
    );
}

export default Home;
