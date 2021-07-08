import React from 'react';

import logoImg from '../../assets/logotipo.svg';
import nameImg from '../../assets/logo.svg';

import { Main, Header } from './styles';

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
    </Main>
  );
};

export default Login;
