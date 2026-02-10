import { colors } from "../util/Colors_temp";

export abstract class Produto {
  constructor(
    private _id: number,
    private _titulo: string,
    private _preco: number
  ) {}

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get titulo(): string {
    return this._titulo;
  }
  public set titulo(value: string) {
    this._titulo = value;
  }

  public get preco(): number {
    return this._preco;
  }
  public set preco(value: number) {
    this._preco = value;
  }

  public visualizar(): void {
    console.log(colors.fg.magenta, "\n==============================", colors.reset);
    console.log("Dados do Produto");
    console.log(`ID: ${this.id}`);
    console.log(`Título: ${this.titulo}`);
    console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    console.log(colors.fg.magenta, "==============================\n", colors.reset);
  }
}
