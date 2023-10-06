import NamedIdentifiable from "../app-logic/NamedIdentifiable";
import DOM from "./DOM";

export default class ButtonDOM extends DOM {
  public static from(
    element: NamedIdentifiable,
    ...children: HTMLElement[]
  ): ButtonDOM {
    return new ButtonDOM(element.name, element.id);
  }

  public static fromCollection(
    ...collection: NamedIdentifiable[]
  ): ButtonDOM[] {
    return collection.map((button) => ButtonDOM.from(button));
  }

  constructor(name: string, id?: string) {
    super("button", name, id);
  }
}
