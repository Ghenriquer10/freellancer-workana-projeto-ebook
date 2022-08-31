import React from 'react';
import * as C from './style'
import photo from '../../assets/testimonial/_provasocial1.png';

import { CategoryProps } from '../ComponentSeven'

type ItemProps = {
    item: CategoryProps;
}

export default function Posts({ item }: ItemProps) {
    return (
        <C.Container>
            <div className='postContainer'>
                <div className='descriptionText'>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
                <div className='descriptionAuthor'>
                    <img src={item.photoProfile} alt='Imagem do autor do post' />
                    <p className='author'>{item.author}</p>
                    <p>{item.status}</p>
                </div>
            </div>
        </C.Container>
    )
}