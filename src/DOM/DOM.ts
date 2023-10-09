import NamedIdentifiable from "../app-logic/NamedIdentifiable";
import { createElement } from "../app-util/utility";

export default abstract class DOM extends NamedIdentifiable {
  protected _element: HTMLElement;

  public get element(): HTMLElement {
    return this._element;
  }

  constructor(
    type: string,
    className: string,
    id?: string,
    ...children: HTMLElement[]
  ) {
    super(className, id);
    this._element = createElement(type, className);
    this._element.append(...children);
  }

  public append(...nodes: HTMLElement[]): void {
    this._element.append(...nodes);
  }

  public replaceChild(oldNode: HTMLElement, newNode: HTMLElement): void {
    this._element.replaceChild(oldNode, newNode);
  }

  public setTextContent = (content: string): void => {
    this.element.textContent = content;
  };
}
