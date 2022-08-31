import BackgroundSvg from '../../assets/bakgroundSvg';
import { BsCheck2Circle } from 'react-icons/bs'
import * as C from './style';
import { Content } from '../ComponentThree/style';
import Button from '../Button';

export default function ComponentFive() {
    return (
        <C.Container>
            <Button />
            <Content>
                <C.TextContainer>
                    <p>Mais alguns tópicos do conteúdo que estamos</p>
                    <p>te entregando</p>
                    <p>Você precisa estar atento aos detalhes!</p>
                </C.TextContainer>
                <C.TextLogo>
                    <div className='text' >
                        <p>
                            <BsCheck2Circle /> Casos reais (com fotos) de imigrantes nos E.U.A que tiveram muita dor de cabeça e prejuízos financeiros quando decidiram construir no Brasil.
                        </p>
                        <p>
                            <BsCheck2Circle /> Técnicas construtivas que vão te surpreender com a economia na sua obra.
                        </p>
                        <p>
                            Não perca essa oportunidade de adquirir conhecimento na hora mais importante da sua vida. Esse é o momento da realização do sonho que você veio de longe buscar.
                        </p>
                    </div>
                </C.TextLogo>
            </Content>
        </C.Container>
    )
}