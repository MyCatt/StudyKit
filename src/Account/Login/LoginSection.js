import React from 'react';
import '../../App.css';
import '../account.css';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
  } from "react-router-dom";

export default class LoginSection extends React.Component {

    render() {

        return (
            <div>
                <div className="account-contain">
                    <div className="account-contain-underlay"></div>
                    <div className="account-structure">
                        <h4>Welcome back</h4>
                        <p>Please login to continue</p>
                        <hr />
                    </div>
                    <form className="account-form">
                        <label htmlFor="account-form--email">Email</label>
                        <input id="account-form--email" type="email" placeholder="Email" />
                        <label htmlFor="account-form--password">Password</label>
                        <input id="account-form--password" type="password" placeholder="Password" />
                    </form>
                </div>
                <div className="account-submission">
                    <button className="submission-btn">Login</button>
                    <Link to="/register">
                        <p className="switch-account-btn">I don't have an account!</p>
                    </Link>
                </div>
            </div>
        );
    }

}