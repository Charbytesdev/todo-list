export default class BaseToDo {
  private _checked: boolean;
  private _title: string;
  private _description: string;
  private _dueDate: string;
  private _priority: number;
  constructor(
    checked: boolean,
    title: string,
    description: string,
    dueDate: string,
    priority: number
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
  public set checked(value: boolean) {
    this._checked = value;
  }
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get dueDate(): string {
    return this._dueDate;
  }
  public set dueDate(value: string) {
    this._dueDate = value;
  }
  public get priority(): number {
    return this._priority;
  }
  public set priority(value: number) {
    this._priority = value;
  }
}
