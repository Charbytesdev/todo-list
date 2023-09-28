import TodoList from "./TodoList";

export default abstract class Category {
  private _name: string;
  private _todoList: TodoList;

  constructor(todoList: TodoList, name: string) {
    this._todoList = todoList;
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get todoList(): TodoList {
    return this._todoList;
  }

  public set todoList(todoList: TodoList) {
    this._todoList = todoList;
  }
}
