import styled from 'styled-components'

const Barrinha = styled.div `
    background: rgba(16, 234, 234, 1);
    width: 3px;
    height: 50px;
    border-radius: 1em;
`

const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #2B3031;
    font-family: 'Roboto', sans-serif;
    width: 55vh;
    height: 100vh;
    position: sticky;
    top: 0px;

    .titulo_do_livro {
        display: flex;
        flex-direction: row;
        margin: 2.5em 5em 2.5em 4em;
    }

    .cabecalho{
    width: 190px;
    height: 36px;
    border-radius: 5px;
    border: 1px solid #A8A8A8;
    outline: none;
    cursor: pointer;
    }
    
    .titulo {
        color: #10EAEA;
        font-size: 28px;
        font-weight: bold;
        padding-left: 0.3em;
    }

    .titulo1 {
        color: #fff;
    }

    .Faixa {
        background: #262626;
        color: black;
        height: 3.5em;
        width: 100%;
    }

    .salas {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: #fff;
        padding: 1.3em 0em 1.3em 0em;
        width: 100%;
    }

    .Gerenciamento {
        font-size: 20px;
        margin-left: 2.5em;
    }

    .setinha img {
        width: 24px;
        height: 24px;
        margin-left: -3em;
    }

    .fundos {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #fff;
        width: 100%;
        font-size: 20px;
        
    }

    .categorias {
        color: #1A1A1A;
        font-weight: 600;
        padding-left: 3.3em;
    }
`

export { ContainerMenu, Barrinha }