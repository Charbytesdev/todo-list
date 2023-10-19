import MainCategory from "./app-logic/MainCategory";
import Todo from "./app-logic/Todo";
import TodoList from "./app-logic/TodoList";
import "./sass/main.scss";
import CategoryDOM from "./DOM/CategoryDOM";
import DivDOM from "./DOM/DivDOM";
import Project from "./app-logic/Project";
import ButtonDOM from "./DOM/ButtonDOM";
import throwError from "./app-util/ErrorThrower";
import TodoDOM from "./DOM/TodoDOM";
import CategoryList from "./app-logic/CategoryList";
import Category from "./app-logic/Category";
import { Priority } from "./app-util/utility";
import CategoryListDOM from "./DOM/CategoryListDOM";

type CategoryStringified = {
  _id: string;
  _name: string;
  _todoList: string;
  _description: string;
};

type CategoryDOMStringified = {
  _id: string;
  _name: string;
  _todoList: string;
  _description: string;
};

type TodoListStringified = {
  _id: string;
  _name: string;
  _todoItems: string;
};

type TodoStringified = {
  _id: string;
  _name: string;
  _checked: boolean;
  _description: string;
  _dueDate: string;
  _priority: Priority;
};

function convertStringifiedCategory(categoryString: CategoryStringified) {
  const todoListStringified =
    categoryString._todoList as unknown as TodoListStringified;
  const todoStringifiedList =
    todoListStringified._todoItems as unknown as TodoStringified[];
  const todoList = todoStringifiedList.map(
    (todo) =>
      new Todo(
        todo._checked,
        todo._name,
        todo._description,
        new Date(todo._dueDate),
        todo._priority,
        todo._id
      )
  );
  return new MainCategory(
    categoryString._name,
    new TodoList(todoListStringified._name, todoList, todoListStringified._id),
    categoryString._description,
    categoryString._id
  );
}

function getCurrentCategoryStorageId() {
  return localStorage.getItem("currentCategory");
}

function getCategoriesStorage() {
  const jsonCategoryItems = localStorage.getItem("categoryItems");

  if (jsonCategoryItems) {
    const categoryStringList = JSON.parse(
      jsonCategoryItems
    ) as CategoryStringified[];

    const storedCategories: Category[] = categoryStringList.map(
      (categoryString) => convertStringifiedCategory(categoryString)
    );
    return storedCategories;
  } else {
    return undefined;
  }
}

