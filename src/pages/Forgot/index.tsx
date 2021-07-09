import React from 'react';
import { Link } from 'react-router-dom';

import { CgArrowLongLeft } from 'react-icons/cg';

import logoImg from '../../assets/logotipo.svg';
import nameImg from '../../assets/logo.svg';

import { Main, Header } from './styles';

const Forgot: React.FC = () => {
  return (
    <Main>
      <Header>
        <img src={logoImg} alt="Logo" />
        <img src={nameImg} alt="Name" />
      </Header>

      <h1>
        <span>Esqueceu</span> sua senha?
      </h1>

      <p>
        Por motivos de segurança, para recurá-la, vá até a central da
        distribuidora Fastfeet.
      </p>

      <p>
        <strong>
          Endereço
          <br />
        </strong>
        Av. João Naves de Ávila, 2121 Santa Mônica, Uberlândia-MG, 38408-100
      </p>

      <footer>
        <Link to="/">
          <CgArrowLongLeft size={35} />
        </Link>
        <Link to="/">Voltar para o login</Link>
      </footer>
    </Main>
  );
};

export default Forgot;
