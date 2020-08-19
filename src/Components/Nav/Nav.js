import React from 'react';
import { connect } from 'react-redux';


const Nav = (props) => {
  return <Nav>
  <div>
    <ul>
      <button onClick="/dashboard">Home</button>
      <button onClick="/new">New Post</button>
      <button onClick="/">Logout</button>
    </ul>
  </div>
  </Nav>
}

const mapStateToProps = state => {
  return {
    username: state.username,
    img: state.img
  }
};

export default connect(mapStateToProps)(Nav);