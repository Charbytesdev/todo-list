import RandomIdGenerator from "./RandomIdGenerator";

export const createElement = (
  type: string,
  className: string,
  id?: string
): HTMLElement => {
  const el = document.createElement(type);

  el.id = id ?? RandomIdGenerator();
  el.classList.add(className);
  return el;
};

export const createDiv = (className: string, id?: string): HTMLDivElement => {
  const div = createElement("div", className, id) as HTMLDivElement;
  return div;
};

export const createCheckBox = (
  className: string,
  id?: string
): HTMLInputElement => {
  const checkBox = createElement("input", className, id) as HTMLInputElement;
  checkBox.setAttribute("type", "checkbox");
  return checkBox;
};

export const createButton = (
  className: string,
  id?: string
): HTMLButtonElement => {
  const button = createElement("button", className, id) as HTMLButtonElement;
  return button;
};
