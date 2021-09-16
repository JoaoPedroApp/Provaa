import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async listarProdutos() {
        let r = await api.get(`/produto`);
        return r.data;
    }

    async inserirProduto(nome, nome, categoria, preco, avaliacao, produto, estoque, imagem ) {
        let r = await api.post(`/produto`, { nome, categoria, preco, avaliacao, produto, estoque, imagem });
        return r.data;
    }

    async alterarProduto(id,  nome, categoria, preco, avaliacao, produto, estoque, imagem ) {
        let r = await api.put('/produto/' + id, {  nome, categoria, preco, avaliacao, produto, estoque, imagem  });
        return r.data;
    }

    async removerProduto(id) {
        let r = await api.delete('/produto/' + id);
        return r.data;
    }
}