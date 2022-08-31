import React from 'react';
import * as C from './style';
import book from '../../assets/__imagemlivro3.png';
import Button from '../Button';
export default function ComponentSix() {
    return (
        <C.Container>
            <C.ImageContainer>
                <div className='titleContainer'>
                    <p>Está com dúvida? </p>
                    <p className='subText'>Salve o seu maior investimento agora!</p>
                </div>
                <div className='imgContainer'>
                    <img src={book} alt='Livro tema principal' />
                </div>
                <div className='buttonContainer'>
                    <p>Tenha acesso ao exemplar do Ebook:</p>
                    <Button />
                </div>
            </C.ImageContainer>
        </C.Container>
    )
}