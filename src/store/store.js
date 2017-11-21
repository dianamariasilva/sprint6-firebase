import createStore from 'redux-zero'

const initialState = {
   stages: [ ],
   tasks: [ ]
};

const store1 = createStore (initialState);
export default store1; 