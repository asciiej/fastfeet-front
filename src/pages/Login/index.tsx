import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FaUserAlt, FaLock } from 'react-icons/fa';

import { useAuth } from '../../hooks/AuthContext';

import logoImg from '../../assets/logotipo.svg';
import nameImg from '../../assets/logo.svg';
import errorImg from '../../assets/warning.svg';

import { Main, Header, Form, InputWithIcon, Erro } from './styles';

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();
  const [inputError, setInputError] = useState('');

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!cpf || !password) {
      throw new Error('Preencha e-mail e senha para continuar!');
    }

    try {
      await signIn({
        cpf,
        password,
      });

      history.push('/deliveries');
    } catch (err) {
      setInputError('Senha ou email incorretos.');

      setTimeout(() => {
        setInputError('');
      }, 2000);
    }
  }

  return (
    <>
      <Main>
        <Header>
          <img src={logoImg} alt="Logo" />
          <img src={nameImg} alt="Name" />
        </Header>

        <h1>
          <span>Entregador,</span> você é nosso maior valor
        </h1>
        <p>Faça seu login para começar suas entregas.</p>

        <Form onSubmit={handleLogin}>
          <InputWithIcon>
            <input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={e => setCpf(e.target.value)}
            />
            <FaUserAlt size={16} />
          </InputWithIcon>
          <InputWithIcon>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <FaLock size={16} />
          </InputWithIcon>

          <div className="options">
            <label htmlFor="lembrar">
              <input type="checkbox" id="lembrar" name="lembrar" />
              Lembrar-me
            </label>
            <Link to="/forgot">Esqueci minha senha</Link>
          </div>

          <button type="submit">Entrar</button>
        </Form>
      </Main>

      {inputError && (
        <Erro>
          <img src={errorImg} alt="Erro imagem" />
          {inputError}
        </Erro>
      )}
    </>
  );
};

export default Login;
