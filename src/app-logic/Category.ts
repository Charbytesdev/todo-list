import NamedIdentifiable from "./NamedIdentifiable";
import TodoList from "./TodoList";

export default abstract class Category extends NamedIdentifiable {
  private _todoList: TodoList;

  constructor(name: string, todoList: TodoList) {
    super(name);
    this._todoList = todoList;
  }

  public get todoList(): TodoList {
    return this._todoList;
  }

  public set todoList(todoList: TodoList) {
    this._todoList = todoList;
  }
}
