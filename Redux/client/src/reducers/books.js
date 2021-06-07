const bookReducer = (state=[],action)=>{
      switch(action.type){
            case 'add':
                  return [...state,action.book]
            case 'delete':
                  return state.filter(i=>i.id!==action.id)
            case 'deleteAll':
                  return [{id:"1",name:"book",yazar:"author"}]

            default:
                  return state
      }
}

export default bookReducer