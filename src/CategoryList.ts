import Category from "./Category";
import NamedIdentifiable from "./NamedIdentifiable";

export default abstract class CategoryList extends NamedIdentifiable {
  private _categoryItems: Category[];

  constructor(name: string, categoryItems: Category[]) {
    super(name);
    this._categoryItems = categoryItems;
  }

  public get categoryItems(): Category[] {
    return this._categoryItems;
  }

  public set categoryItems(categoryItems: Category[]) {
    this._categoryItems = categoryItems;
  }
}
