import NamedIdentifiable from "../app-logic/NamedIdentifiable";
import ButtonDOM from "./ButtonDOM";
import DOM from "./DOM";

export default class ButtonListDOM extends DOM {
  private _divList: ButtonDOM[];

  public get divList() {
    return this._divList;
  }

  public static from(
    element: NamedIdentifiable,
    ...children: ButtonDOM[]
  ): ButtonListDOM {
    return new ButtonListDOM(element.name, element.id, ...children);
  }

  public static fromCollection(
    ...containerCollection: NamedIdentifiable[]
  ): ButtonListDOM[] {
    return containerCollection.map((container) =>
      ButtonListDOM.from(container)
    );
  }

  constructor(name: string, id?: string, ...children: ButtonDOM[]) {
    super("div", name, id, ...children.map((child) => child.element));
    this._divList = children;
  }
}
