import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Item from "./models/item";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  function generateId() {
    // 0 - 99
    return Math.floor(Math.random() * 1000);
  }

  const addItem = (name: string) => {
    setItems([...items, { id: generateId(), name }]);
  };

  return (
    <div className="App">
      <TaskForm onAddItem={addItem} />
      <TaskList items={items} />
    </div>
  );
}

export default App;
