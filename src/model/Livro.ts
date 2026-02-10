import { Produto } from "./Produto";
import { colors } from "../util/Colors_temp";

export class Livro extends Produto {

  private _autor: string;
  private _editora: string;

  constructor(
    id: number,
    titulo: string,
    preco: number,
    autor: string,
    editora: string
  ) {
    super(id, titulo, preco);
    this._autor = autor;
    this._editora = editora;
  }

  public get autor(): string {
    return this._autor;
  }

  public set autor(value: string) {
    this._autor = value;
  }

  public get editora(): string {
    return this._editora;
  }

  public set editora(value: string) {
    this._editora = value;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Autor: ${this.autor}`);
    console.log(`Editora: ${this.editora}`);
    console.log(colors.fg.magenta, "Tipo: Livro\n", colors.reset);
  }
}
