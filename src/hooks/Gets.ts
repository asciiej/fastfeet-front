import api from '../services/api';

type Package = {
  id: number;
  title: string;
  date: string;
  status?: string;
};

export async function GetPendent(): Promise<Package[]> {
  const pendentes = await api.get('/pacotes?status=Retirado');
  const aguardando = await api.get('/pacotes?status=Aguardando');

  return [...pendentes.data, ...aguardando.data];
}

export async function GetDone(): Promise<Package[]> {
  const feitas = await api.get('/pacotes?status=Entregue');

  return feitas.data;
}

export async function GetPackage(id: string): Promise<Package> {
  try {
    const pacote = await api.get(`/pacotes?id=${id}`);

    return pacote.data[0];
  } catch (err) {
    throw new Error('ID não encontrado');
  }
}

export function ChangeStatus(id: string): void {
  try {
    api.patch(`/pacotes/${id}`, {
      status: 'Retirado',
    });
  } catch (err) {
    throw new Error('erro');
  }
}
