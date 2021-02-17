const counterReducer = (state=0,action) =>{

      switch (action.type) {
            case 'INCREMENT':
                  return state + (action.data || 1)
            case 'DECREMENT':
                  return state - (action.data || 1)
            default:
                  return state
      }

}


export default counterReducer