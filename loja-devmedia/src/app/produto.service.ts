import { Injectable } from "@angular/core";
import { Produto } from "./produto";

@Injectable()
export class ProdutoService {
    getProdutos() {
        let produtos: Produto[] = [];
        let produto = new Produto();
        produto.id = 1;
        produto.nome = 'Macarrão';
        produtos.push(produto);

        return produtos;
    }
}
