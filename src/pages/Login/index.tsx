import React from 'react';

import { FaUserAlt, FaLock } from 'react-icons/fa';

import logoImg from '../../assets/logotipo.svg';
import nameImg from '../../assets/logo.svg';

import { Main, Header, Form, InputWithIcon } from './styles';

const Login: React.FC = () => {
  return (
    <Main>
      <Header>
        <img src={logoImg} alt="Logo" />
        <img src={nameImg} alt="Name" />
      </Header>

      <h1>
        <span>Entregador,</span> você é nosso maior valor
      </h1>
      <p>Faça seu login para começar suas entregas.</p>

      <Form>
        <InputWithIcon>
          <input type="text" placeholder="CPF" />
          <FaUserAlt size={16} />
        </InputWithIcon>
        <InputWithIcon>
          <input type="password" placeholder="Senha" />
          <FaLock size={16} />
        </InputWithIcon>

        <div className="options">
          <label htmlFor="lembrar">
            <input type="checkbox" id="lembrar" name="lembrar" />
            Lembrar-me
          </label>
          <a href="teste">Esqueci minha senha</a>
        </div>

        <button type="submit">Entrar</button>
      </Form>
    </Main>
  );
};

export default Login;
