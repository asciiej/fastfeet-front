import styled from 'styled-components';

export const Packages = styled.section`
  /* margin-top: 80px;
  max-width: 700px; */

  background: #f7f5fa;
  width: 100%;
`;

export const Box = styled.div`
  background: #fff;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    font-size: 22px;

    h3 {
      color: #4c4766;
    }

    div {
      display: flex;
      align-items: center;
    }

    span {
      color: #6f6c80;
      font-size: 10px;
    }
  }

  > div {
    margin: 8px 24px 40px 32px;

    div {
      display: flex;
      flex-direction: column;
      top: -6px;

      span {
        color: #00da6d;
        font-size: 10px;
        margin-top: 5px;
      }
    }
  }

  img {
    margin-right: 15px;
  }

  a {
    background: #fff1d6;
    width: 100%;
    padding: 15px 16px;
    text-decoration: none;
    color: #4c4766;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & + div {
    margin-top: 16px;
  }
`;
