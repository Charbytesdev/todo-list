/* eslint-disable @typescript-eslint/no-useless-constructor */
import Category from "./Category";
import TodoList from "./TodoList";

export default class Project extends Category {
  constructor(name: string, todoList: TodoList) {
    super(name, todoList);
  }
}
