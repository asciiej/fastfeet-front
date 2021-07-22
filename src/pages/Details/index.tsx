import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { FaClipboardList } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';

import { Header, Main, Box, Footer } from './styles';

const Details: React.FC = () => {
  return (
    <>
      <Header>
        <Link to="/deliveries">
          <FiArrowLeft size={20} />
        </Link>
        <h1>Detalhes</h1>
      </Header>
      <Main>
        <Box>
          <div>
            <FaClipboardList size={20} />
            <h3>Dados</h3>
          </div>
          <span>DESTINATÁRIO</span>
          <p>Diego Fernandes</p>
          <span>ENDEREÇO</span>
          <p>
            Rua Guilherme Gemballa, 260
            <br /> Jardim América, SC <br />
            89 168-000
          </p>
        </Box>
        <Box>
          <div>
            <AiFillInfoCircle size={20} />
            <h3>Situação</h3>
          </div>
        </Box>
      </Main>
      <Footer>
        <Link to="button">Retirar Pacote</Link>
      </Footer>
    </>
  );
};

export default Details;
