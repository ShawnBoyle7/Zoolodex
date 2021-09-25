import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../Authentication/LogoutButton';
import LoginFormModal from "../LoginFormModal"
import SignUpFormModal from '../SignUpFormModal';
import SuggestionFormModal from '../SuggestionFormModal';
import { demo } from '../../store/session';
import { useDispatch } from 'react-redux';
import AboutModal from '../AboutModal';

const NavigationBar = ({ authenticated }) => {
    const dispatch = useDispatch();

    const loginDemo = async () => {
      dispatch(demo())
    }

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
              <button onClick={loginDemo}>Demo</button>
              <AboutModal/>
              {/* Render a modal component */}
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
