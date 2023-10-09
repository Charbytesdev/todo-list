import CategoryList from "../app-logic/CategoryList";
import ButtonListDOM from "./ButtonListDOM";
import CategoryDOM from "./CategoryDOM";
import DOM from "./DOM";
export default class CategoryListDOM extends DOM {
  private _categories: CategoryDOM[];

  public get categories(): CategoryDOM[] {
    return this._categories;
  }
  public getButtonElements(): HTMLElement[] {
    return this._categories.map((category) => category.button.element);
  }

  public set categories(categories: CategoryDOM[]) {
    this._categories = categories;
  }

  public static from(categoryList: CategoryList): CategoryListDOM {
    return new CategoryListDOM(
      categoryList.name,
      categoryList.id,
      ...categoryList.categoryItems.map((category) =>
        CategoryDOM.from(category)
      )
    );
  }

  constructor(name: string, id?: string, ...categoryList: CategoryDOM[]) {
    super("div", name, id);
    this._categories = categoryList;
    this.append(...categoryList.map((category) => category.button.element));
  }
}
