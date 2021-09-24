import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from "../LoginFormModal"
import SignUpFormModal from '../SignUpFormModal';
import SuggestionFormModal from '../SuggestionFormModal';

const NavigationBar = ({ authenticated }) => {

  return (
    <nav className="nav-bar">
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
            Suggestions
          </NavLink>
        </div>

        {!authenticated ?
          <div>
            <LoginFormModal/>
            <SignUpFormModal/>
          </div>
        :
          <div>
            <NavLink to='/profile' exact={true} activeClassName='active'>
              Profile
            </NavLink>
            <SuggestionFormModal/>
            <LogoutButton/>
          </div>
        }
    </nav>
  );
}

export default NavigationBar;
