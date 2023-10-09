import NamedIdentifiable from "../app-logic/NamedIdentifiable";
import DOM from "./DOM";

export default class DivDOM extends DOM {
  public static from(
    element: NamedIdentifiable,
    children: HTMLElement[]
  ): DivDOM {
    return new DivDOM(element.name, element.id, ...children);
  }

  constructor(name: string, id?: string, ...children: HTMLElement[]) {
    super("div", name, id, ...children);
    if (children) {
      this.append(...children);
    }
  }
}
