import TodoList from "./TodoList";

export default class {
  private _todoList: TodoList;
  constructor(name: string, todoList: TodoList) {
    this._name = name;
    this._todoList = todoList;
  }

  public get todoList(): TodoList {
    return this._todoList;
  }
  public set todoList(value: TodoList) {
    this._todoList = value;
  }
  private _name: string;
  public get name_1(): string {
    return this._name;
  }
  public set name_1(value: string) {
    this._name = value;
  }
}
