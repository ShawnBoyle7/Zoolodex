import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from "./LoginFormModal"
import SignUpFormModal from './SignUpFormModal';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const authenticated = sessionUser !== null;

  return (
    <nav>
        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </div>
        
        {!authenticated &&
          <div>
            <LoginFormModal/>
            <SignUpFormModal/>
          </div>

        }
        {authenticated &&
          <div>
            <LogoutButton/>
          </div>
        }
    </nav>
  );
}

export default NavBar;
