import styled from "styled-components";
import BackgroundLogin from "../../assets/img/backgroundLogin.png";
export const LoginStyled = styled.section`
    
    .areaCadastrar{
        display: flex;
        justify-content: flex-end;
    }

    .textoCadastrar {
        font-size: 1.4rem;
        justify-content: flex-end;
        padding: 2rem;
        color: #042A3F;
    }

    .botaoEntrar {
        color: #F74B35;
        font-weight: 600;
    }

    /* FIM CADASTRAR */

    .areaLogin {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 7%;
    }

    .areaLogin h1 {
        font-size: 3.6rem;
        color: #042A3F;
    }

    .areaLogin h2 {
        color: #F74B35;
        font-family: "Prata", sans-serif;
        font-size: 2.8rem;
        font-weight: 400;
        margin-bottom: 2rem;
    }

    .divFormulario label {
        color: #042A3F;
        font-size: 2rem;
        font-weight: 600;
        padding-left: 2rem;
        display: flex;
        margin-top: 3rem;
    }

    .divFormulario input {
        background-color:#F0EBEB;
        height: 5rem;
        border-radius: 1.5rem;
        padding: 2rem;
        font-size: 1.6rem;
        font-weight: 600;
        color: #042A3F;
        width: 100%;
    }

    .divFormulario form .inputDuplo div input {
        width: 40%;
    }
    
    .divFormulario input::placeholder {
        font-size: 1.6rem;
    }

    form .botao {
        background-color: #8886E7;
        color: white;
        font-family: "Inter", sans-serif;
        font-size: 2.2rem;
        text-align: center;
        cursor: pointer;
        padding: 1rem 3.5rem;
        border-radius: 1.5rem;
        margin-top: 3rem;
    }

    .esqueciSenha {
        color: #F74B35;
        font-size: 1.4rem;
        margin-top: .3rem;
    }

    .bukiHome {
        position: absolute;
        right:   3rem;
        bottom: 1rem;
    }

    .bukiHome mdsadimg{
        width: 6rem;

    }

    @media (max-width: 992px) {

        .divFormulario label {
        color: #042A3F;
        font-size: 2rem;
        font-weight: 600;
        padding-left: 0;
        display: flex;
        margin-top: 3rem;
    }

    .divFormulario form .inputDuplo div input {
        width: 45%;
    }
    }

    @media (max-width: 768px) {

.divFormulario label {
color: #042A3F;
font-size: 2rem;
font-weight: 600;
padding-left: 0;
display: flex;
margin-top: 3rem;
}

.divFormulario form .inputDuplo div input {
width: 50%;
}
}


@media (max-width: 555px) {

.divFormulario label {
color: #042A3F;
font-size: 2rem;
font-weight: 600;
padding-left: 0;
display: flex;
margin-top: 3rem;
}

.divFormulario form .inputDuplo div input {
width: 60%;
}
}
`;

export const InformacoesLoginStyled = styled.section`
    width: 45rem;
    height: 100vh;
    background-image: url(${BackgroundLogin});
    background-size: cover;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .mensagem {
        width: 41rem;
        border-radius: 1.5rem;
        height: 11.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #8886E7;
        padding: 2rem;
        position: relative;
        left: -1rem;
        bottom: -20rem;

    }

    .mensagem p{
        color: #fff;
        font-size: 1.8rem;
        font-weight: 200;
    }

    .mensagem p span{
        font-weight: 400;
    }

    @media (max-width: 992px) {
    
    width: 45rem;
    height: 100vh;
    background-image: url(${BackgroundLogin});
    background-size: cover;
    float: left;
    display: none;
    flex-direction: column;
    justify-content: space-around;

    .mensagem {
        width: 41rem;
        border-radius: 1.5rem;
        height: 11.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #8886E7;
        padding: 2rem;
        position: relative;
        left: -1rem;
        bottom: -20rem;

    }

    .mensagem p{
        color: #fff;
        font-size: 1.8rem;
        font-weight: 200;
    }

    .mensagem p span{
        font-weight: 400;
    }

    }
`;
