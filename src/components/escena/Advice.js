import { useState } from 'react';
import { BtHome, CtHome, ImgBackground } from '../../styles/styled';
import { Escena } from './Escena';
import data from '../../data/texts.json';

function Advice() {

  const [currentPosition, setCurrentPosition] = useState(0);
  const [img, setImg] = useState(1);

    const add = () => {
    if (currentPosition === data.length - 1) {
      setCurrentPosition(data.length - 1);
    } else {
      setCurrentPosition(currentPosition + 1);
      setImg(img + 1);
    };
  };

  const subtract = () => {
    if (currentPosition >= 1) {
      setCurrentPosition(currentPosition - 1);
      setImg(img - 1);
    } else {
      setCurrentPosition(0);
    };
  };

    return (
      <>
        <CtHome className='ct-home'>
            <BtHome onClick={subtract} className='bt-home'>Anterior</BtHome>
            <BtHome onClick={add} className='bt-home bt-next'>Siguiente</BtHome>
        </CtHome>
        {
            data.map((txt, index) => (
            <Escena data={txt} key={index} id={index} isRight={currentPosition === index}/>
            ))
        }
        <ImgBackground src={require(`../../img/${img}.jpg`)} alt="background image"></ImgBackground>
      </>
  )
};

export default Advice;