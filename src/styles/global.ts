import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 15px 'Inter', sans-serif;
  }

  /* Usado para forçar o tamanho do celular, em uma tela normal
    Porém não é mais necessário, pq a tela está sendo feita no tamanho de celular

    #root {
    max-width: 375px;
    margin: 0 auto;
  } 
  */

  button {
    cursor: pointer;
  }
`;