function _initalize() {
  const todo = new Todo(
    false,
    "Play the piano",
    "practice",

    new Date(),
    "low"
  );
  const todo2 = new Todo(
    true,
    "Go for walk",
    "20minute walk",
    new Date(),
    "medium"
  );
  const todo3 = new Todo(false, "Feed my cat", "only 25g", new Date(), "high");
  const todo4 = new Todo(false, "Take shower", "cold water", new Date(), "low");
  const todo5 = new Todo(
    true,
    "Make breakfast",
    "coffee and beans",
    new Date(),
    "high"
  );
  const todo6 = new Todo(false, "Play tennis", "20", new Date(), "high");
  const todo7 = new Todo(
    false,
    "Respond to emails",
    "only urgent ones",

    new Date(),
    "medium"
  );
  const todo8 = new Todo(false, "Read article", "news", new Date(), "medium");
  const todo9 = new Todo(false, "Exercise", "Gym leg day", new Date(), "high");
  const todo10 = new Todo(
    false,
    "Learn spanish",
    "practice",

    new Date(),
    "medium"
  );
  const todo11 = new Todo(
    true,
    "Water the flowers",
    "0.5L",
    new Date(),
    "high"
  );
  const todo12 = new Todo(
    true,
    "Finish work",
    "write papers",
    new Date(),
    "low"
  );
  const todo13 = new Todo(
    true,
    "Play violin",
    "practice",

    new Date(),
    "low"
  );
  const todo14 = new Todo(
    false,
    "Watch cartoons",
    "me time",
    new Date(),
    "high"
  );
  const todo15 = new Todo(
    false,
    "Play with cat",
    "for 1 hour",
    new Date(),
    "high"
  );
  const todo16 = new Todo(
    false,
    "Do the dishes",
    "have fun!",

    new Date(),
    "medium"
  );
  const todo17 = new Todo(
    false,
    "Go to doctor",
    "check eyes",
    new Date(),
    "high"
  );
  const todo18 = new Todo(
    false,
    "Read book",
    "sherlock holmes",
    new Date(),
    "low"
  );
  const appDisplay = new DivDOM("app-display");
  const appContent = new DivDOM("app-content");
  const appSidebar = new DivDOM("sidebar");

  const todoList = new TodoList("main", [todo, todo2, todo3]);
  const todoList2 = new TodoList("main", [todo4, todo5, todo6]);
  const todoList3 = new TodoList("main", [todo7, todo8, todo9]);
  const todoList4 = new TodoList("main", [todo10, todo11, todo12]);
  const todoList5 = new TodoList("main", [todo13, todo14, todo15]);
  const todoList6 = new TodoList("main", [todo16, todo17, todo18]);

  const homeCategory = new MainCategory(
    "Home-category",
    todoList,
    "description"
  );
  const todayCategory = new MainCategory(
    "Today-category",
    todoList2,
    "description"
  );
  const weekCategory = new MainCategory(
    "Week-category",
    todoList3,
    "description"
  );
  const projectA = new Project("projectA", todoList4);
  const projectB = new Project("projectB", todoList5);
  const projectC = new Project("projectC", todoList6);

  const categoriesFromStorage = getCategoriesStorage();
  CategoryList.categoryItems = categoriesFromStorage ?? [
    homeCategory,
    todayCategory,
    weekCategory,
    projectA,
    projectB,
    projectC,
  ];
  const categoryDOM = CategoryDOM.fromCollection(CategoryList.categoryItems);
  CategoryListDOM.setFromLogic();
  const currentStorageId = getCurrentCategoryStorageId() as unknown as number;
  if (currentStorageId) {
    CategoryListDOM.updateCurrent(categoryDOM[currentStorageId]);
  } else {
    CategoryListDOM.updateCurrent(categoryDOM[0]);
  }

  const addButton = new ButtonDOM("add-button");
  addButton.setTextContent("+");
  appSidebar.append(
    ...categoryDOM.map((category) => category.button.element),
    addButton.element
  );

  const dialogBox =
    (document.getElementById("create-dialog") as HTMLDialogElement) ||
    throwError("Element Id create-dialog doesn't exist");

  const closeId = "cancel-btn";
  const createId = "create-todo-btn";

  const closeButton =
    document.getElementById(closeId) ||
    throwError(`Element Id ${closeId} doesn't exist`);

  const createButton =
    document.getElementById(createId) ||
    throwError(`Element Id ${createId} doesn't exist`);

  createButton.onclick = (e: Event) => {
    if (!(dialogBox.children[0] as HTMLFormElement).checkValidity()) return;
    const inputs = document.getElementsByClassName(
      "form-input"
    ) as HTMLCollectionOf<HTMLInputElement>;
    const createdTodo = Todo.from(inputs) as Todo;
    CategoryList.current.appendTodo(createdTodo);
    CategoryListDOM.currentActive.appendTodo(TodoDOM.from(createdTodo));
    dialogBox.close();
    CategoryList.storeCategoryItems();
  };

  closeButton.onclick = () => {
    dialogBox.close();
  };
  addButton.element.onclick = () => {
    dialogBox.showModal();
  };

  appContent.append(
    ...categoryDOM.map((category) => category.todoList.element)
  );
  const app = document.getElementById("app-container");

  appDisplay.append(appSidebar.element, appContent.element);
  app?.append(appDisplay.element);
}

_initalize();
