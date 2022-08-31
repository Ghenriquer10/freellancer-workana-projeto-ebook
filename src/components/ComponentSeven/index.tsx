import * as C from './style';
import Posts from '../Posts';
import SocialProve1 from '../../assets/testimonial/_provasocial1.png';
import SocialProve2 from '../../assets/testimonial/_provasocial2.png';
import SocialProve3 from '../../assets/testimonial/_provasocial3.png';

export type CategoryProps = {
    title: string
    description: string
    author: string
    status: string
    photoProfile: string
}

export default function ComponentSeven() {

    const data = {
        "testmonial": [
            {
                "title": "Achei que sabia tudo o que precisava!",
                "description": "Levei uma multa de R$ 2.435,00 do CREA por não saber quais serviços eu precisava contratar do engenheiro. Por uma questão de falta de conhecimento, não contratei todos os serviços que precisava e fui multada. Se tivesse tido acesso a esse ebook anteriormente, teria adquirido os serviços certos e teria me livrado da multa.",
                "author": "Marcos Vinicius",
                "status": "Depoimento",
                "photoProfile": `${SocialProve1}`
            },
            {
                "title": "Levei um prejuizo de R$ 250mil",
                "description": "Por falta de conhecimento, contratei uma equipe que no fim das contas, abandonou a minha obra, e tive que demolir. Prejuízo de R$ 250.000,00 , sem esperança de ter esse dinheiro de volta. Se tivesse lido esse ebook antes, teria sido a minha salvação. Dicas simples, mas pontuais e decisivas, que teriam me livrado desse prejuízo enorme.",
                "author": "Marisa Martins",
                "status": "Depoimento",
                "photoProfile": `${SocialProve2}`
            },
            {
                "title": "R$ 15 mil em taxas que eu não conhecia!",
                "description": "Comprei um terreno, com um valor maravilhoso, estava nas nuvens pensando que tinha fechado o melhor negócio da minha vida. Pois bem, depois de fechar o negócio e entregar o dinheiro, foram só surpresas desagradáveis. Foram surgindo várias taxas que nunca tinha ouvido falar, e que não negociei com o vendedor, tive que arcar com tudo o que me gerou um gasto de mais de R$ 15.000,00. E não tive como renegociar com o ex-dono. Realmente esse livro iria cair como uma luva.",
                "author": "Pedro Paulo",
                "status": "Depoimento",
                "photoProfile": `${SocialProve3}`
            }
        ]
    }

    return (
        <C.Container>
            <div className='title'>
                <p>Casos de quem deixou passar essa informação</p>
                <p>Esses relatos são de pessoas que não aproveiram essa oportunidade.</p>
            </div>
            <div className='cards'>
                {Object.values(data.testmonial).map((item: CategoryProps) => {
                    return (
                        <Posts
                            item={item}
                            key={item.description}
                        />
                    )
                })}
            </div>
        </C.Container>
    )
}