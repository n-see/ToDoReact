import { useState } from "react"

interface ToDoItem{
    id: number
    todo: string
}
const ToDo = () => {
    // help managing state, UseState for input, and UseState for list
    const [input, setInput] = useState(' ')

    //useState to help track our list
    const [list, setList] = useState<ToDoItem[]>([]);

    //Create a function to help us add, delete, update


    //create a function to help us add our todo to our list
    const addToDo = (newItem:string) => {
        const newToDo:ToDoItem = {

            id: Math.random(),
            todo: newItem
        }
        setList([...list, newToDo]);
        setInput("");
    }

  return (
    <>
        <div className="myContainer">
            <div className="row">
                <div className="mainContent">
                <h1>Todo List</h1>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="addButton" onClick={() => addToDo(input)}>Add</button>

                </div>

            <ul>
                {list.map(item => (
                    <li key={item.id} className="listComponent">
                        {item.todo}
                        <div>
                        <button className="btn">X</button>
                        <button className="btn">Complete</button>
                        </div>
                        
                    </li>
                ))}
            </ul>
            </div>

            {/* render our list, ul, li, map list update our useState */}
        </div>
        {/* Title, input field, button somewhere to display our todo List */}
    </>
  )
}

export default ToDo