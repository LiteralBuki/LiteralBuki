import styled from "styled-components";

export const SidebarStyled = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 25rem;
  /* align-items: center; */
  padding: 1rem 1rem;
  border-right: 1px solid #ada8a8;
  position: fixed;
  background: #fff;


  .perfilMenu header {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  .perfilMenu header h3{
    margin-top: .8rem;
    text-align: center;
    color: #042A3F;
    font-family: "Lato", sans-serif;
    font-size: 1.8rem;
  }

  .perfilMenu header p{
    text-align: center;
    color: #042A3F;
    font-family: "Lato", sans-serif;
    font-size: 1.6rem;
  }

  .fotoPerfil {
    width: 15rem;
    border-radius: 10rem;
    transition: transform 0.5s;
  }

  .fotoPerfil:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 0.1rem 3rem #5856dc;
  }

  i {
    color: #705ea8;
  }

  .navegacao {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 89rem;
  }

  @media (max-width: 1000px) {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0;
    border-right: 0;
    border-bottom: 0.1rem solid #ada8a8;
    min-height: 0;
    max-height: 20rem;
    width: 100%;
    background-color: #fff;
    z-index: 9999;

    .perfilMenu header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1.5rem;

  }

    .perfilMenu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      min-height: 10rem;
      padding: 0.5rem;
      gap: 5rem;
    }

    .fotoPerfil {
      width: 8rem;
      border-radius: 10rem;
      transition: transform 0.5s;
    }

    .navegacao {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0;
      width: 100%;
    }
  }

  @media (max-width: 680px) {
    .perfilMenu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      min-height: 10rem;
      padding: 0.5rem;
      max-height: 13rem;
    }
  }
`;

export const NavegacaoUl = styled.ul`
  list-style: none;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li {
    display: flex;
    
    padding: 1.3rem;
    margin-top: 1rem;
    border-radius: 10rem;
    transition: all 200ms ease-in-out;
    font-size: 1.8rem;
    width: inherit;
    cursor: pointer;

    :hover {
    background-color: #c0bfd2;
    box-shadow: 0 0.1rem 1rem #9795e9;
    }

  }

  & li.abaEscolhida {
    border-radius: 10rem;
    background-color: #c0bff2;
    color: #1e1e1e;
  }

  & li.abaEscolhida i {
    color: #3b2480;
  }

  li span {
    color: #000;
  }

  li i {
    margin-right: 1rem;
    }

  @media (max-width: 1000px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: inherit;

      li {
      display: flex;
      padding: 0.8rem 1rem;
      flex-direction: row;
      margin: 1%;
      border-radius: 10rem;
      transition: all 200ms ease-in-out;
      font-size: 1.8rem;
      margin-top: 0.5rem;
      }
  }

  @media (max-width: 800px) {
    li {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: inherit;

      li {
      display: flex;
      padding: 0.9rem 1rem;
      margin: 1%;
      border-radius: 10rem;
      transition: all 200ms ease-in-out;
      font-size: 1.8rem;
      margin-top: 0.5rem;
      width: 22rem;
    }

    }

  @media (max-width: 680px) {
      flex-wrap: wrap;

      li {
      font-size: 1.6rem;
    }
  }
`;

export const MenuStyled = styled.div`
  margin-right: 3%;
  cursor: pointer;
  display: none;
  z-index: 9999;

  img {
    width: 4.5rem;
  }

  @media (max-width: 700px) {
    display: block;
  }
`;

export const MenuHamburguerStyled = styled.img``;


export const NavegacaoOpcoesStyled = styled.div`

.final {
    display: flex;
    flex-direction: column;
  }

  .final ul {
    margin-top: 1.4rem;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-left: .8rem;
  }

   .final a {
    margin-left: 1.5rem;
    font-size: 1.5rem;
    color: #666666;
    display: inline-flex;
    margin: 0.1rem;
  }

   .final i {
    padding: 0.5rem;
  }

   .final a:hover {
    color: #1e1e1e;
  }

   .final i:hover {
    color: #3b2480;
  }

@media (max-width: 1000px) {
  flex-direction: column;

  .final {
      display: none;
      flex-direction: column;
    }
}

@media (max-width: 700px) {

      display: ${({ show }) => show ? 'block' : 'none'};
      align-items: center;
      width: inherit;
      flex-wrap: wrap;
      /* border: 1px solid #5856dc; */
      position: absolute;
      right: 2.2rem;
      top: 10rem;
      width: 25rem;
      z-index: 9998;
      background-color: #fff;
      box-shadow: 0 .5rem 4rem #5856dc;

    .final {
    display: block;
    flex-direction: column;
    margin-top: 2rem;
  }

  .final ul {
    margin-left: 1rem;
  }

}

`;