require('normalize.css/normalize.css');
require('styles/signin.css');

import React from 'react';

let githubLogo = require('../images/github-logo.png');


class Signin extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-3 btn-github">
                        <div className='pt-5 pb-4'>
                            <img className="offset-md-5" src={githubLogo}></img>
                        </div>
                        <div className='form-header'>
                            <h1>Sign in to GitHub</h1>
                        </div>
                        <form className="form-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Username or email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">
                                Password
                            </label>
                            <a href="www.google.com" className="label-link">Forgot Password?</a>
                            <input type="password" className="form-control" id="exampleInputPassword1"></input>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-success btn-block">Sign in</button>
                        </div>
                        </form>
                        <div className="mt-3 pt-3 pb-3 create-account-callout">
                            New to Github?
                            <a href="www.google.com">   Create an account.</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin;