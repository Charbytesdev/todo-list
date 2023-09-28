import Todo from "./todo";

export default class TodoList {
  private _todoItems: Todo[];

  constructor(todoItems: Todo[]) {
    this._todoItems = todoItems;
  }

  public get todoItems(): Todo[] {
    return this._todoItems;
  }
  public set todoItems(value: Todo[]) {
    this._todoItems = value;
  }
}
