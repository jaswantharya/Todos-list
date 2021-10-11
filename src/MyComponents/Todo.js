import React from 'react'

export const Todo = ({todo,onDelete}) => {
    return (
        <div>
            <h4 className="my-2">{todo.title}</h4>
            <p className="my-2">{todo.desc}</p>
            <button className="btn btn-sm btn-primary" onClick={()=>{onDelete(todo)}}>Delete</button><hr/>
        </div>
    )
}
