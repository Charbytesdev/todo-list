import TodoList from "./TodoList";

export default class Category {
  private _todoList: TodoList;
  private _name: string;

  constructor(todoList: TodoList, name: string) {
    this._todoList = todoList;
    this._name = name;
  }

  public get todoList(): TodoList {
    return this._todoList;
  }

  public set todoList(todoList: TodoList) {
    this._todoList = todoList;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }
}
