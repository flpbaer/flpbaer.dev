// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
// import { Theme } from "../types";

// export type PropsTheme = {
//    modeTheme: Theme;
//    setModeTheme: Dispatch<SetStateAction<Theme>>;
// }

// const ThemeModeContext = createContext({} as PropsTheme);

// function ThemeModeProvider({children}: any) {

//   const [modeTheme, setModeTheme] = useState<Theme>();

//   return (
//     <ThemeModeContext.Provider value={{modeTheme, setModeTheme}}>
//       {children}
//     </ThemeModeContext.Provider>
//   )
//   }

//     function useThemeMode(){
//       const context = useContext(ThemeModeContext);

//       if (!context) {
//         throw new Error("useToast must be used within an ThemeModeProvider");
//       }
//       return context;
//     }
//   // eslint-disable-next-line react-refresh/only-export-components
//   export { ThemeModeProvider, useThemeMode}
