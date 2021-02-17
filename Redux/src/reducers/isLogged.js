const loggedReducer = (state=false,action)=>{
      switch (action.type) {
            case 'SIGN_IN':
                  return !state
            case 'LOGOUT':
                  return false
            default:
                  return state
                  
      }
}

export default loggedReducer