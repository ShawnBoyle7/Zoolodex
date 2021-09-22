import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from './LoginFormModal';
import SignupFormModal from './SignupFormModal';

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
            <SignupFormModal/>
          </div>
        }
        {/* <div>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div> */}
        {/* <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div> */}
        <div>
          {/* <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink> */}
        </div>
        <div>
          <LogoutButton />
        </div>
    </nav>
  );
}

export default NavBar;
