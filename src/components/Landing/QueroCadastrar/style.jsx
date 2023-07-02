import styled from "styled-components";

const QueroCadastrarStyled = styled.section`

    .divGeral {
        padding: 0 6%;
        margin-bottom: 8rem;
    }

    .areaTitulo h2 {
        font-size: 4rem;
        font-family: "Poppins", sans-serif;
        color: #fff;
        font-weight: 400;
        background-color: #8886E7;
        text-align: center;
        width: 80%;
        padding: 1rem;
        margin: 0 auto;
        box-shadow: 0 .6rem .5rem #A2B3BF;
        margin-bottom: 8rem;
        border-radius: 1rem;
    }

    .areaPrincipal {
        background: linear-gradient(to left, #EA6564, #8886E7);
        border-radius: 4.8rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        min-height: 45rem;
        padding: 0 4%;

    }

    .textoEBotao {
        display: flex;
        flex-direction: column;
        width: 50%;
        /* flex-wrap: wrap; */
    }

    .textoEBotao h3 {
        font-size: 3.2rem;
        color: #fff;
        font-weight: 400;
        padding-bottom: 1rem;

    }

    .botao {
        color: #fff;
        background: #EA6564;
        padding: 1rem 1.8rem;
        font-size: 2.2rem;
        border-radius: 1rem;
        cursor: pointer;
        transition: all 300ms ease-in-out;
    }

    .botao:hover {
        box-shadow: 0 .5rem .5rem #a54040;
    }

    .botaoA{
        width: 17.1rem;
        height: 5.8rem;
        padding: 0;
    }

    .img {
        position: relative;
        bottom: -8rem;
        width: 100%;
    }

    .divLogo {
        position: relative;
        top: 2rem;
        display: flex;
        justify-content: flex-end;
        margin-right: 3rem;
    }

    .bukiLogo {
        position: absolute;
    }


    @media (max-width:1200px) {

    }

    @media (max-width:1120px) {
        .areaPrincipal {
        background: linear-gradient(to left, #EA6564, #8886E7);
        border-radius: 4.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 45rem;
        padding: 0 4%;
        }

        .textoEBotao {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        margin-top: 4rem;
        }


        .textoEBotao h3 {
        font-size: 3rem;
        color: #fff;
        font-weight: 400;
        padding-bottom: 1rem;
        line-height: 4rem;
        text-align: center;
        }

        .botao {
        color: #fff;
        background: #EA6564;
        padding: 1rem 1.8rem;
        font-size: 2.2rem;
        border-radius: 1rem;
        cursor: pointer;
        margin-bottom: 3rem;
        margin-top: 1rem;

        }

        .img {
        position: relative;
        bottom: 0;
        width: 100%;
    }
    }

    @media (max-width:992px) {
        .divLogo {
        position: relative;
        top: 2rem;
        display: flex;
        justify-content: flex-end;
        margin-right: 3rem;
    }

    .bukiLogo {
        position: absolute;
        width: 10%;

        }   
    }

    @media (max-width:768px) {

    }

    @media (max-width:628px) {

    }

    @media (max-width:442px) {

    }
`;

export default QueroCadastrarStyled;