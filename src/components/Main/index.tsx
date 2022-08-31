import ComponentOne from '../ComponentOne'
import ComponentTwo from '../ComponentTwo'
import ComponentThree from '../ComponentThree'
import ComponentFour from '../ComponentFour'
import ComponentFive from '../ComponentFive'
import ComponentSix from '../ComponentSix'
import ComponentSeven from '../ComponentSeven'
import ComponentEight from '../ComponentEight'
import Contacts from '../Contacts'
import * as C from './style'

export default function Main() {
    return (
        <C.Container>
            <ComponentOne />
            <ComponentTwo />
            <ComponentThree />
            <ComponentFour />
            <ComponentFive />
            <ComponentSix />
            <ComponentSeven />
            <ComponentEight />
            <Contacts />
        </C.Container>
    )
}