import styled from "styled-components";

export const FeedStyled = styled.section`
    background: #EEEEEE;
    overflow: auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    
    .segura {
        margin-left: 25rem;
    }

.sidebar-right {
    width: 15.25rem;
    height: 62.625rem;
    border: 1px solid red;
}

#imagem {
    border: none;
    width: 9.171rem;
    height: 8.759rem;
    margin-left: 4.14rem;
    margin-top: 3.251rem;
}


.container-1 li {
    list-style: none;
    margin-bottom: 0.625rem;
}

.abas ul {
    margin-left: 2.5rem;
}

.abas ul li {
    height: 3.114rem;
    margin-top: 2.188rem;
    padding: 0.125rem;
    display: flex;
}

.abas h2 {
    color: #666666;
    ;
    margin-top: 0.7rem;
    margin-left: 0.938rem;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.875rem;
    cursor: pointer;
}

img {
    width: 1.875rem;
    cursor: pointer;
}


.abas-2 {
    width: 12.5rem;
    margin-top: 11.25rem;
    margin-left: 0.625rem;
}

.help {
    margin-top: 15px;
}

.out {
    margin-top: 15px;
}

.abas-2 ul li {
    display: flex;
}

.abas-2 h2 {
    margin-left: 0.938rem;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.313rem;

    color: #666666;
    cursor: pointer;
}

// MAIN

// CABOU

.sidetotal {
    margin-top: 128px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.content-live {
    width: 100%;
    height: auto;
    border-radius: 20px;
    border: 0px solid #1CB885;
    background: #FFF;
    box-shadow: 0px 5px 10px 0px rgba(59, 5, 69, 0.50);
}

.noticia1 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
}

.noticia1 img {
    width: 100%;
}

.teste1 {
    width: 80%;
}

@media (max-width: 1000px) {
    
    .input-publicar input {
        width: 100%;
        max-width: 1000px;
        height: 65px;
        margin-left: 10%;
        padding-left: 1rem;
        border: none;
        border-radius: 15px;
        background-color: #ECEBEA;
    }
}
    
@media (max-width: 850px) {
    
    .input-publicar input {
        width: 80%;
        max-width: 1000px;
        height: 65px;
        margin-left: 10%;
        padding-left: 1rem;
        border: none;
        border-radius: 15px;
        background-color: #ECEBEA;
    }
    
    .botao-publicar button {
        margin-left: 0%;
        width: 100%;
    }
    
    .sidebar-left {
        display: none;
    }

    .comentarios input::placeholder {
        padding-left: 1rem;
        font-size: 80%;
    }

}

`;

export const AreaPrincipalStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
    border-left: 1px solid #DBD4D4;
    border-right: 1px solid #DBD4D4;
    width: 100%;
    margin-left: 25rem;

.procurar {
    display: flex;
    width: 80%;
    margin-top: 57px;
}
.procurar div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 0 1rem 1rem 0;
    cursor: pointer;
    box-shadow: 0px 2.5px 4px 0px rgba(0, 0, 0, 0.25);

}

.procurar div i {
    font-size: 1.8rem;
    padding: 1rem;
}

.procurar input {
    width: 100%;
    height: 5.7rem;
    border: none;
    border-radius: 1rem 0 0 1rem;
    padding: 2.5rem;
    font-size: 20px;
    background: #FFF;
    box-shadow: 0px 2.5px 4px 0px rgba(0, 0, 0, 0.25);
}

.procurar input::placeholder {
    font-size: 20px;
    font-family: "Lato", sans-serif;

}


.lupa {
    position: absolute;
    top: 15px;
    left: 630px;
}

.sidebar-left {
    display: flex;
    justify-content: center;
}

.publicar {
    width: 80%;
    height: auto;
    padding: 10px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 .3rem .4rem 0 rgba(0, 0, 0, 0.20);
}

.principal {
    display: flex;
    width: 100%;
    align-items: center;
}

.principal img {
    width: 7.8rem;
    height: 7.8rem;
    border-radius: 5rem;
}

.inputPublicar {
    width: 100%;
    margin-left: 3%;
}

.inputPublicar input {
    width: inherit;
    font-size: 1.6rem;
    color: #042A3F;
    font-weight: 400;
    height: 6.5rem;
    padding-left: 1rem;
    border: none;
    border-radius: 1.5rem 0 0 1.5rem;
    background-color: #ECEBEA;
    box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.20);
}

.inputPublicar input::placeholder {
    font-size: 1.6rem;
    font-family: "Lato", sans-serif;
    color: #042A3F;
    font-weight: 400;
}

.inputFile label {
    background:  #ECEBEA;
    height: 6.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.20);
    cursor: pointer;
    border-radius: 0 1rem 1rem 0;
}

.inputFile label i {
    font-size: 1.6rem;
    padding: 1rem;
}

.inputFile input{
    display: none;
}

.botaoPublicar {
    display: flex;
    justify-content: flex-end;
}

.botaoPublicar button {
    font-size: 1.8rem;
    font-weight: 400;
    margin-top: 3%;
    width: 20%;
    height: 38px;
    border: none;
    border-radius: 28px;
    background-color: #8886E7;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    color: #fff;
}

.botaoPublicar button:hover {
    box-shadow: 0 .2rem .5rem #8886a6;
    
}

.artigos {
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFF;
    box-shadow: 0px 2.5px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
}

@media ( max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
    border-left: 1px solid #DBD4D4;
    border-right: 1px solid #DBD4D4;
    width: 100%;
    margin-left: 0;
    margin: 0 auto;
    margin-top: 38rem;
}

@media ( max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
    border-left: 1px solid #DBD4D4;
    border-right: 1px solid #DBD4D4;
    width: 100%;
    margin-left: 0;
    margin: 0 auto;
    margin-top: 43rem;
}

`;

export const LateralDireitaStyled = styled.div`
    width: auto;

    @media (max-width: 1000px) {
        display: flex;
        position: absolute;
        overflow-x: auto;
        min-width: 100%;
        max-width: 100%;
    }
`;

export const LateralStyled = styled.section`
    width: 30rem;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 1000px) {
        margin-top: 13.1rem;
        width: auto;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        padding: 1rem;
        background: linear-gradient(to left top, #EA6564, #5272A5);
    }
`;
