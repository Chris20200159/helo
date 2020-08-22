import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/reducer';

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

  login = () => {
    const {email, password} = this.state; 
    axios.post('/auth/login', {email, password}).then(res => {
      this.props.loginUser(res.data);
      this.props.history.push('/front_page')
    }).catch(err => {
      console.log(err);
      alert('Login Failed')
    })
  }
  register = () => {
    const {email, password, firstName, lastName} = this.state;
    axios.post('/auth/register', {email, password, firstName, lastName}).then(res => {
        this.props.loginUser(res.data);
        this.props.history.push('/front_page');
    }).catch(err => {
        console.log(err);
        alert('Registration Failed')
    })
  }

  render(){
    const {userName, password} = this.state;
    return <div className="login">
      <div className="login-container">
        <h1>Helo</h1>
          <div className="btn-container">
          <button onClick={this.login}>Login</button>
          <button onClick={this.register}>Register</button>
          </div>

      </div>
    </div>
  }

}
const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, { loginUser })(Auth);
