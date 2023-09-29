export const createElement = (
  type: string,
  className: string,
  id: string
): HTMLElement => {
  const el = document.createElement(type);
  el.classList.add(className);
  el.id = id;
  return el;
};
