import React, { useState, useEffect, useCallback } from 'react';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiLogOut, FiSearch } from 'react-icons/fi';

import { PackagesList } from '../../components/PackagesList';

import { usePackage } from '../../hooks/PackageContext';
import { useAuth } from '../../hooks/AuthContext';

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
  const { user } = useAuth();
  const { feitos, pendentes } = usePackage();
  const [packages, setPackages] = useState<Package[]>([]);
  const [busca, setBusca] = useState('');

  const packagesFiltrados = packages.filter(pacote =>
    pacote.title.toLowerCase().includes(busca.toLocaleLowerCase()),
  );

  useEffect(() => {
    setPackages(pendentes);
  }, [pendentes]);

  const changeToPendent = useCallback(() => {
    setPackages(pendentes);
  }, [pendentes]);

  const changeToDone = useCallback(() => {
    setPackages(feitos);
  }, [feitos]);

  return (
    <Container>
      <Header>
        <div>
          <p>Bem vindo, {user}</p>
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
          <input
            type="text"
            placeholder="Filtrar por bairro"
            value={busca}
            onChange={e => setBusca(e.target.value)}
          />
          <FiSearch />
        </InputWithIcon>
      </Header>
      <Main>
        <Separator>{packagesFiltrados.length} entrega(s)</Separator>
        <PackagesList content={packagesFiltrados} />
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
