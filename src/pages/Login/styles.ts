import styled from 'styled-components';

import logoFrame from '../../assets/frame.svg';

export const Main = styled.main`
  height: 100vh;
  padding: 80px 30px 30px 30px;
  background: #4c33cc url(${logoFrame}) no-repeat;

  h1 {
    font: 48px 'Roboto Condensed', sans-serif;
    margin-top: 80px;
    font-style: italic;
    line-height: 48px;
    color: #fff;
    max-width: 250px;

    span {
      color: #ffc042;
    }
  }

  p {
    margin-top: 16px;
    line-height: 25px;
    color: #d5ccff;
    max-width: 180px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
