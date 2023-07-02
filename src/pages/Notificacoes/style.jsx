import styled from "styled-components";

export const SeguraStyled = styled.section`
  display: flex;
`;

export const NotificacaoStyled = styled.section`
  margin: 0 auto;
  width: 100%;
  height: auto;
  padding: 0 3%;
  margin-left: 15rem;

  .container {
    display: inline-flex;
    justify-content: center;
    width: inherit;
    height: 100vh;

  }

  .notificacao {
    width: 80%;
    padding: 1rem 0;
    margin-top: 1rem;

  }

  .headerDaNotificacao {
    display: flex;
    justify-content: space-between;
  }

  .headerDaNotificacao h1 {
    font-family: "Lexend Deca", sans-serif;
    font-style: Bold;
    font-size: 2rem;
  }

  .headerDaNotificacao i {
    padding: 1rem 0;
    background-color: #fff;
    color: #1e1e1e;
    cursor: pointer;
  }

  .headerDaNotificacao .areaInput {
    display: flex;
  }

  .container input {
    display: inline-flex;
    justify-content: center;
    font-size: 1.5rem;
    border-bottom: 0.1rem solid black;
    border-width: 0.1rem;
    float: left;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }

  .notNova {
    display: flex;
    justify-content: space-between;
  }

  .notNova h1 {
    color: #ea6564;
    display: inline-flex;
    justify-content: center;
    font-style: Italic;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .notNova i {
    display: inline-flex;
    justify-content: center;
    color: #ea6564;
    cursor: pointer;
    margin-top: 2.6rem;
  }

  .notNova i:hover {
    color: #ef9d9d;
    cursor: pointer;
    transition: all 400ms ease-in-out;
  }

  .barrasNovas {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 100%;
  }

  .barrasNovas img {
    width: 10rem;
    border-radius: 10rem;
    margin-right: 2rem;
    border: solid 0.2rem #8886e7;
  }

  .notAnt {
    display: inline-flex;
    justify-content: center;
  }

  .notAnt h1 {
    color: #ea6564;
    display: inline-flex;
    justify-content: center;
    font-style: Italic;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .notAnt i {
    display: inline-flex;
    justify-content: center;
    color: #ea6564;
    cursor: pointer;
    margin-top: 2.6rem;
  }

  .notAnt i:hover {
    color: #ef9d9d;
    cursor: pointer;
    transition: 400ms;
  }

  .barrasAnteriores {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .barrasAnteriores img {
    width: 10rem;
    border-radius: 10rem;
    margin-right: 2rem;
    border: solid 0.2rem #8886e7;
  }

  .barrasDeNotAnt {
    display: inline-flex;
    align-items: center;
    font-family: "Lato", sans-serif;
    padding: 1rem;
    border-radius: 10px;
    margin-top: 5px;
    border-bottom: solid 2px #8886e7;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    margin-top: 5px;
  }

  .barrasDeNotAnt:hover {
    background: #e0dfed;
  }

  .barrasDeNotAnt .descricao h1 {
    font-size: 18px;
    font-style: bold;
    margin-bottom: 5px;
  }

  .barrasDeNotAnt .descricao h1 span {
    font-size: 13px;
    opacity: 60%;
  }

  .barrasDeNotAnt .descricao p span {
    border-bottom: solid 1px #8886e7;
    cursor: pointer;
    color: #8886e7;
  }

  .barrasDeNotAnt .descricao p span:hover {
    color: #6260cc;
  }

  #hora-not {
    font-size: 13px;
    opacity: 60%;
    margin-top: 5px;
  }

  .verMais {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .verMais h1 {
    color: #ea6564;
    font-style: Italic;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    cursor: pointer;
  }

  .verMais i {
    display: inline-flex;
    color: #ea6564;
    cursor: pointer;
    margin-top: 26px;
    margin-bottom: 26px;
    margin-left: 6px;
  }

  .verMais i:hover {
    color: #ef9d9d;
    cursor: pointer;
    transition: 400ms;
  }

  @media (max-width: 1000px) {
    margin-top: 12rem;
    margin: 0 auto;
    width: 100%;
    height: auto;
    padding: 0 3%;
    margin-left: 0;

    .notificacao {
      width: inherit;
      padding: 1rem 1rem;
      justify-content: center;
    }

    
  .container {
    display: inline-flex;
    justify-content: center;
    width: inherit;
    height: 100vh;
    margin-top: 15rem;
  }
  }
`;

