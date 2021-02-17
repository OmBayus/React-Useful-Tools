export const increment = (number) =>{
      return{
            type: 'INCREMENT',
            data: number
      }
}


export const decrement = (number) =>{
      return{
            type: 'DECREMENT',
            data: number
      }
}


export const isloggin = () =>{
      return{
            type: 'SIGN_IN'
      }
}

export const islogout = () =>{
      return{
            type: 'LOGOUT'
      }
}