import { useState } from "react";
import "./App.css";
import TodoList from "./Todolists";
function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>Todo List</h1>
        <br />
        <input
          type="text"
          value={inputList}
          onChange={itemEvent}
          placeholder="Add a Items"
        />
        <button onClick={listOfItems}>+</button>

        <ol>
          {items.map((itemVal, index) => {
            return (
              <TodoList
                key={index}
                id={index}
                text={itemVal}
                onSelect={deleteItem}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
