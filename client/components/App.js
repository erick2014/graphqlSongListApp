import React from 'react';
import { Link } from 'react-router'

const App = (props) => {
    return (
        <div className="container">
            <div className="home-page-btns-bar">
                <Link to="/signIn" className="btn sign-up-btn">Sign In</Link>
                <Link to="/signUp" className="btn">Sign Up</Link>
            </div>
            {props.children}
        </div>
    )
}

export default App