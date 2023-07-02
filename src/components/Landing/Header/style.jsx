import styled from 'styled-components';

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: none;
    justify-content: space-between;
    align-items: center;
    padding: 0 6%;
    padding-top: .8rem;
    padding-bottom: .5rem;
    color: var(--primary-color);

    > h1 {
    font-size: 2.8rem;
        
    }

    div img {
        width: 5rem;
    }

@media (max-width: 1200px) { 
    html {
        font-size: 58%;
    }
}

`;

export const MenuStyled = styled.nav`
    display: flex;
    list-style: none;
    align-items: center;

    li.link {
    margin-left: 8rem;
    font-size: 1.6rem;
    transition: all 1s ease-in-out;
    }

    li.separaLink {
        font-size: 1.4rem;
        margin-left: 2rem;
    }
    
    a {
    color: var(--primary-color);
    transition: all 300ms ease-in-out;
    font-weight: 400;
    }

    a:hover {
        font-size: 1.7rem;
    }

    li.linkPaginas {
        margin-left: 2rem;
    }
    
    li:last-child.botaoEntrar a{
    font-weight: 600;
    font-size: 1.6rem;
    border: .1rem solid #FF543E;
    border-radius: 1rem;
    color: #454856;
    transition: all 5s ease-in-out;
    -webkit-transition:  .5s ease;
    -moz-transition:  .5s ease;
    -ms-transition:  .5s ease;
    -o-transition:  .5s ease;
    padding: 1rem 3rem;
}
    li:last-child.botaoCadastro a{
    font-weight: 600;
    font-size: 1.6rem;
    border: .1rem solid var(--cor-botao);
    border-radius: 1rem;
    color: #454856;
    transition: all 5s ease-in-out;
    -webkit-transition:  .5s ease;
    -moz-transition:  .5s ease;
    -ms-transition:  .5s ease;
    -o-transition:  .5s ease;
    padding: 1rem 2rem;
}

    li:last-child a:hover{
    background-color: rgb(255, 255, 255);
    border-radius: 2.5;
    -webkit-border-radius: 3rem;
    -moz-border-radius: 3rem;
    -ms-border-radius: 3rem;
    -o-border-radius: 3rem;
}

@media (max-width: 1200px) { 
    z-index: 9999;
    li.link {
        margin-left: 4rem;
    }
}

@media (max-width: 900px) {
    li {
    padding-left: 1rem;
    }
}
@media (max-width: 1000px) { 
    background-color: #fff;
    min-width: 25rem;
    height: 33rem;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 3rem;
    position: fixed;
    top: 8rem;
    right: 3.5rem;
    display: ${({ show }) => show ? 'block' : 'none'};

    li {
        padding: 0;
        margin: 1.8rem 0;
        text-align: center;
    }

    li.link {
        margin-left: 0;
    }

    li.linkPaginas {
        margin-left: 0;
    }

    li.separaLink {
        font-size: 1.4rem;
        margin-left: 0;
    }

    li a {
        font-size: 1.8rem;
        font-weight: 400;
        padding: .7rem 1.2rem;
        border-radius: 2rem;
    }

    li a:hover {
        font-size: 1.8rem;
        background-color: #fff;
        color:  #FF543E;
    }

    li:last-child a{
    transition: all .5s ease;
    -webkit-transition:  .5s ease;
    -moz-transition:  .5s ease;
    -ms-transition:  .5s ease;
    -o-transition:  .5s ease;;
    }

    li:last-child a:hover {
        font-size: 1.7rem;
    }
}

`;

export const MenuContentStyled = styled.div`
    position: fixed;
    right: 5%;
    cursor: pointer;
    display: none;
    z-index: 99999;    
    
    @media (max-width: 1000px) { 
        display: block;
    }
`;

export const MenuIconStyled = styled.img`
    width: 1rem;
`;
