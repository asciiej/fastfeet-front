import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { FaClipboardList } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';

import { Header, Main, Box, GridBox, Footer } from './styles';

import { GetPackage } from '../../hooks/Gets';

type RoomParams = {
  id: string;
};

const Details: React.FC = () => {
  const params = useParams<RoomParams>();
  const [status, setStatus] = useState<string | undefined>('');
  const packageId = params.id;

  useEffect(() => {
    GetPackage(packageId).then(response => {
      setStatus(response.status);
    });
  }, [packageId]);

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
        <GridBox>
          <div>
            <AiFillInfoCircle size={20} />
            <h3>Situação</h3>
          </div>
          <div>
            <div>
              <span>STATUS</span>
              {status}
            </div>
            <div>
              <span>POSTADO EM</span>
              01/07/2020
            </div>
            <div>
              <span>DATA DE RETIRADA</span>
              --/--/----
            </div>
            <div>
              <span>DATA DE ENTREGA</span>
              --/--/----
            </div>
          </div>
        </GridBox>
      </Main>
      <Footer>
        {status === 'Aguardando' ? (
          <button type="button">Retirar Pacote</button>
        ) : (
          <Link to="button">Entregar Pacote</Link>
        )}
      </Footer>
    </>
  );
};

export default Details;
