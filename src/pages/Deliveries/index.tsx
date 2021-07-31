import React, { useState, useEffect, useCallback } from 'react';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiLogOut, FiSearch } from 'react-icons/fi';

import { PackagesList } from '../../components/PackagesList';

import { GetPendent, GetDone } from '../../hooks/Gets';

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
    GetPendent().then(pendent => {
      setPackages(pendent);
    });
  }, []);

  const changeToPendent = useCallback(() => {
    GetPendent().then(pendent => {
      setPackages(pendent);
    });
  }, []);

  const changeToDone = useCallback(() => {
    GetDone().then(done => {
      setPackages(done);
    });
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
