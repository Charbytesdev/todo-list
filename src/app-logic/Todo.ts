import { Priority } from "../app-util/utility";
import NamedIdentifiable from "./NamedIdentifiable";

export default class Todo extends NamedIdentifiable {
  private _checked: boolean;

  private _description: string;

  private _dueDate: Date;

  private _priority: Priority;

  public static from(
    inputCollection: HTMLCollectionOf<HTMLInputElement>
  ): Todo | void {
    const arr = Array.from(inputCollection);
    let inputs: string[] = [];
    let priority: Priority = "low";
    for (const item of arr.slice(0, 3)) {
      if (item === arr[2]) {
      }
      inputs.push(item.value);
    }
    for (const item of arr.slice(3)) {
      if (item.checked) {
        priority =
          item.nextElementSibling?.textContent?.toLowerCase() as Priority;
      }
    }

    return new Todo(false, inputs[0], inputs[1], new Date(inputs[2]), priority);
  }

  constructor(
    checked: boolean,
    name: string,
    description: string,
    dueDate: Date,
    priority: Priority
  ) {
    super(name);
    this._checked = checked;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
  }

  public get checked(): boolean {
    return this._checked;
  }

  public set checked(checked: boolean) {
    this._checked = checked;
  }

  public get description(): string {
    return this._description;
  }

  public set description(description: string) {
    this._description = description;
  }

  public get dueDate(): Date {
    return this._dueDate;
  }

  public set dueDate(dueDate: Date) {
    this._dueDate = dueDate;
  }

  public get priority(): Priority {
    return this._priority;
  }

  public set priority(priority: Priority) {
    this._priority = priority;
  }
}
