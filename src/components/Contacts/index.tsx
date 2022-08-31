import * as C from './style'
import remitlyLogo from '../../assets/remitly.png';
import { SiWhatsapp } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import { ImFacebook2 } from 'react-icons/im';
import { SiYoutube } from 'react-icons/si';
export default function Contacts() {

    function handleRedirect() {
        window.location.href = 'https://wa.me/55338404771?text=Quero%20pagar%20pelo%20Remitly%20e%20quero%20meu%20desconto%20de%2020%'
    }

    return (
        <C.Container>
            <div className='contacts--field'>
                <div className='remitly-descount'>
                    <p>Compre pelo Remitly e Receba até 20% de</p><p>DESCONTO!</p>
                    <img src={remitlyLogo} alt={'imagem de desconto da plataforma remitly'} />
                </div>
                <div className='whatsapp-link'>
                    <p>Chame no WhatsApp! Clique aqui para o Desconto!</p>
                    <button onClick={handleRedirect}>
                        <SiWhatsapp />
                    </button>
                </div>
                <div className='social--medias'>
                    <p>Siga-nos em nossas redes sociais:</p>
                    <div className='icons'>
                        <button>
                            <BsInstagram className='insta' />
                        </button>
                        <button>
                            <SiYoutube className='youtube' />
                        </button>
                        <button>
                            <ImFacebook2 className='facebook' />
                        </button>
                    </div>
                </div>
            </div>
        </C.Container>
    )
}