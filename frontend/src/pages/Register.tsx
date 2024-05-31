import React, { useState } from 'react';
import './register.css'; 

const Register: React.FC = () => {
    const [username, setUsername]=useState('')
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:3004/api/users/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password,email }),
          });
    
          if (response.ok) {
            setMessage('Успешна регистрация!');
          } else {
            setMessage('Има съществуващ потребител.');
          }
        } catch (error) {
          console.error('Грешка при регистрация:', error);
          setMessage('Грешка при регистрация. Моля, опитайте отново.');
        }
      };
    return (
        <section className="register-section">
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Потребителско име:</label>
                <input type="text" id="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>

                <label htmlFor="email">Имейл:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                <label htmlFor="password">Парола:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

                <button type="submit">Регистрирай се</button>
            </form>
            {message && <p>{message}</p>}
        </section>    
    );
}

export default Register;
