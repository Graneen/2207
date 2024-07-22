import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ThemeContext } from "../app/App";
import { dark, light } from "../types/types";
import './User.css';

function User() {
    const [user, setUser] = useState({});
    const { theme, setTheme } = useContext(ThemeContext);
    const { id } = useParams<{ id: string }>();
    console.log(theme, setTheme)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
                    console.error('Ошибка при загрузке данных');
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);


    return (
        <div style={theme}>
            <div className="main">
                <h2>{user.name}</h2>
                <p>aka "{user.username}"</p>
                <p>email: {user.email}</p>
                <p>phone: {user.phone}</p>
                <p>website: {user.website}</p>
                <button onClick={() => theme === light ? setTheme(dark) : setTheme(light)}>Switch theme</button>
                <button ><NavLink to={`/`}>Back to Main page</NavLink></button>
            </div>
        </div>
    );
}

export default User;