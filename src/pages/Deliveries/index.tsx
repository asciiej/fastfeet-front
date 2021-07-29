import React, { useState, useEffect, useCallback } from 'react';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiLogOut, FiSearch } from 'react-icons/fi';

import { PackagesList } from '../../components/PackagesList';

import api from '../../services/api';

import {
  Main,
  Header,
  Container,
  InputWithIcon,
  Separator,
  Footer,
} from './styles';

type Package = {
  id: number;
  title: string;
  date: string;
  status?: string;
};

const Deliveries: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    api.get('/pendentes').then(pendentes => {
      setPackages(pendentes.data);
    });
  }, []);

  const changeToPendent = useCallback(async () => {
    const pendentes = await api.get('/pendentes');

    setPackages(pendentes.data);
  }, []);

  const changeToDone = useCallback(async () => {
    const feitas = await api.get('/feitas');

    setPackages(feitas.data);
  }, []);

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
      <Main>
        <Separator>{packages.length} entrega(s)</Separator>
        <PackagesList content={packages} />
      </Main>
      <Footer>
        <button type="button" onClick={changeToPendent}>
          Pendentes
        </button>
        <button type="button" onClick={changeToDone}>
          Feitas
        </button>
      </Footer>
    </Container>
  );
};

export default Deliveries;
