import Category from "./Category";
import TodoList from "./TodoList";

export default class MainCategory extends Category {
  private _description: string;

  constructor(
    name: string,
    todoList: TodoList,
    description: string,
    id?: string
  ) {
    super(name, todoList, id);
    this._description = description;
  }

  public get description(): string {
    return this._description;
  }

  public set description(description: string) {
    this._description = description;
  }
}
