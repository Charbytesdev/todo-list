import NamedIdentifiable from "./NamedIdentifiable";
import Todo from "./Todo";
import TodoList from "./TodoList";

export default abstract class Category extends NamedIdentifiable {
  private _todoList: TodoList;

  constructor(name: string, todoList: TodoList, id?: string) {
    super(name, id);
    this._todoList = todoList;
  }

  public get todoList(): TodoList {
    return this._todoList;
  }

  public set todoList(todoList: TodoList) {
    this._todoList = todoList;
  }

  public appendTodo(todo: Todo) {
    this._todoList.todoItems.push(todo);
  }
}
