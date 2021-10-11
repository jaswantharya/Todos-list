import React,{useState} from 'react';
export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Desc cannot be blank!");
        }
        else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container">
            <h3>Add To List</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Enter Work</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc" rows="3"></textarea>
                </div>
                <div className="container">
                    <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
                </div>
            </form>
        </div>
    )
}
