import React, { useState } from 'react';

export function KNU() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5139/api/Puppetter/run-script', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data === null) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>увійдіть в тритон</div>
          <label htmlFor="Login">Логін</label>
          <input
            id="Login"
            name="Login"
            placeholder="Логін"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <label htmlFor="Password">Пароль</label>
          <input
            id="Password"
            name="Password"
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input className="btn btn-block btn-primary" type="submit" value="Увійти" />
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Data from Puppeteer Script</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
