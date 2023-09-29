import CategoryList from "./CategoryList";
import Project from "./MainCategory";

export default class ProjectList extends CategoryList {
  constructor(name: string, projectItems: Project[]) {
    super(name, projectItems);
  }
}
