import { colors } from "./src/util/Colors_temp";
import { Input } from "./src/util/Input";

export function main(): void {
  let opcao: number;

  while (true) {
    console.log(
      colors.bg.black,colors.fg.magenta,
      "*****************************************************");
    console.log("                                                     ");
    console.log("                  LIVRARIA SCAR                      ");
    console.log("                                                     ");
    console.log("      1 - Listar todos os Produtos                   ");
    console.log("      2 - Listar Produto pelo ID                     ");
    console.log("      3 - Cadastrar Produto                          ");
    console.log("      4 - Atualizar Produto                          ");
    console.log("      5 - Deletar Produto                            ");
    console.log("      0 - Sair                                       ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ", colors.reset);

    opcao = Input.questionInt("Entre com a opção desejada: ");

    switch (opcao) {
      case 1:
        console.log(colors.fg.magenta, "\nListar todos os Produtos\n", colors.reset);
        listarTodos();
        keyPress();
        break;

      case 2:
        console.log(colors.fg.magenta, "\nListar Produto pelo ID\n", colors.reset);
        listarPorId();
        keyPress();
        break;

      case 3:
        console.log(colors.fg.magenta, "\nCadastrar Produto\n", colors.reset);
        cadastrarProduto();
        keyPress();
        break;

      case 4:
        console.log(colors.fg.magenta, "\nAtualizar Produto\n", colors.reset);
        atualizarProduto();
        keyPress();
        break;

      case 5:
        console.log(colors.fg.magenta, "\nDeletar Produto\n", colors.reset);
        deletarProduto();
        keyPress();
        break;

      case 0:
        console.log(colors.fg.greenstrong, "\nSaindo...\n", colors.reset);
        sobre();
        return;

      default:
        console.log(colors.fg.red, "\nOpção inválida!\n", colors.reset);
        keyPress();
        break;
    }
  }
}

function listarTodos(): void {
  console.log("Funcionalidade em desenvolvimento (Etapa 03: Controller).");
}

function listarPorId(): void {
  const id = Input.questionInt("Digite o ID do produto: ");
  console.log(`Buscar produto pelo ID ${id} (Etapa 03: Controller).`);
}

function cadastrarProduto(): void {
  const titulo = Input.question("Digite o título do livro: ");
  const autor = Input.question("Digite o autor: ");
  const preco = Input.questionFloat("Digite o preço: ");

  console.log("Cadastro em desenvolvimento (Etapa 03: Controller).");
  console.log(`Dados anexados -> Título: ${titulo} | Autor: ${autor} | Preço: ${preco}`);
}

function atualizarProduto(): void {
  const id = Input.questionInt("Digite o ID do produto: ");
  console.log(`Atualização do produto ${id} (Etapa 03: Controller).`);
}

function deletarProduto(): void {
  const id = Input.questionInt("Digite o ID do produto: ");
  console.log(`Deletar produto ${id} (Etapa 03: Controller).`);
}

function keyPress(): void {
  Input.question("\nPressione ENTER para continuar...");
}

function sobre(): void {
  console.log("*****************************************************");
  console.log("Projeto Final Bloco 01 - Livraria SCAR");
  console.log("Desenvolvido por: Nathalia Macedo");
  console.log("GitHub: https://github.com/nathscalercio");
  console.log("E-mail: nathscalercio@gmail.com");
  console.log("*****************************************************");
}

main();