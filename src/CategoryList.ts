import Category from "./Category";

export default abstract class CategoryList {
  private _name: string;
  private _categoryItems: Category[];

  constructor(name: string, categoryItems: Category[]) {
    this._name = name;
    this._categoryItems = categoryItems;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name) {
    this._name = name;
  }

  public get categoryItems(): Category[] {
    return this._categoryItems;
  }

  public set categoryItems(categoryItems: Category[]) {
    this._categoryItems = categoryItems;
  }
}
