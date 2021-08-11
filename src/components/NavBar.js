import { NavLink } from 'react-router-dom';

function NavBar() {
    
const linkStyles = {
    width: "100px",
    padding: "10px",
    margin: "10px 10px 10px ",
    background: "magenta",
    textDecoration: "none",
    color: "white",
    fontSize: '18px'
   
    
    
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