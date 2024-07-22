import { createContext, useState } from 'react';
import AllUsers from '../allUsers/AllUsers'
import './App.css'
import { Theme, ThemeState, defaultThemeState, light } from '../types/types';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from '../User/User';



export const ThemeContext = createContext<ThemeState>(defaultThemeState);

function App() {
  const [theme, setTheme] = useState<Theme>(light);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Router>
          <Routes>
            <Route path='/' element={<AllUsers />}/>
            <Route path='user/:id' element={<User />}/>
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </>
  )
}

export default App
