import React from 'react';
import './contacts.css'; 

export const Contacts: React.FC = () => {
    return (
        <section className="contact-section">
            <h2>Свържете се с нас</h2>
            <div className="contact-info">
                <p>Телефон: 0878310131</p>
                <p>Имейл: 12621206@nvna.eu/12621216@nvna.eu</p>
                <p>Адрес: ул.Васил Друмев 73, Варна, България</p>
            </div>
            <form>
                <label htmlFor="name">Име:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Имейл:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Съобщение:</label>
                <textarea id="message" name="message"></textarea>

                <button type="submit">Изпрати</button>
            </form>
        </section>
    );
}

export default Contacts;
