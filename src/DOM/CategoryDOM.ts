import Category from "../app-logic/Category";
import ButtonDOM from "./ButtonDOM";
import DOM from "./DOM";
import TodoDOM from "./TodoDOM";
import TodoListDOM from "./TodoListDOM";
export default class CategoryDOM extends DOM {
  private _button: ButtonDOM;
  private _todoList: TodoListDOM;
  private static _currentActive: CategoryDOM;
  public static get currentActive() {
    return CategoryDOM._currentActive;
  }

  public static set currentActive(currentActive: CategoryDOM) {
    CategoryDOM._currentActive = currentActive;
    this.currentActive.activateCurrent();
  }

  public static fromCollection(...categoryList: Category[]): CategoryDOM[] {
    return categoryList.map((category) => CategoryDOM.from(category));
  }

  public static from(element: Category): CategoryDOM {
    return new CategoryDOM(
      element.name,
      new TodoListDOM(
        element.name,
        TodoDOM.fromCollection(...element.todoList.todoItems)
      ),
      element.id
    );
  }

  constructor(name: string, todoList: TodoListDOM, id?: string) {
    const buttonDOM = new ButtonDOM(name);
    buttonDOM.element.textContent = name.split("-")[0];
    buttonDOM.element.classList.add("category-button");
    super("div", name, id, buttonDOM.element, todoList.element);
    this._button = buttonDOM;
    this._todoList = todoList;
    todoList.element.classList.add("category-content");
    this._todoList.element.classList.add("inactive");
    this._button.element.classList.add("inactive");
    this._button.element.addEventListener("click", (e) => {
      this.deactivatePrevious();
      this.activateCurrent();
      this._todoList.todoList.forEach((todo) =>
        todo.element.children[5].addEventListener("click", () => {
          const indexOfTodo = this._todoList.todoList.indexOf(todo);
          const todoElement = this.todoList.todoList[indexOfTodo].element;
          todoElement.parentNode?.removeChild(todoElement);
        })
      );
    });
  }

  public activateCurrent() {
    this._button.element.classList.add("active");
    this._todoList.element.classList.add("active");
    this._button.element.classList.remove("inactive");
    this._todoList.element.classList.remove("inactive");
  }

  public deactivatePrevious() {
    if (CategoryDOM._currentActive) this.deactivate(CategoryDOM._currentActive);
    CategoryDOM._currentActive = this;
  }

  public deactivate(categoryDOM: CategoryDOM) {
    categoryDOM._todoList.element.classList.remove("active");
    categoryDOM.button.element.classList.remove("active");
    categoryDOM._button.element.classList.add("inactive");
    categoryDOM._todoList.element.classList.add("inactive");
  }

  public get button(): ButtonDOM {
    return this._button;
  }

  public get todoList(): TodoListDOM {
    return this._todoList;
  }

  public set todoList(todoList: TodoListDOM) {
    this._todoList = todoList;
  }
}
