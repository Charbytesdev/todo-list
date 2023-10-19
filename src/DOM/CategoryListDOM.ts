import CategoryList from "../app-logic/CategoryList";
import throwError from "../app-util/ErrorThrower";
import RandomGenerator from "../app-util/RandomGenerator";
import CategoryDOM from "./CategoryDOM";
import DOM from "./DOM";
export default class CategoryListDOM extends DOM {
  private static _categories: CategoryDOM[];
  private static _currentActive: CategoryDOM;

  public static setFromLogic() {
    return new CategoryListDOM(
      "sidebar",
      RandomGenerator(),
      ...CategoryDOM.fromCollection(CategoryList.categoryItems)
    );
  }

  public static find(id: string) {
    const category = this._categories.find((category) => category.id == id);
    return category || throwError(`category id ${id} not found`);
  }

  public static updateCurrent(currentActive: CategoryDOM) {
    if (CategoryListDOM.currentActive) {
      CategoryDOM.deactivate(CategoryListDOM.currentActive);
    }
    if (CategoryListDOM._categories.indexOf(currentActive))
      CategoryListDOM.currentActive = currentActive;
    CategoryDOM.activate(CategoryListDOM.currentActive);
  }

  public static storeCurrentCategory() {
    localStorage.setItem(
      "currentCategory",
      JSON.stringify(
        this._categories.indexOf(
          this._categories.find(
            (category) => category.id == this._currentActive.id
          ) as CategoryDOM
        )
      )
    );
  }

  public static get currentActive(): CategoryDOM {
    return this._currentActive;
  }

  public static set currentActive(currentActive: CategoryDOM) {
    this._currentActive = currentActive;
  }

  public static get categories(): CategoryDOM[] {
    return CategoryListDOM._categories;
  }
  public getButtonElements(): HTMLElement[] {
    return CategoryListDOM._categories.map(
      (category) => category.button.element
    );
  }

  public set categories(categories: CategoryDOM[]) {
    CategoryListDOM._categories = categories;
  }

  public static from() {
    CategoryListDOM._categories = CategoryDOM.fromCollection(
      CategoryList.categoryItems
    );
  }

  constructor(name: string, id?: string, ...categoryList: CategoryDOM[]) {
    super("div", name, id);
    CategoryListDOM._categories = categoryList;
  }
}
