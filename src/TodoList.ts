import Todo from "./Todo";

export default class TodoList {
  private _todoItems: Todo[];

  constructor(todoItems: Todo[]) {
    this._todoItems = todoItems;
  }
  public get todoItems(): Todo[] {
    return this._todoItems;
  }

  public set todoItems(todoItems: Todo[]) {
    this._todoItems = todoItems;
  }
}
