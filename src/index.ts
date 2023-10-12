import MainCategory from "./app-logic/MainCategory";
import Todo from "./app-logic/Todo";
import TodoList from "./app-logic/TodoList";
import "./sass/main.scss";
import { createNavLogo } from "./app-util/utility";
import MainCategoryList from "./app-logic/CategoryList";
import CategoryDOM from "./DOM/CategoryDOM";
import DivDOM from "./DOM/DivDOM";
import CategoryList from "./app-logic/CategoryList";
import CategoryListDOM from "./DOM/CategoryListDOM";
import Project from "./app-logic/Project";
import ButtonDOM from "./DOM/ButtonDOM";
import throwError from "./app-util/ErrorThrower";
import TodoDOM from "./DOM/TodoDOM";

function _initalize() {
  const todo = new Todo(
    false,
    "Play the piano",
    "practice",

    new Date(),
    "low"
  );
  const todo2 = new Todo(
    false,
    "Go for walk",
    "20minute walk",
    new Date(),
    "medium"
  );
  const todo3 = new Todo(false, "Feed my cat", "only 25g", new Date(), "high");
  const appDisplay = new DivDOM("app-display");
  const appContent = new DivDOM("app-content");
  const appSidebar = new DivDOM("sidebar");

  const todoList = new TodoList("main", [todo, todo2, todo3]);

  const homeCategory = new MainCategory(
    "home-category",
    todoList,
    "description"
  );
  const todayCategory = new MainCategory(
    "today-category",
    todoList,
    "description"
  );
  const weekCategory = new MainCategory(
    "week-category",
    todoList,
    "description"
  );
  const projectA = new Project("projectA", todoList);
  const projectB = new Project("projectB", todoList);
  const projectC = new Project("projectC", todoList);
  const projectD = new Project("projectD", todoList);
  const projectE = new Project("projectE", todoList);

  const [projectADOM, projectBDOM, projectCDOM, projectDDOM, projectEDOM] =
    CategoryDOM.fromCollection(
      projectA,
      projectB,
      projectC,
      projectD,
      projectE
    );

  const homeCategoryDOM = CategoryDOM.from(homeCategory);
  const todayCategoryDOM = CategoryDOM.from(todayCategory);
  const weekCategoryDOM = CategoryDOM.from(weekCategory);

  CategoryDOM.currentActive = homeCategoryDOM;

  const addButton = new ButtonDOM("add-button");
  addButton.setTextContent("+");
  appSidebar.append(
    homeCategoryDOM.button.element,
    todayCategoryDOM.button.element,
    weekCategoryDOM.button.element,
    projectADOM.button.element,
    projectBDOM.button.element,
    projectCDOM.button.element,
    projectDDOM.button.element,
    projectEDOM.button.element,
    addButton.element
  );

  const dialogBox =
    (document.getElementById("create-dialog") as HTMLDialogElement) ||
    throwError("Element Id create-dialog doesn't exist");

  const closeId = "cancel-btn";
  const createId = "create-btn";

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

    CategoryDOM.currentActive.appendTodo(
      TodoDOM.from(Todo.from(inputs) as Todo)
    );
  };

  closeButton.onclick = () => {
    dialogBox.close();
  };
  addButton.element.onclick = () => {
    dialogBox.showModal();
  };

  appContent.append(
    homeCategoryDOM.todoList.element,
    todayCategoryDOM.todoList.element,
    weekCategoryDOM.todoList.element,
    projectADOM.todoList.element,
    projectBDOM.todoList.element,
    projectCDOM.todoList.element,
    projectDDOM.todoList.element,
    projectEDOM.todoList.element
  );
  const app = document.getElementById("app-container");

  appDisplay.append(appSidebar.element, appContent.element);
  app?.append(appDisplay.element);
}

_initalize();
