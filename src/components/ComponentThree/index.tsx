import * as C from './style';
import { BsCheck2Circle } from 'react-icons/bs'
import Button from '../Button';

export default function ComponentThree() {
    return (
        <C.Container>
            <Button />
            <C.Content>
                <C.TextContainer>
                    <p>Leia, se informe, se blinde, evite prejuízos financeiros</p>
                    <p>irreversíveis!</p>
                    <p>Você pode contruir sem dores de cabeça! O que nosso conteúdo tem para você?</p>
                </C.TextContainer>
                <C.TextBenefits>
                    <div className='text'>
                        <p>
                            <BsCheck2Circle /> Como conseguir projetos residenciais de alta qualidade e baixo custo;
                        </p>
                        <p>
                            <BsCheck2Circle /> Como "burlar" multas e embargos da prefeitura e crea na sua obra;
                        </p>
                        <p>
                            <BsCheck2Circle /> Saiba negocias as taxas maliciosas que existem na aquisição de lotes e casas;
                        </p>
                        <p>
                            <BsCheck2Circle /> Elimine o uso de procurações, método oficial e de baixo custo para ter o controle de tudo na sua mão;
                        </p>
                        <p>
                            <BsCheck2Circle /> Modelo de contrato da execução da sua obra, descubra cláusulas que vão te livrar de problemas futuros;
                        </p>
                        <p>
                            <BsCheck2Circle /> Financiamento de construção no Brasil para imigrantes brasileiros. Sim! É possível financiar a sua obra no Brasil e você MORAR NOS EUA;
                        </p>
                        <p>
                            <BsCheck2Circle /> Saiba identificar profissionais mal intencionados, (construtores, engenheiros, arquitetos), onde buscar informações, como denunciar mesmo morando nos E.U.A;
                        </p>
                    </div>
                </C.TextBenefits>
            </C.Content>
        </C.Container>
    )
}