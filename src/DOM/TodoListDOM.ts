import TodoList from "../app-logic/TodoList";
import DivListDOM from "./DivListDOM";
import TodoDOM from "./TodoDOM";

export default class TodoListDOM extends DivListDOM {
  private _todoCollection: TodoDOM[];

  public get todoCollection() {
    return this._todoCollection;
  }

  public static from(todoList: TodoList): TodoListDOM {
    const mappedList = todoList.todoItems.map((todo) => {
      return new TodoDOM(
        todo.name,
        todo.checked,
        todo.dueDate.toString(),
        todo.priority,
        todo.id
      );
    });
    return new TodoListDOM(todoList.name, mappedList, todoList.id);
  }

  constructor(title: string, todoList: TodoDOM[], id?: string) {
    const todoNodes = todoList.map((todo) => todo);
    super(title, id, ...todoNodes);
    this._todoCollection = todoList;
  }
}
