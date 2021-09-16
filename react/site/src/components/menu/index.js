import { ContainerMenu, Barrinha } from './styled.js'

export default function Cabecalho() {
    return (
        <ContainerMenu>
            <div className="titulo_do_livro">
                <div className="livrinho"><img src="/assets/images/gitlab.png" alt="" /></div>
                <div className="titulo">Dev<span className="titulo1">Store</span></div>
            </div>
            <div className="Faixa"></div>
            <div className="salas">
                <div className="Gerenciamento">Gerenciamento</div>
                <div className="setinha"><img src="/assets/images/setinha-gerenciamento.png" alt="" /> </div>
            </div>
            <div className="fundos">
                <Barrinha />
                <div className="categorias">Alunos</div>
            </div>
        </ContainerMenu>
    )
}