import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { FaClipboardList } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';

import feitoImg from '../../assets/feito.svg';

import { Header, Main, Box, GridBox, Footer, Alert } from './styles';

import { GetPackage, ChangeStatus } from '../../hooks/Gets';

type RoomParams = {
  id: string;
};

type PackageType = {
  id: number;
  title: string;
  date: string;
  status?: string;
};

const Details: React.FC = () => {
  const params = useParams<RoomParams>();
  const [deliverie, setDeliverie] = useState<PackageType>({} as PackageType);
  const [alert, setAlert] = useState('');
  const packageId = params.id;

  useEffect(() => {
    GetPackage(packageId).then(response => {
      setDeliverie(response);
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
              {deliverie.status}
            </div>
            <div>
              <span>POSTADO EM</span>
              {deliverie.date}
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
        {deliverie.status === 'Aguardando' ? (
          <button
            type="button"
            onClick={() => {
              ChangeStatus(packageId);

              setAlert('Pacote Retirado');

              setTimeout(() => {
                setAlert('');
              }, 2000);
            }}
          >
            Retirar Pacote
          </button>
        ) : (
          <Link to="button">Entregar Pacote</Link>
        )}
      </Footer>
      {alert && (
        <Alert>
          <img src={feitoImg} alt="Erro imagem" />
          {alert}
        </Alert>
      )}
    </>
  );
};

export default Details;
