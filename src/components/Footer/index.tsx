import * as C from './style';
import trilhosLogo from '../../assets/logopluslogo.png';

export default function Footer() {

    function handleDeveloper() {
        window.location.href = 'https://github.com/Ghenriquer10'
    }

    return (
        <C.Container>
            <img src={trilhosLogo} alt='Imagem da trilhos engenharia' />
            <p>© 2022 Todos os direitos reservados.</p>
            <p onClick={handleDeveloper}>Desenvolvedor</p>
        </C.Container>
    )
}