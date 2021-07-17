import React from 'react';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiLogOut, FiSearch } from 'react-icons/fi';

import { Main, Header, Container, InputWithIcon } from './styles';

const Deliveries: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <p>Bem vindo, Tiago Souza</p>
          <FiLogOut />
        </div>
        <div>
          <h1>Entregas</h1>
          <div>
            <FaMapMarkerAlt />
            <span>Uberlândia</span>
          </div>
        </div>
        <InputWithIcon>
          <input type="text" placeholder="Filtrar por bairro" />
          <FiSearch />
        </InputWithIcon>
      </Header>
      <Main />
    </Container>
  );
};

export default Deliveries;
