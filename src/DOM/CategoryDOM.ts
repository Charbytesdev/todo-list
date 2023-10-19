import Category from "../app-logic/Category";
import ButtonDOM from "./ButtonDOM";
import CategoryListDOM from "./CategoryListDOM";
import DOM from "./DOM";
import TodoDOM from "./TodoDOM";
import TodoListDOM from "./TodoListDOM";
export default class CategoryDOM extends DOM {
  private _button: ButtonDOM;
  private _todoList: TodoListDOM;

  public static fromCollection(categoryList: Category[]): CategoryDOM[] {
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
    super("div", name, id);
    this._button = buttonDOM;
    this._todoList = todoList;
    todoList.element.classList.add("category-content");
    this._todoList.element.classList.add("inactive");
    this._button.element.classList.add("inactive");
    this._button.element.addEventListener("click", () =>
      this.buttonClickHandler()
    );
  }

  public buttonClickHandler() {
    {
      if (CategoryListDOM.currentActive) {
        CategoryDOM.deactivate(CategoryListDOM.currentActive);
      }
      CategoryListDOM.updateCurrent(this);
      CategoryListDOM.storeCurrentCategory();
    }
  }

  public appendTodo(todoDOM: TodoDOM) {
    this.todoList.append(todoDOM.element);
  }

  public static activate(categoryDOM: CategoryDOM) {
    categoryDOM._button.element.classList.add("active");
    categoryDOM._todoList.element.classList.add("active");
    categoryDOM._button.element.classList.remove("inactive");
    categoryDOM._todoList.element.classList.remove("inactive");
  }

  public static deactivate(categoryDOM: CategoryDOM) {
    categoryDOM._todoList.element.classList.remove("active");
    categoryDOM._button.element.classList.remove("active");
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
