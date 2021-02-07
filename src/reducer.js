export const initialState = {
      term:null
}

export const actionType = {
      type:"SEARCH"
}

const reducer = (state,action)=>{
      switch(action.type){
            case "SEARCH":
                  return {
                        ...state,
                        term:action.term
                  }
            default:
                  return state
      }
}

export default reducer;