import React from 'react'
import { BtStart, CtWelcome, ImgStart, TxtStart, TxtWelcome } from '../../styles/styled'

export const Welcome = ({setStart}) => {

    const startButton = () => {
        setStart(1);
    };

    return (
        <>
            <CtWelcome>
                <h2>¡¡¡Bienvenid@!!!</h2>
                <TxtWelcome>Aquí podrás acceder a consejos mediante botones con los que podrás avanzar o retroceder en la búsqueda de dichos consejos, dale al botón de inicio para comenzar</TxtWelcome>
                <BtStart onClick={startButton}>
                    <TxtStart>INICIAR</TxtStart>
                    <ImgStart viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF0066" d="M49.5,-59.9C62.8,-47.8,71.4,-30.9,75.6,-12.5C79.9,6,79.9,26,71.3,41.5C62.7,56.9,45.7,67.8,27,74.8C8.4,81.9,-11.9,85.1,-28.8,79C-45.7,72.9,-59.2,57.5,-69.6,39.9C-80,22.4,-87.2,2.9,-85.3,-16.3C-83.4,-35.4,-72.3,-54.2,-56.6,-65.9C-40.8,-77.5,-20.4,-82.1,-1.2,-80.7C18.1,-79.4,36.2,-72,49.5,-59.9Z" transform="translate(100 100)" />
                    </ImgStart>
                </BtStart>
            </CtWelcome>
        </>
  )
}
