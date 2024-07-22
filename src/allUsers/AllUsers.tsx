import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../app/App';
import { dark, light } from '../types/types';

function AllUsers() {
    const [users, setUsers] = useState('');
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
              if (response.ok) {
                  const data = await response.json();
                  setUsers(data);
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
            <h1>List of users:</h1>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '3vh'}}>
                {users && users.map((user) => {
                    return (
                        <div key={user.id} style={{
                            backgroundColor: '#00CCFF',
                            width: '300px',
                            borderRadius: '5px',
                            boxShadow: '2px 2px 2px grey'
                            }}>
                            <h2>{user.name}</h2>
                            <p>aka "{user.username}" from {user.address.city}</p>
                            <NavLink to={`user/${user.id}`}>Read more...</NavLink>
                        </div>
                    )
                })}
            </div>
            <button onClick={() => theme === light ? setTheme(dark) : setTheme(light)}>Switch theme</button>
        </div>
    );
}

export default AllUsers;