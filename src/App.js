import React from 'react';
import './reset.css';
import './App.css';
import Nav from './Components/Nav/Nav';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';


class App extends React.Component {
  render(){
    return <div>
      <Nav/>
      <Auth/>
      <Dashboard/>
      <Form/>
      <Post/>
    </div>
  }
}

export default App;
