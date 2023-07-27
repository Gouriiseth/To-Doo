// import React from 'react'
import { useState } from "react"
import { addTodo,delTodo } from "../actions"
import {useSelector,useDispatch} from "react-redux"


const Todo = () => {
    const [input, setInput] = useState("")
    const dispatch=useDispatch(  )
    const list=useSelector((state)=>state.todoReducers.list)

    return (
    <div className="flex justify-center items-center h-screen bg-green-200">
        <div className="container max-w-md  bg-yellow-300 flex flex-col rounded pb-8 place-items-center">
        <figure>
            <figcaption className='text-3xl font-bold pt-5'>ADD ITEMS TO YOUR LIST</figcaption>
        </figure>
          <div className="mt-6 bg-white rounded p-3 ">
                <input type="text" className="text-2xl rounded" placeholder="add tasks.." value={input} 
                onChange={(event)=>
                    setInput(event.target.value) 
                }/>
                <button>
                        <i className="fa fa-plus text-2xl add-btn pl-3" onClick={() => dispatch(addTodo(input),setInput(''))}></i>  </button>
                  </div>  

                <div className="showItems max-w-md  bg-green-200  rounded w-3/4 m-3 p-5 hover:bg-green-300">

                    {

                        list.map((elem)=>(
                   
                    <div className="eachItem flex  " key={elem.id}>
                <h3 className="w-5/6 text-2xl">{elem.data}</h3>
                       <button>
                        <i className="fa-solid fa-trash pt-1 pl-7 text-2xl" title="Delete item" onClick={() =>
                        dispatch(delTodo(elem.id))}></i> 
              </button>
            </div> 
                        ))
                    }
        </div>
        </div>
    </div>
  )
}

export default Todo