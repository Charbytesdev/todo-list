import { createDiv } from "./utility";

export default class ContainerDOM {
  protected _element: HTMLDivElement;

  public get element(): HTMLDivElement {
    return this._element;
  }

  constructor(className: string, id?: string, ...children: HTMLElement[]) {
    this._element = createDiv(className, id);
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
