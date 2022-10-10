import './Login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = function () {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();

    let userData = [
        {
            userEmail: 'test1@naver.com',
            userPassword: 'qwe123!',
            userName: '유저1'
        },
        {
            userEmail: 'test2@naver.com',
            userPassword: 'qwe123@',
            userName: '유저2'
        },
        {
            userEmail: 'test3@naver.com',
            userPassword: 'qwe123#',
            userName: '유저3'
        },
    ];

    function checkLoginSuccess() {
        for (let userIndex = 0; userIndex < userData.length; userIndex++) {
            if (email == userData[userIndex].userEmail && password == userData[userIndex].userPassword){
                navigate("/workSpace")
                return;
            }
        }
        alert("올바른 정보를 입력해주세요")
    }

    return(
        <div className="Auth-form-container">
            <form className="Auth-form">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="form-group mt-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    value={ email }
                    onChange={e => setEmail(e.target.value)}
                />
                </div>
                <div className="form-group mt-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    value={ password }
                    onChange={e => setPassword(e.target.value)}
                />
                </div>
                <div className="d-grid gap-2 mt-3">
            
                <button type="submit" className="btn btn-primary" onClick={ checkLoginSuccess }>
                    Submit
                </button>
            
                </div>
                <p className="forgot-password text-right mt-2">
                Forgot <a href="#">password?</a>
                </p>
            </div>
            </form>
        </div>
    );
}

export default Login;