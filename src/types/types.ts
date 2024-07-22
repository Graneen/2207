export type Theme = {
    backgroundColor: string,
    color: string,
    height: string
};

export const light: Theme = {
    backgroundColor: "white",
    color: "#242424",
    height: '100vh'
}

export const dark: Theme = {
    backgroundColor: "#242424",
    color: "white",
    height: '100vh'
}
  
export type ThemeState = { 
    theme: Theme; 
    setTheme: (theme: Theme) => void;
};

export const defaultThemeState: ThemeState = { 
  theme: light, 
  setTheme: () => {},
};