import ContainerDOM from "./ContainerDOM";
import { createCheckBox, createDiv, createElement } from "./utility";

export default class TodoDOM extends ContainerDOM {
  private _checkBox: HTMLInputElement;
  private _title: HTMLDivElement;

  constructor(
    checked: boolean,
    className: string,
    id?: string,
    ...children: HTMLElement[]
  ) {
    super(className, id, ...children);
    this._title = createDiv(`${className}-title`);
    this._checkBox = createCheckBox(`${className}-checkbox`);
    this._checkBox.checked = checked;
  }

  public get title(): string | null {
    return this._title.textContent;
  }

  public set title(title: string) {
    this._title.textContent = title;
  }

  public isChecked(): boolean {
    return this._checkBox.checked;
  }

  public setChecked(value: boolean) {
    this._checkBox.checked = value;
  }
}
