import { createContext, useState, useEffect, useMemo } from "react";
export const ThemeContext = createContext();

export function ThemeProvider({children}){
    
    const [theme,setTheme] = useState(()=>{
        let saved = localStorage.getItem("appTheme");
        return saved != null? saved : "light";
    });

    useEffect(()=>{
        localStorage.setItem("appTheme",theme);
    },[theme]);

    function ToggleTheme(){
        setTheme(function(prevTheme){
            return prevTheme === "light"? "dark" : "light";
               

        });
    }

    const value = useMemo(()=>{
        return {theme,ToggleTheme};
    },[theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}