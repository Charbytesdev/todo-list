/* eslint-disable @typescript-eslint/no-useless-constructor */
import CategoryList from "./CategoryList";
import MainCategory from "./MainCategory";

export default class MainCategoryList extends CategoryList {
  constructor(name: string, projectItems: MainCategory[]) {
    super(name, projectItems);
  }
}
