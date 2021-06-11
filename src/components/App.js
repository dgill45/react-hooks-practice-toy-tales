import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showToys, setShowToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((response) => {
      return response.json();
    })
    .then(setShowToys);
  },[]);

  function handleAddToy(newToys){
    setShowToys([...showToys, newToys])
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleUpdateToy(){
    setShowToys
  }

  return (
    <div>
      <Header />
      {showForm ? <ToyForm onAddToy= {handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys = {toys} onDeleteToy ={handleDeleteToy} onUpdateToy = {handleUpdateToy} />
    </div>
  );
}

export default App;
