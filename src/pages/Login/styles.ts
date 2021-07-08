import styled from 'styled-components';

import logoFrame from '../../assets/frame.svg';

export const Main = styled.main`
  height: 100vh;
  padding: 80px 30px 10px 30px;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 56px;

  .options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 26px 0;

    a,
    label {
      font-size: 13px;
      text-decoration: none;
      color: #d5ccff;
    }
  }

  input[type='checkbox'] {
    margin-right: 5px;
  }

  button {
    height: 56px;
    background: #ffc042;
    border: none;
    border-radius: 4px;
  }
`;

export const InputWithIcon = styled.div`
  position: relative;

  input {
    margin-top: 8px;
    height: 56px;
    width: 100%;
    padding-left: 50px;
    border: 0;
    border-radius: 4px;

    &:focus {
      border: 2px solid #ffc042;
    }
  }

  svg {
    color: #ffc042;
    position: absolute;
    left: 15px;
    top: 28px;
  }
`;
