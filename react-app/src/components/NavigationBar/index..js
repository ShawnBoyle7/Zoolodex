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
import "./NavigationBar.css"

const NavigationBar = ({ authenticated }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user)

    const loginDemo = async () => {
      dispatch(demo())
      history.push("/")
    }

    return (
      <nav className="navigation">
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
              <NavLink to='/regions' exact={true} activeClassName='active'>
                  Regions
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

          <div className="nav-auth">
            {!authenticated ?
              <>
                <div>
                    <LoginFormModal/>
                </div>

                <div>
                    <SignUpFormModal/>
                </div>

                <div>
                    <button onClick={loginDemo}>Demo</button>
                </div>
              </>
              :
              <>
                  <div>
                      Welcome, {sessionUser.firstName}
                  </div>

                  <div>
                      <NavLink to={`/users/${sessionUser.id}`} exact={true} activeClassName='active'>
                          Profile
                      </NavLink>
                  </div>

                  <div>
                      <SuggestionFormModal/>
                  </div>

                  <div>
                      <LogoutButton/>
                  </div>
              </>
              }
          </div>
      </nav>
    );
}

export default NavigationBar;
