import styled from "styled-components";
import BackgroundCadastro from "../../assets/img/backgroundCadastro.jpg";
export const CadastroStyled = styled.section`

    .areaEntrar{
        display: flex;
        justify-content: flex-end;
    }

    .textoEntrar {
        font-size: 1.4rem;
        justify-content: flex-end;
        padding: 2rem;
        color: #042A3F;
    }

    .botaoEntrar {
        color: #F74B35;
        font-weight: 600;
    }

    /* FIM ENTRAR */

    .areaCadastro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 7%;
    }

    .areaCadastro h1 {
        font-size: 3.6rem;
        color: #042A3F;
    }

    .divFormulario label {
        color: #042A3F;
        font-size: 2rem;
        font-weight: 600;
        padding-left: 2rem;
    }

    .divFormulario input {
        width: inherit;
        background-color:#F0EBEB;
        height: 5rem;
        border-radius: 1.5rem;
        padding: 2rem;
        font-size: 1.6rem;
        font-weight: 600;
        margin-top: .8rem;
        color: #042A3F;
    }

    .divFormulario .email {
        margin-bottom: 4rem;
    }

    .divFormulario input::placeholder {
        font-size: 1.6rem;
    }

    .inputDuplo {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 3.6rem;
    }

    .divFormulario .inputNome, .divFormulario .inputNomeUsuario, .divFormulario .input  {
        width: 90%;
    }

    form .botao {
        background-color: #8886E7;
        color: white;
        font-family: "Inter", sans-serif;
        font-size: 2.2rem;
        text-align: center;
        cursor: pointer;
        padding: 1rem 2rem;
        border-radius: 1.5rem;
    }

    .bukiHome {
        position: absolute;
        right: 3rem;
        bottom: 1rem;
    }

    .bukiHome img{
        width: 6rem;
    }

    @media(max-width: 1200px) {

    }

    @media(max-width: 1180) {

    }

    @media(max-width: 1000px) {

    }

    @media(max-width: 992px) {

        .areaEntrar{
        display: flex;
        justify-content: flex-end;
        z-index: 9999;
        position: relative;
    }

        .textoEntrar {
        font-size: 1.4rem;
        justify-content: flex-end;
        padding: 2rem;
        color: #fff;
    }

    .divFormulario label {
        color: #042A3F;
        font-size: 2rem;
        font-weight: 600;
        padding-left: 0;
    }

    .areaCadastro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 7%;
        position: relative;
        background: white;
        width: 95%;
        margin: 0 auto;
        z-index: 999;
        border-radius: 1rem;
        margin-bottom: 5rem;
    }

    .areaCadastro h1 {
        font-size: 3.6rem;
        color: #042A3F;
        margin-top: 2rem;
    }

    .divFormulario .inputNome, .divFormulario .inputNomeUsuario, .divFormulario .input  {
        width: 90%;
    }

    form .botao {
        background-color: #8886E7;
        color: white;
        font-family: "Inter", sans-serif;
        font-size: 2.2rem;
        text-align: center;
        cursor: pointer;
        padding: 1rem 2rem;
        border-radius: 1.5rem;
        margin-bottom: 2rem;

    }

    .bukiHome {
        position: absolute;
        display: flex;
        width: 6rem;
        bottom: -6em;
    }
    }

    @media(max-width: 876px) {

    }

    @media(max-width: 768px) {

    }

    @media(max-width: 662px) {

    }

    @media(max-width: 480px) {
        .bukiHome {
        position: absolute;
        display: flex;
        width: 6rem;
        bottom: -10em;
    }
    }   
`;

export const InformacoesCadastroStyled = styled.section`
    width: 45rem;
    height: 100vh;
    background-image: url(${BackgroundCadastro});
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
    }

    .mensagem p{
        color: #fff;
        font-size: 1.8rem;
        font-weight: 200;
    }

    .mensagem p span{
        font-weight: 400;
    }

    .mensagem1, .mensagem3 p{
        padding: 0 2rem;
    }

    .mensagemCadastroRoxo {
        background-color: #8886E7;
        position: relative;
        left: -1rem;
    }

    .mensagem2{
        background: #EA6564;
        position: relative;
        right: -4rem;
        border-radius: 1.5rem 0 0 1.5rem;
    }

    .mensagem2 {
        text-align: right;
        padding: 0 2rem;
    }


 @media(max-width: 1200px) {

    }

    @media(max-width: 1180) {

    }

    @media(max-width: 1000px) {

    }

    @media(max-width: 992px) {
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BackgroundCadastro});
    /* background-image: url(${BackgroundCadastro}); */
    background-size: cover;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .mensagem {
        width: 41rem;
        border-radius: 1.5rem;
        height: 11.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        display: none;
    }
    }

    @media(max-width: 876px) {

    }

    @media(max-width: 768px) {

    }

    @media(max-width: 662px) {

    }

    @media(max-width: 442px) {

    }   
`;
