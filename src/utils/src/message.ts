import { IMenu } from "../../types/menu.type";

export const makeMenu = (items: IMenu[]) => {
  const menuArr = items.map((menu) => menu.message);

  let menu = menuArr.join("\n");

  return menu;
};
