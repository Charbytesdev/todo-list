import ContainerDOM from "./DOM/ContainerDOM";
import MainCategory from "./app-logic/MainCategory";
import Todo from "./app-logic/Todo";
import TodoDOM from "./DOM/TodoDOM";
import TodoList from "./app-logic/TodoList";
import "./sass/nav.scss";
import { createNavLogo } from "./app-util/utility";
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

const todo = new Todo(false, "title", "description", "date", "medium");
const todo2 = new Todo(false, "title", "description", "date", "medium");
const todo3 = new Todo(false, "title", "description", "date", "medium");

const todoList = new TodoList([todo]);
const mainCategory = new MainCategory("main", todoList, "description");

const homeCategory = new MainCategory("home-category", todoList, "description");
const todayCategory = new MainCategory(
  "home-category",
  todoList,
  "description"
);
const thisWeekCategory = new MainCategory(
  "home-category",
  todoList,
  "description"
);

const [homeCategoryDOM, todayCategoryDOM, thisWeekCategoryDOM] =
  ContainerDOM.fromCollection(homeCategory, todayCategory, thisWeekCategory);

const [todoDOM, todoDOM2, todoDOM3] = TodoDOM.fromCollection(
  todo,
  todo2,
  todo3
);

const mainCategoryDOM = ContainerDOM.from(
  mainCategory,
  homeCategoryDOM.element,
  todayCategoryDOM.element,
  thisWeekCategoryDOM.element,
  todoDOM.element,
  todoDOM2.element,
  todoDOM3.element
);
