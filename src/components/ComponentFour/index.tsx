import * as C from './style';
import imageTerrain from '../../assets/_escolhadeTerreno.png'

export default function ComponentFour() {
    return (
        <C.Container>
            <C.ImageContainerThree>
                <img src={imageTerrain} alt='Imagem mulher escolhendo terreno' />
            </C.ImageContainerThree>
            <C.TextContainerThree>
                <p>Adquira conhecimento e fuja de dores de</p>
                <p>cabeça</p>
                <p>
                    Saiba como conduzir o processo de construção da sua casa mesmo morando longe. Não seja enganado por vigaristas, falsos construtores, parentes mal intencionados, mals profissionais, orgãos públicos que querem extorquir taxas absurdas. Se blinde com essas informações e evite prejuízos financeiros irreversíveis
                </p>
            </C.TextContainerThree>
        </C.Container>
    )
}