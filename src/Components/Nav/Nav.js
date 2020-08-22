import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/reducer';
import { withRouter } from 'react-router-dom';


const Nav = (props) => {
  useEffect(()=> {
    console.log(props);
    //#comes from redux
    props.loginUser();
    if (props.user.userName === ""){
      props.history.push("/");
    }
  }, [props.user.userName, props.location.pathname]);
  //# also comes from redux
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

const mapStateToProps = (reduxState) => {
  // # whatever we return here gets put on props
  return reduxState;
};

export default connect(mapStateToProps, { loginUser })(withRouter(Nav));