const increment = (amount)=>{
  return{
    type:'INCREMENT',
    amount:amount
  }
}

const decrement = (amount)=>{
  return{
    type:'DECREMENT',
    amount:amount
  }
}

const login = ()=>{
  return{
    type:'SIGN_IN'
  }
}

const logout = ()=>{
  return{
    type:'logout'
  }
}


const addBook = (book)=>{
  return{
    type:'add',
    book
  }
}

const deleteBook = (id)=>{
  return{
    type:'delete',
    id
  }
}

const deleteAll = ()=>{
  return{
    type:'deleteAll'
  }
}

export {increment,decrement,login,logout,addBook,deleteBook,deleteAll}