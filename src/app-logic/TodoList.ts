import NamedIdentifiable from "./NamedIdentifiable";
import Todo from "./Todo";

export default class TodoList extends NamedIdentifiable {
  private _todoItems: Todo[];

  constructor(name: string, todoItems: Todo[]) {
    super(name);
    this._todoItems = todoItems;
  }

  public get todoItems(): Todo[] {
    return this._todoItems;
  }

  public set todoItems(todoItems: Todo[]) {
    this._todoItems = todoItems;
  }

  public add(todo: Todo) {
    this._todoItems.push(todo);
  }

  public remove(todo: Todo) {
    this._todoItems.splice(this._todoItems.indexOf(todo), 1);
  }
}