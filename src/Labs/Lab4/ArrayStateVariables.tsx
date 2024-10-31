import React, { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-success" style={{ marginBottom: "10px" }}>Add Element</button>
      <ul className="list-group" style={{maxWidth:"300px"}}>
        {array.map((item, index) => (
          <li className="list-group-item d-flex justify-content-between" key={index}>
            {item}
            <button className="btn btn-danger flex-justify-end" onClick={() => deleteElement(index)}
                    id="wd-delete-element-click">
              Delete</button>
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
}
