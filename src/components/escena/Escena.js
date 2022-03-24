import { Txt } from '../../styles/styled';

export const Escena = ({ isRight, data }) => {
    
    return (
        <>
            <Txt isRight={isRight} className='txt'>
                <p>{data.txt}</p>
            </Txt>
        </>
  )
}
