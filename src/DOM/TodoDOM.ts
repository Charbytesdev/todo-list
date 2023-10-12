import DivDOM from "./DivDOM";
import Todo from "../app-logic/Todo";
import { format } from "date-fns";
import { Priority, createCheckBox, idNotFound } from "../app-util/utility";
import ButtonDOM from "./ButtonDOM";
import throwError from "../app-util/ErrorThrower";

export default class TodoDOM extends DivDOM {
  private static counter = 0;

  private _checkBox: HTMLInputElement;

  private _title: DivDOM;

  private _date: DivDOM;

  private _priority: Priority;

  private _description: string;

  private _detailsButton: ButtonDOM;

  private _editButton: ButtonDOM;

  private _deleteButton: ButtonDOM;

  public static from(element: Todo): TodoDOM {
    console.log(element.dueDate);
    return new TodoDOM(
      element.name,
      element.checked,
      format(element.dueDate, "yyyy-MM-dd HH:mm"),
      element.priority,
      element.description,
      element.id
    );
  }

  public static fromCollection(...todoCollection: Todo[]): TodoDOM[] {
    return todoCollection.map((todo) => TodoDOM.from(todo));
  }

  constructor(
    title: string,
    checked: boolean,
    date: string,
    priority: Priority,
    description: string,
    id?: string
  ) {
    TodoDOM.counter++;
    super(`todo-${TodoDOM.counter}`, id);
    this.element.classList.add("todo");
    this._checkBox = createCheckBox("checkbox");
    this._title = new DivDOM("title");
    this._date = new DivDOM("date");

    this._detailsButton = new ButtonDOM("details-button");
    this._detailsButton.element.textContent = "details";
    this._editButton = new ButtonDOM("edit-button");
    this._editButton.element.textContent = "edit";
    this._deleteButton = new ButtonDOM("delete-button");
    this._deleteButton.element.textContent = "delete";
    this._checkBox.checked = checked;
    this._title.element.textContent = title;
    this._date.element.textContent = date;
    this._description = description;
    this._priority = priority;
    this.stylePriority(priority);
    this._deleteButton.element.addEventListener("click", () =>
      this.deleteHandler()
    );
    this._detailsButton.element.addEventListener("click", () =>
      this.detailsHandler()
    );
    this._editButton.element.addEventListener("click", () =>
      this.editHandler()
    );
    this.element.append(
      this._checkBox,
      this._title.element,
      this._date.element,
      this._detailsButton.element,
      this._editButton.element,
      this._deleteButton.element
    );
  }

  private editHandler() {
    const dialogId = "edit-dialog";
    const titleId = "edit-title";
    const descriptionId = "edit-description";
    const dateId = "edit-date";
    const priorityId = "edit-priority";
    const okayId = "edit-okay";
    const cancelId = "edit-cancel";

    const editDialog =
      (document.getElementById(dialogId) as HTMLDialogElement) ||
      idNotFound(dialogId);
    editDialog.showModal();
    document.getElementById;

    const title = document.getElementById(titleId) || idNotFound(titleId);
    const description =
      document.getElementById(descriptionId) || idNotFound(descriptionId);
    const date = document.getElementById(dateId) || idNotFound(dateId);
    const priorityList =
      Array.from(
        document.getElementsByClassName(
          priorityId
        ) as unknown as HTMLInputElement[]
      ) || idNotFound(priorityId);
    priorityList.forEach((priority) => (priority.checked = false));
    switch (this._priority) {
      case "low":
        priorityList[0].checked = true;
        break;
      case "medium":
        priorityList[1].checked = true;

        break;
      case "high":
        priorityList[2].checked = true;

        break;
    }

    title.value = this.title;
    date.value = this.date;
    description.value = this.description;

    const okayButton = document.getElementById(okayId) || idNotFound(okayId);
    okayButton.onclick = () => {
      if (!(editDialog.children[0] as HTMLFormElement).checkValidity()) return;
      this.title = title.value;
      this.date = `${date.value}`.replace("T", " ");
      this.description = description.value;

      const checkedPriority = priorityList.find((priority) => priority.checked);
      this.priority =
        checkedPriority?.nextElementSibling?.textContent?.toLowerCase() as Priority;
      this.stylePriority(this.priority);
      editDialog.close();
    };

    const cancelButton =
      document.getElementById(cancelId) || idNotFound(cancelId);
    cancelButton.onclick = () => {
      editDialog.close();
    };
  }

  private detailsHandler() {
    const detailsDialog =
      (document.getElementById("details-dialog") as HTMLDialogElement) ||
      throwError("Element Id create-dialog doesn't exist");
    detailsDialog.showModal();

    const okayId = "okay-btn";
    const titleId = "details-title";
    const descriptionId = "details-description";
    const dateId = "details-date";
    const okayButton = document.getElementById(okayId) || idNotFound(okayId);

    okayButton.onclick = () => {
      detailsDialog.close();
    };
    const title = document.getElementById(titleId) || idNotFound(titleId);
    const description =
      document.getElementById(descriptionId) || idNotFound(descriptionId);
    const date = document.getElementById(dateId) || idNotFound(dateId);

    title.textContent = this.title;
    date.textContent = this.date;
    description.textContent = this.description;
  }

  private deleteHandler() {
    this.element.parentNode?.removeChild(this.element);
  }

  public stylePriority(priority: Priority) {
    console.log(priority);
    if (priority === "low") this.element.style.backgroundColor = `#66da66bf`;
    if (priority === "medium") this.element.style.backgroundColor = `#dab566bf`;
    if (priority === "high") this.element.style.backgroundColor = `#da6666bf`;
  }

  public isChecked(): boolean {
    return this._checkBox.checked;
  }

  public setChecked(value: boolean) {
    this._checkBox.checked = value;
  }

  public get title(): string | null {
    return this._title.element.textContent;
  }

  public set title(title: string) {
    this._title.element.textContent = title;
  }

  public get date(): string | null {
    return this._date.element.textContent;
  }

  public set date(date: string) {
    this._date.element.textContent = date;
  }

  public get priority(): Priority | null {
    return this._priority;
  }

  public set priority(priority: Priority) {
    this._priority = priority;
  }

  public get description(): string | null {
    return this._description;
  }

  public set description(description: string) {
    this._description = description;
  }
}
