import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from "./LoginFormModal"
import SignUpFormModal from './SignUpFormModal';
import SuggestionFormModal from './SuggestionFormModal';
import Suggestions from './Suggestions';

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
        <div>
          <NavLink to='/animals' exact={true} activeClassName='active'>
            Animals
          </NavLink>
        </div>
        <div>
          <NavLink to='/suggestions' exact={true} activeClassName='active'>
            <Suggestions/>
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
            <SuggestionFormModal/>
          </div>
        }
    </nav>
  );
}

export default NavBar;
