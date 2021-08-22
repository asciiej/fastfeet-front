import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft, FiImage } from 'react-icons/fi';
import feitoImg from '../../assets/feito.svg';

import { Header, Main, Footer, Alert } from './styles';

const Details: React.FC = () => {
  const [alert, setAlert] = useState('');
  const [fileName, setFileName] = useState<string | undefined>('');
  const [preview, setPreview] = useState<string | undefined>('');

  function handleFile(event: ChangeEvent<HTMLInputElement>): void {
    if (event !== undefined) {
      // const fileList = Array.prototype.slice(event.target.files);
      // setSelectedFile(event.target.files.pop());

      const file = event.target.files?.item(0);

      if (file) {
        setFileName(event.target.files?.item(0)?.name);

        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  }

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
          <div>
            <label htmlFor="arquivo">
              Selecionar um arquivo
              <FiImage size={25} />
            </label>
            <input
              type="file"
              id="arquivo"
              onChange={handleFile}
              accept="image/*"
            />
            <span>{fileName}</span>
          </div>
        </form>
        <img src={preview} alt="" />
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
