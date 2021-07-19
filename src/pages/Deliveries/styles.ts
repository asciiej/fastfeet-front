import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  padding: 30px 20px 10px 20px;
  background: #f7f5fa;
`;

export const Header = styled.header`
  padding: 30px 20px 0px 20px;
  background: #4c33cc;
  display: flex;
  flex-direction: column;
  color: #d5ccff;

  h1 {
    font-family: 32px 'Roboto Condensed', sans-serif;
    font-weight: bold;
    line-height: 36px;
    color: #fff;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;

    & + div {
      margin-bottom: 0;
    }

    p {
      width: 120px;
      line-height: 20px;
    }
  }

  svg {
    color: #ffc042;
    margin-right: 10px;
  }
`;

export const InputWithIcon = styled.div`
  position: relative;
  bottom: -35px;

  input {
    box-shadow: 0px 8px 24px rgba(21, 6, 51, 0.08);
    height: 56px;
    width: 100%;
    padding-left: 24px;
    border: 0;
    border-radius: 4px;

    &::placeholder {
      color: #bebccc;
    }
  }

  svg {
    color: #bebccc;
    position: absolute;
    right: 15px;
    top: 22px;
  }
`;

export const Separator = styled.div`
  font-size: 14px;
  color: #bebccc;

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: #bebccc;
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #bebccc;
    margin-left: 16px;
  }
`;
