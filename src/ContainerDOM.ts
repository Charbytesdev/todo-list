import NamedIdentifiable from "./NamedIdentifiable";
import { createDiv } from "./utility";

export default class ContainerDOM extends NamedIdentifiable {
  protected _element: HTMLDivElement;

  public get element(): HTMLDivElement {
    return this._element;
  }

  public static from(
    element: NamedIdentifiable,
    ...children: HTMLElement[]
  ): ContainerDOM {
    return new ContainerDOM(element.name, element.id, ...children);
  }

  public static fromCollection(
    ...containerCollection: NamedIdentifiable[]
  ): ContainerDOM[] {
    return containerCollection.map((container) => ContainerDOM.from(container));
  }

  constructor(name: string, id?: string, ...children: HTMLElement[]) {
    super(name, id);
    this._element = createDiv(name, id);
    if (children) {
      this.append(...children);
    }
  }

  public append = (...nodes: HTMLElement[]): void => {
    this._element.append(...nodes);
  };

  public replaceChild = (oldNode: HTMLElement, newNode: HTMLElement): void => {
    this._element.replaceChild(oldNode, newNode);
  };
}
