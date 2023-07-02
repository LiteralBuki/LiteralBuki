import styled from "styled-components";

export const SobreNosStyled = styled.section`
    align-items: center;
    justify-content: center;
    padding-bottom: 3rem;

    h2 {
        text-align: center;
        font-family: "Poppins", sans-serif;
        font-size: 4rem;
        font-weight: 400;
        color: #fff;
        background-color: #EA6564;
        width: 100%;
        padding: 3rem 1rem;
        border-radius: 1rem;
        margin-bottom: 7rem;
    }

    p {
        color: var(--primary-color);
        font-size: 1.8rem;
    }

    p span {
        font-weight: 600;
    }

    @media (max-width: 900px) {
        p {
            text-align: center;
            padding-bottom: 2rem;
        }

    }
`;

export const SobreNosDivStyled = styled.div`
    padding: 0 9%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SobreNosTextStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    align-items: center;
    column-gap: 5rem;
`;

export const AreaFotoStyled = styled.div`
    width: inherit;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 1.4rem;
        color: #F74B35;
    }
    
`;

export const EquipeBukiStyled = styled.img`
    width: inherit;

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const ApoioStyled = styled.section`
    padding: 0 4%;

    h3 {
        margin-top: 2rem;
        color:  #F74B35;
        font-weight: 400;
        font-size: 3rem;
    }

    h4 {
        font-family: "Prata", sans-serif;
        font-size: 5rem;
        text-align: center;
    }

    div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
        align-items: center;
    }

    div div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

