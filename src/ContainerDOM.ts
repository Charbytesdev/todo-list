import NamedIdentifiable from "./NamedIdentifiable";
import { createDiv } from "./utility";

export default class ContainerDOM extends NamedIdentifiable {
  protected _element: HTMLDivElement;

  public get element(): HTMLDivElement {
    return this._element;
  }

  constructor(className: string, ...children: HTMLElement[]) {
    super(className);
    this._element = createDiv(this.id, className);
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
