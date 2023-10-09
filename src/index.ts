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
createNavLogo();

// const listeners = {};

// const notify = (message, options) => {
//   switch (message) {
//     case "place":
//       if (!isGameOver) cells[options.index].textContent = options.marker;
//       break;
//     case "win": // handle displaying win message:
//       isGameOver = true;
//       console.log(`${options.player.name} has won! Oh frabjous day!`);
//       // also, in case there are any win functions we wanna run...
//       listeners.win?.forEach((func) => func(options.player));
//       break;
//     case "draw":
//       isGameOver = true;
//       console.log("Ah well, can't win 'em all.");
//       listeners.draw?.forEach((func) => func());
//       break;
//     case "reset":
//       isGameOver = false;
//       console.log("Here we go agin!");
//       cells.forEach((cell) => (cell.textContent = ""));
//       listeners.reset?.forEach((func) => func());
//   }
// };

// const registerListener = (message, functionToRun) => {
//   listeners[message] = listeners[message]
//     ? [...listeners[message], functionToRun]
//     : [functionToRun];
// };

function _initalize() {
  const todo = new Todo(false, "title", "description", "date", "medium");
  const todo2 = new Todo(false, "title", "description", "date", "medium");
  const todo3 = new Todo(false, "title", "description", "date", "medium");
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
  const projectCategoryList = new CategoryList([
    projectA,
    projectB,
    projectC,
    projectD,
    projectE,
  ]);

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
  const mainCategoryList = new CategoryList([
    homeCategory,
    todayCategory,
    weekCategory,
  ]);
  const mainCategoryListDOM = CategoryListDOM.from(mainCategoryList);
  const projectCategoryListDOM = CategoryListDOM.from(projectCategoryList);
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

  const closeButton =
    document.getElementById("close-button") ||
    throwError("Element Id close-button doesn't exist");
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
