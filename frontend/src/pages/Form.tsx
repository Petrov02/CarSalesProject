import React, { useState } from 'react';
import './form.css'

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3004/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setMessage('Добре дошли!');
      } else {
        setMessage('Грешно потребителско име или парола.');
      }
    } catch (error) {
      console.error('Грешка при вход:', error);
      setMessage('Грешка при вход. Моля, опитайте отново.');
    }
  };

  return (
    <div>
      <h2>Форма за вход</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Потребителско име:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Парола:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Вход</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;
