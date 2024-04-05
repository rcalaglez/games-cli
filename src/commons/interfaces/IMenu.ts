export interface IMenuOption {
  name: string;
  value: any;
}

export interface IMenu {
  show(options: IMenuOption[]): Promise<string>;
}
