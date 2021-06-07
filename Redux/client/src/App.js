import React, { useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import {increment,decrement, login, logout,addBook,deleteBook,deleteAll} from "./actions"


const App = ()=>{

      
      const counter = useSelector(state=> state.counterReducer)
      const isLogged = useSelector(state=> state.loggedReducer)
      const books = useSelector(state => state.bookReducer)
      const dispatch = useDispatch()

      const [data,setData] = useState({name:"",yazar:"",id:""})

      const onChange = (e)=>{
            setData(prevValue=>{
                  if(e.target.name === "name"){
                        return {...prevValue,name:e.target.value}
                  }
                  else if(e.target.name === "yazar"){
                        return {...prevValue,yazar:e.target.value}
                  }
                  else if(e.target.name === "id"){
                        return {...prevValue,id:e.target.value}
                  }
            })
      }

      const ekle = ()=>{
            const book = {
                  ...data,
                  id:Math.floor(Math.random()*Math.pow(10,15)).toString()
            }
            console.log(book)
            dispatch(addBook(book))
      }

      const sil = ()=>{
            dispatch(deleteBook(data.id))
      }

      const herseyisil=()=>{
            dispatch(deleteAll())
      }

      return(
            <div>
                  <h1>Counter {counter}</h1>
                  <button onClick={()=>dispatch(increment(5))}>+</button>
                  <button onClick={()=>dispatch(decrement(4))}>-</button>
                  
                  <h1>{isLogged? <>Sa</>:<>Giriş Yapmalısın</>}</h1>
                  <button onClick={()=>dispatch(login())}>Giriş Yap</button>
                  <button onClick={()=>dispatch(logout())}>Çıkış Yap</button>

                  <h1>Kitap Ekle</h1>
                  <input type="text" name="name" value={data.name} onChange={onChange}/><br/>
                  <input type="text" name="yazar" value={data.yazar} onChange={onChange}/><br/>
                  <button onClick={ekle}>EKLE</button>

                  <h1>Kitap Sil</h1>
                  <input type="text" name="id" value={data.id} onChange={onChange}/><br/>
                  <button onClick={sil}>Sil</button>

                  <h1>Tüm Kitapları Sil</h1>
                  <button onClick={herseyisil}>Hepsini Sil</button>

                  <h1>Kitaplar</h1>
                  {books.map(book=>{
                        return(<div key={book.id}>
                              <h5>*********************</h5>
                              <h5>{book.id}</h5>
                              <h5>{book.name}</h5>
                              <h5>{book.yazar}</h5>
                              
                        </div>)
                  })}
            </div>
      )
}

export default App