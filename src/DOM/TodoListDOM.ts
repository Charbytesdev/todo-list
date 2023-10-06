import NamedIdentifiable from "../app-logic/NamedIdentifiable";
import TodoList from "../app-logic/TodoList";
import DivListDOM from "./DivContainerDOM";
import TodoDOM from "./TodoDOM";

export default class TodoListDOM extends DivListDOM {
  private _todoList: TodoDOM[];

  public get todoList() {
    return this._todoList;
  }

  public static from(todoList: TodoList): TodoListDOM {
    const mappedList = todoList.todoItems.map((todo) => {
      return new TodoDOM(todo.name, todo.checked, todo.dueDate, todo.id);
    });
    return new TodoListDOM(todoList.name, mappedList, todoList.id);
  }

  constructor(title: string, todoList: TodoDOM[], id?: string) {
    const todoNodes = todoList.map((todo) => todo);
    super(title, id, ...todoNodes);
    this._todoList = todoList;
  }
}
