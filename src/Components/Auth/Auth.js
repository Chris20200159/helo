import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { saveUser } from '../../redux/reducer';

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
      this.props.saveUser(res.data);
      this.props.history.push('/front_page')
    }).catch(err => {
      console.log(err);
      alert('Login Failed')
    })
  }
  register = () => {
    const {email, password, firstName, lastName} = this.state;
    axios.post('/auth/register', {email, password}).then(res => {
        this.props.saveUser(res.data);
        this.props.history.push('/front_page');
    }).catch(err => {
        console.log(err);
        alert('Registration Failed')
    })
  }

  handleEmailInput = (e) => {
    this.setState({email: e.target.value})
  }

  handlePasswordInput = (e) => {
    this.setState({password: e.target.value})
  }

  render(){
    const {email, password} = this.state;
    return <div className="login">
      <div className="login-container">
        <h1>Helo</h1>
        <input 
        name="email"
        placeholder="email"
        value={email}
        onChange={this.handleEmailInput}
        />
        <input
        name="password"
        placeholder="password"
        value={password}
        onChange={this.handlePasswordInput}
        />
          <div className="btn-container">
          <button onClick={this.login}>Login</button>
          <button onClick={this.register}>Register</button>
          </div>

      </div>
    </div>
  }

}
const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {saveUser })(Auth);
