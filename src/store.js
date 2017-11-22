import createStore from "redux-zero";

const initialState = {
  stages: [],
  tasks: [] ,
  successLogin: false,
  user : 
    {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null,
    stages : null,

 
  },
  boards: null,
  selectItem: -1,
  selectCard: -1
};

const store = createStore(initialState);
export default store;