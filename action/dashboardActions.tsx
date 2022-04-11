import { IDarkMode, PayloadRedux } from "../type";
 
export const TOGGLE_DARK = 'TOGGLE_DARK'


export const changeColor = ({ color: string = "" }): void => {};

export const getNavigation = async () => {};

export const darkMode = (isDark: boolean) : PayloadRedux<IDarkMode> => {  
  return { 
    type: TOGGLE_DARK,  
    data: {
      dark : isDark   
    }
  }
};
