import { createContext, useEffect, useState } from "react";

// type Tema = 'dark' | ''

interface AppContextProps {
  theme?: string;
  changeTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const [theme, setTheme] = useState("dark");

  function changeTheme() {
    const novoTema = theme === "" ? "dark" : "";
    setTheme(novoTema);
    localStorage.setItem("theme", novoTema);
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem("theme");
    if (temaSalvo !== null) {
      setTheme(temaSalvo);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
