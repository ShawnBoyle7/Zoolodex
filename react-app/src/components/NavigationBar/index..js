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
    <nav>
        <div className="nav-links-div">
            <NavLink to='/' exact={true} activeClassName='active'>
                Home
            </NavLink>

            <NavLink to='/animals' exact={true} activeClassName='active'>
                Animals
            </NavLink>

            <NavLink to='/regions' exact={true} activeClassName='active'>
                Regions
            </NavLink>

            <NavLink to='/suggestions' exact={true} activeClassName='active'>
                Suggestions
            </NavLink>
        </div>

            <div className="search-div">
            <i className="fas fa-search"></i>
                <input
                    placeholder="Explore"
                />
            </div>


        <div className="navigation-auth">
            <AboutModal/>
            {!authenticated ?
            <>
                <LoginFormModal/>
                <SignUpFormModal/>
                <button onClick={loginDemo}>Demo</button>
            </> 
            :
            <>
                <span className="welcome-message">
                    Welcome, {sessionUser.firstName}
                </span>
                <NavLink to={`/users/${sessionUser.id}`} exact={true} activeClassName='active'>
                    Profile
                </NavLink>
                <LogoutButton/>
                <SuggestionFormModal/>
            </>
            }
        </div>
    </nav>
    );
}

export default NavigationBar;
