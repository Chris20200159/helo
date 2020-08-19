import axios from 'axios';

const initialState = {
  username: '',
  id: '',
  img: ''
}

const LOGIN_USER = 'LOGIN_USER';


export function loginUser(user, img){
  return {
    type: LOGIN_USER,
    payload: user, img
  }
}


export default function reducer(state = initialState, action){
  switch(action.type){
    case LOGIN_USER:
      return {...state, user: action.payload, isLoggedIn: true}
    default: 
      return state
  }
}