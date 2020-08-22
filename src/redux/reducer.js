import axios from 'axios';

const initialState = {
  username: '',
  id: '',
  img: ''
};

const LOGIN_USER = 'LOGIN_USER';

//# all action builders (functions) must return an object with a type and payload

export function loginUser(user, img){
  const user = axios
  .get("/auth/user")
  .then((res) => res.data)
  .catch((err) => console.log(err));


  return {
    type: LOGIN_USER,
    payload: user, img
  }
}

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
    default: 
    return state;  
  }
}