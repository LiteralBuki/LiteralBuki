import styled from "styled-components";

export const FooterStyled = styled.footer`
    background-color: #8886E7;
    padding: 0 7%;
    min-height: 30rem;
    padding-top: 4rem;

    .footerDiv {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    }

    .areaTexto p{
        font-size: 1.6rem;
        color: #fff;
        padding: 1rem 0;
    }

    .divInput {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
    }

    .divInput input {
        height: 4.5rem;
        padding-left: 1rem;
        font-size: 1.6rem;
        font-family: "Poppins", sans-serif;
        border-radius: 1rem;
    }

    .divInput button {
        background: #FFA8A3;
        color: #fff;
        height: 4.5rem;
        width: 10rem;
        border-radius: 1rem;
        font-size: 1.6rem;
        font-family: "Jost", sans-serif;
        position: relative;
        left: -2rem;
    }

    .gridInformacoes {
        display: flex;
    }

    .gridInformacoes div{
        padding-right: 14%;
    }

    .gridInformacoes div h5{
        font-size: 1.6rem;
        color: #fff;
        font-weight: 400;
    }

    .gridInformacoes div ul {
        list-style: none;
    }

    .gridInformacoes div ul li {
        font-size: 1.4rem;
        color: #fff;
        font-weight: 200;
    }

    .footerDireitos {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: .1rem solid #fff;
        padding: 1.5rem 0;
    }

    .footerDireitos div p {
        color: #fff;
        font-size: 1.4rem;
        font-weight: lighter;
    }

    .icons img{
        padding: 0 .8rem;
        width: 4rem;
    }

`;

