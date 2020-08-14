import React from 'react';

class Auth extends React.Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      newUser: false
    }
  }

  render(){
    const {userName, password} = this.state;
    return <div className="login">
      <div className="login-container">
        <h1>Helo</h1>
          <button>Login</button>
          <button>Password</button>


      </div>
    </div>
  }

}

export default Auth;
