import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { demo } from '../../store/session';
import SignUpFormModal from '../SignUpFormModal';
import LoginFormModal from '../LoginFormModal'
import LogoutButton from '../Authentication/LogoutButton';
import AboutModal from '../AboutModal';
import SuggestionFormModal from '../SuggestionFormModal';
import './NavigationBar.css'
import Search from '../Search';

const NavigationBar = ({ authenticated }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user)

    const loginDemo = async () => {
        dispatch(demo())
        history.push("/")
    }

    document.addEventListener("scroll", () => {
        const nav = document.querySelector("nav")

        if (window.scrollY < 340) {
            nav?.classList.add("navigation-default")
            nav?.classList.remove("navigation-scrolled")
        } else if (window.scrollY > 340) {
            nav?.classList.remove("navigation-default")
            nav?.classList.add("navigation-scrolled")
        }
    });

    return (
        <>
            <nav className="navigation-default">
                <div className="nav-links-div">
                    <NavLink to='/' exact={true} activeClassName='active'>
                        <span className="home-span">Home</span>
                        <div className="logo-image-div">
                            <img src="https://i.imgur.com/PoiGGsV.png" className="logo-image large" alt="logo"/>
                        </div>
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

                <Search/>

                <div className="navigation-auth">
                    {!authenticated ?
                    <>
                        <AboutModal/>
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
                        <AboutModal/>
                        <SuggestionFormModal/>
                        <LogoutButton/>
                    </>
                    }
                </div>
            </nav>
        </>
        );
}

export default NavigationBar;
