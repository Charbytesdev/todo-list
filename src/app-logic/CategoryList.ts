import Category from "./Category";
import NamedIdentifiable from "./NamedIdentifiable";

export default class CategoryList extends NamedIdentifiable {
  private _categoryItems: Category[];

  constructor(categoryItems: Category[]) {
    super("category-list");
    this._categoryItems = categoryItems;
  }

  public get categoryItems(): Category[] {
    return this._categoryItems;
  }

  public set categoryItems(categoryItems: Category[]) {
    this._categoryItems = categoryItems;
  }
}
