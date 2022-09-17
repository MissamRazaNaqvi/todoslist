import React from 'react';
import { useState } from 'react';

export const AddTodos = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("title or Description cannot be blank");
        }
        else {
            props.addTodos(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-5">
            <form onSubmit={submit}>
                <div className="mb-3">
                    <h3 className="my-3">Add Todo</h3>
                    <label htmlFor="text" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}
