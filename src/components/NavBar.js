import { NavLink } from 'react-router-dom';

function NavBar() {
    
const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

   return (
    <div>
        <NavLink
        to='/'
        exact
        style={linkStyles}
        activeStyle={{
            background: 'pink',
        }}
        >
            Home
        </NavLink>
        <NavLink
        to='/episodes'
        exact
        style={linkStyles}
        activeStyle={{
            background: 'pink',
        }}
        >
            Episodes
        </NavLink>
        <NavLink 
        to='/favorites'
        exact
        style={linkStyles}
        activeStyle={{
            background: 'pink',
        }}
        >
            Favorites
        </NavLink>
        

    </div>
   ) 
}

export default NavBar;