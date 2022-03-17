import { useState, useEffect } from 'react';
import { Txt } from '../../styles/styled';

export const Escena = (props) => {

    const [isRight, setIsRight] = useState(false);

    useEffect(() => {
        if (props.position - 1 === props.id) {
            setIsRight(false);

        };
        if (props.position + 1 === props.id) {
            setIsRight(false);
        };
        if (props.position === props.id) {
            setIsRight(true);
        };
    }, [props]);
    
    return (
        <>
            <Txt isRight={isRight} className='txt'>
                <p>{props.data.txt}</p>
            </Txt>
        </>
  )
}
