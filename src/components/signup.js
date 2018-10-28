require('normalize.css/normalize.css');
require('styles/signin.css');

import React from 'react';

let githubLogo = require('../images/github-logo.png');


class Signup extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-3 btn-github">
                        <div className='pt-5 pb-4'>
                            <img className="offset-md-5" src={githubLogo}></img>
                        </div>
                        <div className='form-header'>
                            <h1>Sign up to GitHub</h1>
                        </div>
                        <form className="form-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Username</label>
                            <input type="email" className="form-control" id="exampleInputUsername1" aria-describedby="emailHelp" placeholder="Pick a username"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="you@example.com"></input>
                        </div>                        
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">
                                Password
                            </label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="create a password"></input>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-success btn-block">Sign up</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;