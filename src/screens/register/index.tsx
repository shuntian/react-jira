import React, { FormEvent } from 'react';
import { useAuth } from 'contexts/auth-provider';

import './style.css';

export const RegisterScreen = () => {
  const { register } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    register({ username, password });
  };

  return (
    <div className="form-container">
      <form className="form regisetr-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">用户名:</label>{' '}
          <input type="text" id="username"></input>
        </div>
        <div>
          <label htmlFor="password">密 &nbsp;&nbsp;&nbsp;码:</label>{' '}
          <input type="password" id="password"></input>
        </div>
        <button type="submit">注册</button>
      </form>
    </div>
  );
};
