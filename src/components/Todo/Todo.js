import React, {useState} from 'react'
import ChecketItem from './ChecketItem';
import './Todo.css'

const Todo = () => {
    const [item, setItem] = useState("");
    const [listItem, setListItem] = useState([]);

    const addItemHandler = (event) => {
        event.preventDefault();
        // setListItem([...listItem, item]) 
        if (item.length === 0){
          return
        }
        setListItem((listItem)=>{
          const updatedList = [...listItem, item];
          console.log(updatedList)
          setItem('')
          return updatedList;
        })
      };
    const removeItemHandler = (i) => {
        const updatedNewList = listItem.filter((elem, id)=>{
            return i!==id;
        })
        setListItem(updatedNewList)
    }

  return (
    <>
      <h1>ADD TODO</h1>
      <div className='todo'>
        <input
          type="text" 
          placeholder='Add Item'
          value={item}
          onChange={(e)=>setItem(e.target.value)}
            />
          <button onClick={addItemHandler}>Add</button>
      </div>
      <div className='todo-list'>
      <ChecketItem onList = {listItem} onRemove = {removeItemHandler} />
      </div>
      
    </>
  )
}

export default Todo
