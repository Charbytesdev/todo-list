import NamedIdentifiable from "../app-logic/NamedIdentifiable";
import DOM from "./DOM";
import DivDOM from "./DivDOM";

export default class DivListDOM extends DOM {
  private _divList: DivDOM[];

  public get divList() {
    return this._divList;
  }

  public static from(
    element: NamedIdentifiable,
    ...children: DivDOM[]
  ): DivListDOM {
    return new DivListDOM(element.name, element.id, ...children);
  }

  public static fromCollection(
    ...containerCollection: NamedIdentifiable[]
  ): DivListDOM[] {
    return containerCollection.map((container) => DivListDOM.from(container));
  }

  constructor(name: string, id?: string, ...children: DivDOM[]) {
    super("div", name, id, ...children.map((child) => child.element));
    this._divList = children;
  }
}
