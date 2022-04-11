import { DispatchProp } from "react-redux";

export const changeColor = ({ color: string = "" }): void => {};

export const getNavigation = async () => {};

export const darkMode = (isDark: boolean) => {
  return {
    type: "DARK",
    data: "test",
  };
};
