import axios from 'axios';

const initialState = {
  user: { email: "", userId: 0, img: ''},
};

const LOGIN_USER = 'LOGIN_USER';
const SAVE_USER = 'SAVE_USER';
const LOGOUT_USER = 'LOGOUT_USER';

//# all action builders (functions) must return an object with a type and payload

export function saveUser(user){
  return{
    type: SAVE_USER,
    payload: user
  }
}

export function logoutUser(){
  return {
    type: LOGOUT_USER
  }
}

// export function loginUser(user, img){
//   const user = axios
//   .get("/auth/login")
//   .then((res) => res.data)
//   .catch((err) => console.log(err));

  

  // return {
  //   type: LOGIN_USER,
  //   payload: user, img
//   }
// }

export default function reducer(state = initialState, action){
  const { type, payload } = action;
  switch(type){
    case LOGIN_USER + "_REJECTED":
      return state;
    case LOGIN_USER + "_FULFILLED":
      if (payload) {
        return { ...state, user: payload};
      } else return state;
    case LOGIN_USER + "_PENDING":
      return state;
    case SAVE_USER:
      return {...state, user: payload}; 
    case LOGOUT_USER:
      return {...initialState}   
    default: 
    return state;  
  }
}