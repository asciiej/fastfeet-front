import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import api from '../services/api';

type Package = {
  id: number;
  title: string;
  date: string;
  status?: string;
};

type PackageContextData = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  pendentes: Package[];
  feitos: Package[];
  getPackage(id: string): Promise<Package>;
  changeStatus(id: string): void;
};

const PackageContext = createContext<PackageContextData>(
  {} as PackageContextData,
);

export const PackageProvider: React.FC = ({ children }) => {
  const [pendentes, setPendents] = useState<Package[]>([]);
  const [feitos, setFeitos] = useState<Package[]>([]);

  const getDone = useCallback(async () => {
    const response = await api.get('/pacotes?status=Entregue');

    setFeitos(response.data);
  }, []);

  const getPendent = useCallback(async () => {
    const retirados = await api.get('/pacotes?status=Retirado');
    const waiting = await api.get('/pacotes?status=Aguardando');

    const pendent = [...retirados.data, ...waiting.data];

    setPendents(pendent);
  }, []);

  useEffect(() => {
    getDone();
    getPendent();
  }, [getDone, getPendent]);

  const getPackage = useCallback(async (id: string) => {
    try {
      const pacote = await api.get(`/pacotes?id=${id}`);

      return pacote.data[0];
    } catch (err) {
      throw new Error('ID não encontrado');
    }
  }, []);

  const changeStatus = useCallback(async (id: string) => {
    try {
      api.patch(`/pacotes/${id}`, {
        status: 'Retirado',
      });
    } catch (err) {
      throw new Error('erro');
    }
  }, []);

  return (
    <PackageContext.Provider
      value={{ pendentes, feitos, getPackage, changeStatus }}
    >
      {children}
    </PackageContext.Provider>
  );
};

export function usePackage(): PackageContextData {
  const context = useContext(PackageContext);

  if (!context) {
    throw new Error('usePackage must be used within an PackageProvider');
  }

  return context;
}
