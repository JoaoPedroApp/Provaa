import { Container } from './styled.js'
import Menu from '../components/menu/index.js'
import Conteudo from './conteudo.js'


export default function devMonk() {
    return (
        <Container>
            <Menu />
            <Conteudo />
        </Container>
    )
}