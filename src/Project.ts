import TodoList from "./TodoList";

export default class {
  private _todoList: TodoList;
  constructor(todoList: TodoList) {
    this._todoList = todoList;
  }
  public get todoList(): TodoList {
    return this._todoList;
  }

  public set todoList(todoList: TodoList) {
    this._todoList = todoList;
  }
}
