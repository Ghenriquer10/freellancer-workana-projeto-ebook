import * as C from './style';
import logo_1 from '../../assets/principal.png';
import BackgroundSvg from '../../assets/bakgroundSvg';


export default function ComponentOne() {
    return (
        <C.Container>
            <C.TextLogo>
                <p>Guia Completo</p>
                <p>para você que mora nos EUA e quer construir</p>
                <p>no Brasil!</p>
            </C.TextLogo>
            <C.ImageLogo>
                <div className='background'>
                    <BackgroundSvg />
                </div>
                <div className='logo' >
                    <img src={logo_1} alt='Imagem do ebook' />
                </div>
            </C.ImageLogo>
        </C.Container >
    )
}