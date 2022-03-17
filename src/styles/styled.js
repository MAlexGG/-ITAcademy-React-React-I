import styled from 'styled-components';
import fondo from '../img/fondo.jpg';


//¿Cómo hago para que me reconozca las propiedades de css dentro de los backticks?

//Advice page

export const CtHome = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.5%;
`;

export const BtHome = styled.button`
    width: 50vw;
    height: 80px;
    font-size: 1.5rem;
`;

export const Txt = styled.div`
    border: 3px solid black;
    margin: 20px;
    border-radius: 30px;
    background-color: ${({isRight}) => isRight ? 'pink' : 'rgba(255, 255, 255, 0.7)'};  
`;

//Welcome page

export const CtWelcome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Gloria Hallelujah', cursive;
    font-size: 2rem;
    color: white;
    background-image: url(${fondo});
    background-size: cover;
    width: 100vw;
    height: 100vh;
`;

export const TxtWelcome = styled.p`
    margin: 2%;
`;

export const BtStart = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: transparent;
    border: none
`;

export const TxtStart = styled.p`
    position: absolute;
    color: white;
    font-family: 'Gloria Hallelujah', cursive;
    font-size: 2rem;
`;

export const ImgStart = styled.svg`
    width: 240px;
`;

export const ImgBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;
