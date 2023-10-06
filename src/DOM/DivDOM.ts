import DOM from "./DOM";

export default class DivDOM extends DOM {
  constructor(name: string, id?: string, ...children: HTMLElement[]) {
    super("div", name, id, ...children);
    if (children) {
      this.append(...children);
    }
  }
}
