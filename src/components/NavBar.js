import { NavLink } from 'react-router-dom';

function NavBar() {

    const linkStyles = {
                width: "100px",
                padding: "10px",
                margin: "10px 10px 10px ",
                background: "limeGreen",
                textDecoration: "none",
                color: "white",
                fontSize: '18px'
            };

   return (
    <div className='nav-bar'>
        <NavLink
        to='/'
        exact
        style={linkStyles}
        activeStyle={{
            background: 'dodgerBlue',
        }}
        >
            Home
        </NavLink>
        <NavLink
        to='/episodes'
        exact
        style={linkStyles}
        activeStyle={{
            background: 'dodgerBlue',
        }}
        >
            Episodes
        </NavLink>
        <NavLink 
        to='/favorites'
        exact
        style={linkStyles}
        activeStyle={{
            background: 'dodgerBlue',
        }}
        >
            Favorites
        </NavLink>
    </div>
   ) 
}

export default NavBar;


