import * as C from './style';

export default function Button() {

    function handlePayment() {
        window.location.href = 'https://pay.hotmart.com/K67707729S?checkoutMode=10'
    }

    return (
        <C.Container>
            <button onClick={handlePayment}>Quero meu Ebook</button>
        </C.Container>
    )
}