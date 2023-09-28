type Priority = "low" | "medium" | "high";

export default class Todo {
  private _checked: boolean;
  private _title: string;
  private _description: string;
  private _dueDate: string;
  private _priority: Priority;

  constructor(
    checked: boolean,
    title: string,
    description: string,
    dueDate: string,
    priority: Priority
  ) {
    this._checked = checked;
    this._title = title;
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

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get description(): string {
    return this._description;
  }

  public set description(description: string) {
    this._description = description;
  }

  public get dueDate(): string {
    return this._dueDate;
  }

  public set dueDate(dueDate: string) {
    this._dueDate = dueDate;
  }

  public get priority(): Priority {
    return this._priority;
  }

  public set priority(priority: Priority) {
    this._priority = priority;
  }
}
