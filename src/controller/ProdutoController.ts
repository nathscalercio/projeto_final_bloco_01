import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
  private listaProdutos: Array<Produto> = [];
  private numero: number = 0; // contador para gerar IDs

  // Gera um novo ID
  private gerarNumero(): number {
    return ++this.numero;
  }

  // Retorna a posição do produto no array (ou -1 se não existir)
  private buscarNoArray(id: number): number {
    return this.listaProdutos.findIndex((p) => p.id === id);
  }

  // ===== CRUD =====

  public listarTodos(): void {
    if (this.listaProdutos.length === 0) {
      console.log("\nNenhum produto cadastrado!");
      return;
    }

    console.log("\nLista de Produtos:");
    for (const produto of this.listaProdutos) {
      produto.visualizar();
    }
  }

  public procurarPorId(id: number): void {
    const posicao = this.buscarNoArray(id);

    if (posicao === -1) {
      console.log("\nProduto não encontrado!");
    } else {
      this.listaProdutos[posicao].visualizar();
    }
  }

  public cadastrar(produto: Produto): void {
    produto.id = this.gerarNumero();
    this.listaProdutos.push(produto);

    console.log("\nProduto cadastrado com sucesso!");
    produto.visualizar();
  }

  public atualizar(produto: Produto): void {
    const posicao = this.buscarNoArray(produto.id);

    if (posicao === -1) {
      console.log("\nProduto não encontrado para atualizar!");
    } else {
      this.listaProdutos[posicao] = produto;
      console.log("\nProduto atualizado com sucesso!");
      produto.visualizar();
    }
  }

  public deletar(id: number): void {
    const posicao = this.buscarNoArray(id);

    if (posicao === -1) {
      console.log("\nProduto não encontrado para deletar!");
    } else {
      this.listaProdutos.splice(posicao, 1);
      console.log("\nProduto deletado com sucesso!");
    }
  }
}
