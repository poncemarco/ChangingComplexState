import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  }); //This is how to set complex useStates

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    // I can change the sintax to this: easier:

    const { value, name } = event.target; // This can get the element

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lNmae: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
