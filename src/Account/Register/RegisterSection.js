import React from 'react';
import '../../App.css';
import '../account.css';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
  } from "react-router-dom";

export default class RegisterSection extends React.Component {
    render() {

        return (
            <div>
                <div className="account-contain">
                    <div className="account-contain-underlay"></div>
                    <div className="account-structure">
                        <h4>Welcome back</h4>
                        <p>Please register to continue</p>
                        <hr />
                    </div>
                    <form className="account-form">
                        <label htmlFor="account-form--fname">First name</label>
                        <input id="account-form--fname" type="text" placeholder="First name" />
                        <label htmlFor="account-form--lname">last name</label>
                        <input id="account-form--lname" type="text" placeholder="Last name" />
                        <label htmlFor="account-form--email">Email</label>
                        <input id="account-form--email" type="email" placeholder="Email" />
                        <label htmlFor="account-form--password">Password</label>
                        <input id="account-form--password" type="password" placeholder="Password" />
                        <label htmlFor="account-htmlFformorm--cpassword">Confirm Password</label>
                        <input id="account-form--cpassword" type="password" placeholder="Confirm password" />
                    </form>
                </div>
                <div className="account-submission">
                    <Link to="/dashboard">
                        <button className="submission-btn">Register</button>
                    </Link>  
                    <Link to="/login">
                        <p className="switch-account-btn">I have an account!</p>
                    </Link>
                </div>
            </div>
        );
    }

}