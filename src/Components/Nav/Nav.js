import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { saveUser, logoutUser } from '../../redux/reducer';
import { withRouter } from 'react-router-dom';
import axios from 'axios';



const Nav = (props) => {
  useEffect(()=> {
    console.log(props);
    //#comes from redux
    // props.saveUser();
    // if (props.user.userName === ""){
    //   props.history.push("/");
    // }
  }, []);
  //# also comes from redux
const logout = () => {
  axios.post('/auth/logout')
  .then(()=>{
    props.logoutUser()
    props.history.push('/')
  })
}

  return (
  <div>
    <ul>
      <button onClick="/dashboard">Home</button>
      <button onClick="/new">New Post</button>
      <button onClick={()=> logout()}>Logout</button>
    </ul>
  </div>
  )
}

const mapStateToProps = (reduxState) => {
  // # whatever we return here gets put on props
  return reduxState;
};

export default connect(mapStateToProps, { saveUser, logoutUser })(withRouter(Nav));