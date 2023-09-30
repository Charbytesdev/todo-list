import RandomIdGenerator from "./RandomIdGenerator";

export default abstract class NamedIdentifiable {
  private _name: string;
  private readonly _id: string;

  constructor(name: string) {
    this._name = name;
    this._id = RandomIdGenerator();
  }
  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get id(): string {
    return this._id;
  }
}
