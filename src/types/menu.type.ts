export interface IMenu {
  id: string;
  message: string;
  subMenu?: IMenu[];
}
