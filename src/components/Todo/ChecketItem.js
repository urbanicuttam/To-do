import React, { useState } from 'react'
import './CheckItem.css'

const ChecketItem = (props) => {
     // State with list of all checked item
    const [checked, setChecked] = useState([]);
    const checkList = props.onList


    // Add/Remove checked item from list
    const handleCheck = (event) => {
      var updatedList = [...checked];
      if (event.target.checked) {
          updatedList = [...checked, event.target.value];
      } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
      }
      setChecked(updatedList);
    };


    // Generate string of checked items
    // const checkedItems = checked.length
    // ? checked.reduce((total, item) => {
    //     return total + ", " + item;
    //     })
    // : "";

    // Return classes based on whether item is checked
    var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";


  return (
    <div>
      <div className="checkList">
        <div className="title">Your Todo List:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
              <button onClick={()=>{props.onRemove(index)}}>Remove</button>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default ChecketItem
