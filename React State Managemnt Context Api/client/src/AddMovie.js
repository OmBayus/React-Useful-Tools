import React, { useState,useContext } from "react"

import {MovieContext} from "./MovieContext"

const AddMovie = ()=>{

      const [name,setName] = useState("");
      const [price,setPrice] = useState("");

      const [movies,setMovies] = useContext(MovieContext)

      const updateName = (e)=>{
            setName(e.target.value)
      }

      const updatePrice = (e)=>{
            setPrice(e.target.value)
      }

      const addMovie = (e) =>{
            e.preventDefault();
            setMovies(preventValues =>(
            [
                  ...preventValues,
                  {
                        name:name,
                        price:price,
                        id: (Math.floor(Math.random() * (9999 - 1 + 1)) + 1)
                  }
            ]
            ))
            setName("")
            setPrice("")
      }

      return(
            <form onSubmit={addMovie}>
                  <input type="text" name="name" value={name} onChange={updateName}/>
                  <input type="text" name="price" value={price} onChange={updatePrice}/>
                  <button type="submit">Submit</button>
                  

            </form>
      )
}

export default AddMovie