import throwError from "./ErrorThrower";
import RandomIdGenerator from "./RandomIdGenerator";
export type Priority = "low" | "medium" | "high";
const CORRECT_TYPES = ["button", "div", "input"];

export const createElement = (
  type: string,
  className: string,
  id?: string
): HTMLElement => {
  if (!CORRECT_TYPES.includes(type)) {
    throwError(type);
  }
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

export function createNavLogo() {
  const navLogo = document.getElementById("nav-logo");

  if (navLogo == null) {
    return;
  } else {
    navLogo.style.backgroundImage = "url()";
  }
}

export function idNotFound(id: string): any {
  throwError(`Element Id ${id} doesn't exist`);
}
