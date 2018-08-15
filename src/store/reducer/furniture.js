import * as TYPE from "../action-Type"
export const furniture = (state={
    str:"这是个栗子"
},action)=>{
  switch (action.type){
      case TYPE.TYPE_EXAMPLE:
          state = {...state,str:state.str+1}
          break;
  }
  return state
};