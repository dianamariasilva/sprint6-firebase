
import createStore from 'redux-zero'

const COMMENT = [
    
  ]

const initialState = {
   successSignIn : false,
   user : {
      id : null,
      email :  null,
      firstname :  null,
      lastname :  null,
      passwordConf :  null           
   },
   stages: [ ],
   tasks: [ ],
   comments : COMMENT
}

const store = createStore (initialState);
export default store