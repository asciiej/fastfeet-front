import React, { useState } from 'react';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiLogOut, FiSearch } from 'react-icons/fi';

import { PackagesList } from '../../components/PackagesList';

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
};

const Deliveries: React.FC = () => {
  const pendentes = [
    {
      id: 1,
      title: 'Pacote 03',
      date: '01/07/2020',
    },
    {
      id: 2,
      title: 'Pacote 04',
      date: '02/07/2020',
    },
    {
      id: 3,
      title: 'Pacote 05',
      date: '03/07/2020',
    },
    {
      id: 4,
      title: 'Pacote 06',
      date: '04/07/2020',
    },
  ];

  const feitas = [
    {
      id: 5,
      title: 'Pacote 01',
      date: '29/06/2020',
    },
    {
      id: 6,
      title: 'Pacote 02',
      date: '30/06/2020',
    },
  ];

  const [packages, setPackages] = useState<Package[]>(pendentes);

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
        <button type="button" onClick={() => setPackages(pendentes)}>
          Pendentes
        </button>
        <button type="button" onClick={() => setPackages(feitas)}>
          Feitas
        </button>
      </Footer>
    </Container>
  );
};

export default Deliveries;
