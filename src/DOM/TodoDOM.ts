import ContainerDOM from "./ContainerDOM";
import Todo from "../app-logic/Todo";
import { createButton, createCheckBox, createDiv } from "../util/utility";

export default class TodoDOM extends ContainerDOM {
  private _checkBox: HTMLInputElement;

  private _title: HTMLDivElement;

  private _date: HTMLDivElement;

  private _detailsButton: HTMLButtonElement;

  private _editButton: HTMLButtonElement;

  private _deleteButton: HTMLButtonElement;

  public static from(element: Todo): ContainerDOM {
    return new TodoDOM(
      element.name,
      element.checked,
      element.dueDate,
      element.id
    );
  }

  public static fromCollection(...todoCollection: Todo[]): ContainerDOM[] {
    return todoCollection.map((todo) => TodoDOM.from(todo));
  }

  constructor(title: string, checked: boolean, date: string, id?: string) {
    super(title, id);
    this._checkBox = createCheckBox("checkbox");
    this._title = createDiv("title");
    this._date = createDiv("date");
    this._detailsButton = createButton("button");
    this._editButton = createButton("button");
    this._deleteButton = createButton("button");

    this._checkBox.checked = checked;
    this._title.textContent = title;
    this._date.textContent = date;

    this.element.append(
      this._checkBox,
      this._title,
      this._date,
      this._detailsButton,
      this._editButton,
      this._deleteButton
    );
  }

  public isChecked(): boolean {
    return this._checkBox.checked;
  }

  public setChecked(value: boolean) {
    this._checkBox.checked = value;
  }

  public get title(): string | null {
    return this._title.textContent;
  }

  public set title(title: string) {
    this._title.textContent = title;
  }

  public get date(): string | null {
    return this._date.textContent;
  }

  public set date(date: string) {
    this._date.textContent = date;
  }
}
