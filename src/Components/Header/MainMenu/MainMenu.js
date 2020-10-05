import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './MainMenu.css';
const MainMenu = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <div className='main-menu'>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/donation'>Donation</Link>
        <Link to='/events'>Events</Link>
        <Link to='/blogs'>Blogs</Link>
      </div>
      <div className='menu-btns'>
        {loggedInUser.email ? (
          <p className='user-name'>{loggedInUser.name}</p>
        ) : (
          <Link to='/login'>
            <button className='btn btn-primary'>Register</button>
          </Link>
        )}
        <Link to='/admin'>
          <button className='btn btn-secondary'>Admin</button>
        </Link>
      </div>
    </div>
  );
};

export default MainMenu;
