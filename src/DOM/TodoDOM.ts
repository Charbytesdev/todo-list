import DivDOM from "./DivDOM";
import Todo from "../app-logic/Todo";
import { createButton, createCheckBox, createDiv } from "../app-util/utility";
import ButtonDOM from "./ButtonDOM";

export default class TodoDOM extends DivDOM {
  private static counter = 0;

  private _checkBox: HTMLInputElement;

  private _title: DivDOM;

  private _date: DivDOM;

  private _detailsButton: ButtonDOM;

  private _editButton: ButtonDOM;

  private _deleteButton: ButtonDOM;

  public static from(element: Todo): TodoDOM {
    return new TodoDOM(
      element.name,
      element.checked,
      element.dueDate,
      element.id
    );
  }

  public static fromCollection(...todoCollection: Todo[]): TodoDOM[] {
    return todoCollection.map((todo) => TodoDOM.from(todo));
  }

  constructor(title: string, checked: boolean, date: string, id?: string) {
    TodoDOM.counter++;
    super(`todo-${TodoDOM.counter}`, id);
    this.element.classList.add("todo");
    this._checkBox = createCheckBox("checkbox");
    this._title = new DivDOM("title");
    this._date = new DivDOM("date");
    this._detailsButton = new ButtonDOM("details-button");
    this._detailsButton.element.textContent = "details";
    this._editButton = new ButtonDOM("edit-button");
    this._editButton.element.textContent = "edit";

    this._deleteButton = new ButtonDOM("delete-button");
    this._deleteButton.element.textContent = "delete";

    this._checkBox.checked = checked;
    this._title.element.textContent = title;
    this._date.element.textContent = date;

    this.element.append(
      this._checkBox,
      this._title.element,
      this._date.element,
      this._detailsButton.element,
      this._editButton.element,
      this._deleteButton.element
    );
  }

  public isChecked(): boolean {
    return this._checkBox.checked;
  }

  public setChecked(value: boolean) {
    this._checkBox.checked = value;
  }

  public get title(): string | null {
    return this._title.element.textContent;
  }

  public set title(title: string) {
    this._title.element.textContent = title;
  }

  public get date(): string | null {
    return this._date.element.textContent;
  }

  public set date(date: string) {
    this._date.element.textContent = date;
  }
}
