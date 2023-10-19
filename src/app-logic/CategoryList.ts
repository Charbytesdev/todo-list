import CategoryDOM from "../DOM/CategoryDOM";
import CategoryListDOM from "../DOM/CategoryListDOM";
import throwError from "../app-util/ErrorThrower";
import Category from "./Category";
import NamedIdentifiable from "./NamedIdentifiable";

export default abstract class CategoryList extends NamedIdentifiable {
  private static _categoryItems: Category[];
  private static _current: Category;

  public static get categoryItems(): Category[] {
    return CategoryList._categoryItems;
  }

  public static set categoryItems(categoryItems: Category[]) {
    CategoryList._categoryItems = categoryItems;
  }

  public static get current(): Category {
    CategoryList.updateCurrent();
    return CategoryList._current;
  }

  public static updateCurrent(): void {
    this.current = CategoryList.find(
      CategoryListDOM.currentActive.id
    ) as Category;
  }

  public static set current(current: Category) {
    CategoryList._current = current;
  }

  public static find(id: string): Category | undefined {
    const category = CategoryList._categoryItems.find(
      (category) => category.id == id
    );
    if (category) {
      return category;
    } else {
      throwError("Category id not found");
    }
  }

  public static storeCategoryItems() {
    localStorage.setItem("categoryItems", JSON.stringify(this._categoryItems));
    console.log(this._categoryItems);
  }
}
