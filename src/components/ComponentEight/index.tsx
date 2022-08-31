import React from 'react';
import * as C from './style'
import book from '../../assets/__imagemlivro3.png'
import Button from '../Button';
export default function ComponentEight() {
    return (
        <C.Container>
            <C.ImageContainer>
                <div className='title'>
                    <p>COMPRE AGORA</p>
                    <p>Garanta seu Ebook COMPLETO</p>
                </div>
                <div>
                    <img src={book} alt='Livro tema principal' />
                </div>
                <div className='payment'>
                    <div className='price'>
                        <p className='oldPrice'>$24.00</p>
                        <p className='descount'>$12.00 USD</p>
                    </div>
                </div>
                <Button />
            </C.ImageContainer>
        </C.Container>
    )
}