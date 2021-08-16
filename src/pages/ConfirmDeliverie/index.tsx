import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import feitoImg from '../../assets/feito.svg';

import { Header, Main, Footer, Alert } from './styles';

const Details: React.FC = () => {
  const [alert, setAlert] = useState('');

  return (
    <>
      <Header>
        <Link to="/deliveries">
          <FiArrowLeft size={20} />
        </Link>
        <h1>Confirmar</h1>
      </Header>
      <Main>
        <form action="">
          <input type="file" />
        </form>
      </Main>
      <Footer>
        <button
          type="button"
          onClick={async () => {
            setAlert('Foto Enviada');

            setTimeout(() => {
              setAlert('');
            }, 2000);
          }}
        >
          Enviar Foto
        </button>
      </Footer>
      {alert && (
        <Alert>
          <img src={feitoImg} alt="Erro imagem" />
          {alert}
          <span>Pacote entregue</span>
        </Alert>
      )}
    </>
  );
};

export default Details;
