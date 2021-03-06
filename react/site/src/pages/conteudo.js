import { useState, useRef, useEffect } from 'react';

import { ContainerConteudo, Traco } from './conteudo.styled.js'


import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import LoadingBar from 'react-top-loading-bar'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Api from '../service/api.js';
const api = new Api();


export default function Conteudo() {

    const [produto, SetProduto] = useState([]);
    const [nome, SetNome] =  useState('')
    const [categoria, setCategoria] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [precode, setPrecod] = useState('');
    const [precopor, setPrecopor] = useState('');
    const [estoque, setEstoque] = useState('');
    const [link, setLink] = useState('');
    const [descricao, setDescricao] = useState('');
    const [idAlterando, setdAlterando] = useState(0);

    const loading = useRef(null);

  
    async function listar() {
        loading.current.continuousStart();
        let j = await api.listarProdutos();
        SetProduto(j);
        loading.current.complete();
    }

    


    async function inserir() {
        if (idAlterando !== 0) {
            let alter = await api.alterarProduto(nome, categoria, avaliacao, precode, precopor, estoque, link, descricao );
            
            if (alter.erro)
                toast.error(` ${alter.erro}`)
            else 
                toast.dark('Produto alterado com sucesso');

        } else {
            let inse = await api.inserirProduto(nome, categoria, avaliacao, precode, precopor, estoque, link, descricao );
            
            if (inse.erro) {
                toast.error(` ${inse.erro}`)
            }
            else {
                toast.dark('Produto inserido com sucesso');
            }
        }

        limparCampos();
        listar();
    }



    
    function limparCampos() {
        SetNome('');
        setCategoria('');
        setPrecopor('');
        setEstoque('');
        setdAlterando(0)
    }

    async function removerProduto(id) {
        confirmAlert({
            title: 'Remover produto',
            message: `Tem certeza que deseja remover o produto ${id} ?`,
            buttons: [
              {
                label: 'Sim',
                onClick: async () => {
                    let r = await api.removerProduto(id);
                    if (r.erro)
                        toast.error(`${r.erro}`);
                    else {
                        toast.dark('Produto removido!')
                        listar();
                    }
                }
              },
              {
                label: 'N??o deu'
              }
            ]
        });
    }

    async function alterandoProduto(item) {
        SetNome(item.nm_produto);
        setCategoria(item.ds_categoria);
        setPrecopor(item.vl_preco_por);
        setEstoque(item.qtd_estoque);
        setdAlterando(item.id_produto)    
    }

    useEffect(() => {
        listar();
    }, [])

    return (
        <ContainerConteudo>
            <LoadingBar color='#986CDF' ref={loading} />
            <ToastContainer />
            <div className="cabecalhoConteudo">
                <div className="Perfil">
                    <div className="imagemdoperfil"><img src="/assets/images/usuario.jpeg" alt="" /></div>
                    <div class="notificacao">4</div>    
                </div>

                <div className="mensagem">Opa,<b>Jo??o</b></div>

                <div className="comandos">
                    <div className="atualizar" onClick={listar}> <button> <img src="/assets/images/refresh.png" alt="" /> </button> </div>
                    <div className="logout"> <button> <img src="/assets/images/log-out.png" alt="" /> </button> </div>
                </div>
            </div>

            <div className="cadastros">
                <div className="titulo">
                    <Traco />
                    <div className="Aluno">{idAlterando === 0 ? 'Novo Produto' : 'Alterando Produto ' + idAlterando}</div>
                </div>
                <div className="containerInput1">
                    <div className="box-input">
                        <div className="label">Nome:</div>
                        <input className="Imput" type="text" value={nome} onChange={e => SetNome(e.target.value)} />
                    </div>
                
                    <div className="box-input1">
                        <div className="label">Pre??o DE :</div>
                        <input className="Imput" type="text" value={precode} onChange={e => setPrecod(e.target.value)} />
                    </div>
                </div>

                <div className="containerInput2">
                    <div className="box-input">
                        <div className="label">Categoria:</div>
                        <input className="Imput" type="text" value={categoria} onChange={e => setCategoria(e.target.value)} />
                    </div>
                
                    <div className="box-input1">
                        <div className="label">Pre??o Por:</div>
                        <input className="Imput" type="text" value={precopor} onChange={e => setPrecopor(e.target.value)} />
                    </div>

                    
                </div>    

                <div className="containerInput3">
                    <div className="box-input">
                        <div className="label">Avalia????o:</div>
                        <input className="Imput" type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)} />
                    </div>
                
                    <div className="box-input1">
                        <div className="label">Estoque:</div>
                        <input className="Imput" type="text" value={estoque} onChange={e => setEstoque(e.target.value)} />
                    </div>
                </div>

                <div className="containerInput4">
                    <div className="box-input">
                        <div className="label">Link imagem:</div>
                        <input className="Imput" type="text" value={link} onChange={e => setLink(e.target.value)} />
                    </div>
                    <div className="box-input4">
                        <div className="label">Descri????o:</div>
                        <textarea className="textarea" rows="10" cols="91" value={descricao} onChange={e => setDescricao(e.target.value)}></textarea>
                    </div>

                   
                </div>     
                < div className="buttom"onClick={inserir} > {idAlterando === 0 ? 'Cadastrar' : 'Alterar'}</div>

            </div> 
            

            <div className="produtosss">
                <div className="titulo">
                    <Traco />
                    <div className="novoAluno">Produtos Cadastrados </div>
                </div>
  
                <table>

                    <thead>
                        <tr className="cabecalho">
                            <th className="espa??o"></th>
                            <th className="idTb">ID</th>
                            <th className="alunoTb">Produto</th>
                            <th className="numeroTb">Categoria</th>
                            <th className="turmaTb">Pre??o</th>
                            <th className="cursoTb">Estoque</th>
                            <th className="espa??o"></th>
                            <th className="espa??o"></th>
                        </tr>
                    </thead>

                    <tbody>

                        {produto.map((item, i) => 

                            <tr className={i % 2 === 0 ? "linha-alternada" : ""}>
                                <td title={item.img_produto}>
                                    <img src={item.img_produto} alt="" style={{ width: '40px', height: '40px'}} />
                                </td>
                                <td className="idTb1">{item.id_produto}</td>
                                
                                <td title={item.nm_produto}>
                                    {item.nm_produto != null && item.nm_produto.length >= 10
                                        ? item.nm_produto.substr(0, 10) + '...'  : item.nm_produto}       
                                </td>
                                <td>{item.ds_categoria}</td>
                                <td>{item.vl_preco_por}</td>
                                <td>{item.qtd_estoque}</td>
                                <td className="botao-visivel"> <button onClick={() => alterandoProduto(item) } > <img src="/assets/images/edit.png" alt="" /> </button> </td>
                                <td className="botao-visivel"> <button onClick={() => removerProduto(item.id_produto) } > <img src="/assets/images/trash.png" alt="" /> </button> </td>
                            </tr>

                        )}

                    </tbody>

                </table>
            </div>
        </ContainerConteudo>
    )
}