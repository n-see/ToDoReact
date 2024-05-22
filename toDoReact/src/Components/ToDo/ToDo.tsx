import { useState } from "react"
import { FaRegSquare } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";

interface ToDoItem{
    id: number
    todo: string
    completed: boolean
}
const ToDo = () => {
    // help managing state, UseState for input, and UseState for list
    const [input, setInput] = useState(' ')

    //useState to help track our list
    const [list, setList] = useState<ToDoItem[]>([]);

    const [editInput, setEditInput] = useState(' ')

    //Create a function to help us add, delete, update


    //create a function to help us add our todo to our list
    const addToDo = (newItem:string) => {
        const newToDo:ToDoItem = {

            id: Math.random(),
            todo: newItem,
            completed: false
        }
        setList([...list, newToDo]);
        setInput("");
        console.log(list)
    }
    const completeFunctionTrue =(item:number) => {
        setList(list.map(lists => lists.id === item ? {...lists, completed:true} : lists))
    }
    const completeFunctionFalse =(item:number) => {
        setList(list.map(lists => lists.id === item ? {...lists, completed:false} : lists))
    }
    const deleteItem = (item:number) => {   
        console.log(item)
        // for(let i = 0; i < list.length; i++){
        //     if(list[i].id = item){
        //         list.splice(i, 1);
        //         console.log(list)
        //         console.log(i);
        //         break;
        //     }
        //     break;
        // }
        // console.log(list[0].id)
        setList(list.filter(newList => newList.id !== item))
    }
    // const handleUpdate = (itemNumber: number) => {
    //     setList(list.map(lists => lists.id == itemNumber ? [{...list, todo: editInput}] : lists))
    // }
        
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
                        {item.completed ? <FaRegCheckSquare onClick={() => completeFunctionFalse(item.id)} /> : <FaRegSquare  onClick={() => completeFunctionTrue(item.id)}/>}
                        {item.todo}
                        <div>
                        <button className="btn" onClick={() => {deleteItem(item.id)}}>X</button>
                        {/* <button className="btn" onClick={()=> completeFunction(item.id)}>Complete</button> */}
                        </div>
                        <input type="text" value={editInput} onChange={(e) => setEditInput(e.target.value)} />
                        {/* <button className="addButton" onClick={() => handleUpdate(item.id)}> Edit</button> */}
                        
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