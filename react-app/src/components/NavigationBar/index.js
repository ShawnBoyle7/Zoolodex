import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { demo } from '../../store/session';
import SearchDropdown from '../SearchDropdown';
import SignUpFormModal from '../SignUpFormModal';
import LoginFormModal from '../LoginFormModal'
import LogoutButton from '../Authentication/LogoutButton';
import AboutModal from '../AboutModal';
import SuggestionFormModal from '../SuggestionFormModal';
import './NavigationBar.css'

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

    // Search

    const [searchQuery, setSearchQuery] = useState("");
    const [renderSearchDropdown, setRenderSearchDropdown] = useState(false);

    // Cannot click search without query
    useEffect(() => {
        if (!searchQuery.length) {
            document.querySelector(".fa-search").classList.remove("clickable")
            return setRenderSearchDropdown(false)
        }

        setRenderSearchDropdown(true)
        document.querySelector(".fa-search").classList.add("clickable")
    }, [searchQuery]);

    // Re-render dropdown on click with query
    const clickRenderDropdown = () => {
        if (searchQuery.length) {
            setRenderSearchDropdown(true)
        }
    };

    // Redirect to search page routed by query
    const handleSearch = (e) => {
        e.preventDefault()

        if (!searchQuery.length) return

        setRenderSearchDropdown(false)

        const query = searchQuery
        setSearchQuery("")

        history.push(`/search?q=${query}`)
    }

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

                <div className="search-div">
                    <form className="search-form" onSubmit={handleSearch}>
                        <i className="fas fa-search" onClick={handleSearch}></i>
                        <input 
                        placeholder='Explore'
                        onClick={clickRenderDropdown}
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        />

                        {renderSearchDropdown &&
                            <SearchDropdown searchQuery={searchQuery} setSearchQuery={setSearchQuery} setRenderSearchDropdown={setRenderSearchDropdown}/>
                        }
                    </form>
                </div>

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
