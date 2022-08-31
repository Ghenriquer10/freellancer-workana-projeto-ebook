import React from 'react';
import * as C from './style';
import desespero from '../../assets/desespero.png';

export default function ComponentTwo() {
    return (
        <C.Container>
            <C.ImageContainer>
                <img src={desespero} alt='Imagem do trabalhador desesperado' />
            </C.ImageContainer>
            <C.TextContainer>
                <p>Tudo o que você precisa saber para construir o seu</p><p>SONHO!</p>
                <p>Você tomou uma decisão a tempos atrás. Decidiu largar tudo no Brasil para tentar um vida melhor nos E.U.A.
                    Veio para um país diferente, cultura diferente, clima diferente e várias outras adversidades. Enfrentou isso tudo, trabalhou,
                    se esforçou, se privou de alguns luxos, tudo isso em prol de um objetivo maior. A construção de sua casa própria,
                    o sonho de consumo maior entre todos os brasileiros. Porém, como que você vai coordenar e orientar a construção da sua casa,
                    sem ter experiência, e com mais um agravante, estando longe do local. Pensando nisso, que desenvolvemos  um guia completo
                    que vai te orientar e guiar nos primeiros passos do seu planejamento para a construção da sua casa. Quais projetos você vai precisar,
                    taxas, clausulas contratuais que vão te livrar de prejuízos e dores de cabeça, financiamento para imigrantes brasileiros para construir no Brasil,
                    casos de pessoas que foram enganadas e muito mais. Leia, se informe, se blinde, evite prejuízos financeiros irreversíveis.
                </p>
            </C.TextContainer>
        </C.Container>
    )
}