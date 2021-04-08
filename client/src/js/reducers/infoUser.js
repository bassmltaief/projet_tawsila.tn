import { GET_ELEMENTS } from "../const/actionTypes";

const initialState = {
    email:'',
    password:''
  };

const get_info=(state = initialState, {type,payload })=>{
   switch (type) {
       case GET_ELEMENTS:
           return {...state,email:payload.email2,password:payload.password2}
   
       default:
           return state
   }
};
export default get_info