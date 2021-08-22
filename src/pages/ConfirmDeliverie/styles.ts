import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 125px 25px 24px;
  background: #4c33cc;
  color: #fff;

  svg {
    color: #fff;
  }
`;

export const Main = styled.main`
  height: calc(100vh - 202px);
  padding: 30px 20px 0px 20px;
  background: #f7f5fa;

  input[type='file'] {
    display: none;
  }

  label {
    color: #fff;
    background: #4c33cc;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 5px;
  }

  span {
    margin-left: 8px;
  }

  img {
    margin-top: 5px;
    margin-left: 8px;
    max-width: 375px;
    max-height: 500px;
  }
`;

export const Footer = styled.footer`
  height: 115px;
  width: 100vw;
  background: #f7f5fa;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;

  a {
    background: #ffc042;
    color: #4c4766;
    border: 0;
    padding: 19px 114px;
    margin: 0 auto;
    border-radius: 4px;
    text-decoration: none;
  }

  button {
    background: #ffc042;
    color: #4c4766;
    border: 0;
    padding: 19px 114px;
    margin: 0 auto;
    border-radius: 4px;
  }
`;

export const Alert = styled.div`
  position: absolute;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  background: #000;
  opacity: 0.8;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0px 60px;
  text-align: center;

  img {
    height: 53.33px;
    width: 53.33px;
    margin: 0 auto;
    margin-bottom: 29.33px;
  }

  span {
    font-size: 12px;
    margin-top: 8px;
  }
`;
