import * as C from './style';
import GlobalStyle from '../../styles/globalStyle'
import Footer from '../../components/Footer';
import Main from '../../components/Main';


export default function Home() {
    return (
        <C.Container>
            <GlobalStyle />
            <Main />
            <Footer />
        </C.Container>
    )
}