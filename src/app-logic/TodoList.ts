import throwError from "../app-util/ErrorThrower";
import NamedIdentifiable from "./NamedIdentifiable";
import Todo from "./Todo";

export default class TodoList extends NamedIdentifiable {
  private _todoItems: Todo[];

  constructor(name: string, todoItems: Todo[], id?: string) {
    super(name, id);
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

  public find(id: string): Todo | undefined {
    const todo = this._todoItems.find((todo) => todo.id == id);
    if (todo) {
      return todo;
    } else {
      throwError(`todo id ${id} not found`);
    }
  }
}
