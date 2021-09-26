import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../Authentication/LogoutButton';
import LoginFormModal from "../LoginFormModal"
import SignUpFormModal from '../SignUpFormModal';
import SuggestionFormModal from '../SuggestionFormModal';
import { demo } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import AboutModal from '../AboutModal';
import { useHistory } from 'react-router-dom';

const NavigationBar = ({ authenticated }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user)

    const loginDemo = async () => {
      dispatch(demo())
      history.push("/")
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
          <div>
            <AboutModal/>
          </div>

          {!authenticated ?
            <div>
              <LoginFormModal/>
              <SignUpFormModal/>
              <button onClick={loginDemo}>Demo</button>
            </div>
          :
            <div>
              Welcome, {sessionUser.firstName}
              <NavLink to={`/users/${sessionUser.id}`} exact={true} activeClassName='active'>
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
