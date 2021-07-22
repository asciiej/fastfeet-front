import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 140px 50px 24px;
  background: #4c33cc;
  color: #fff;

  svg {
    color: #fff;
  }
`;

export const Main = styled.main`
  height: calc(100vh - 227px);
  padding: 30px 20px 0px 20px;
  background: #f7f5fa;
`;

export const Box = styled.div`
  background: #fff;
  padding: 24px 16px;
  position: relative;
  top: -55px;
  border-radius: 4px;
  margin-bottom: 16px;

  h3 {
    color: #4c4766;
    font-size: 22px;
  }

  > div {
    display: flex;
    align-items: center;

    svg {
      color: #ffc042;
      margin-right: 15px;
    }
  }

  span {
    font-weight: bold;
    font-size: 10px;
    color: #4c4766;
    display: block;
    margin-top: 30px;
    margin-bottom: 8px;
  }

  p {
    font-size: 15px;
    color: #6f6c80;
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
`;