import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Unknown");

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          const req = `https://api.genderize.io/?name=${name}`;
          const response = await fetch(req);
          const { gender } = await response.json();
          console.log(gender);
          setGender(gender);
        }}
      >
        submit
      </button>
      <br />
      <label>Your gender is {gender}</label>
    </div>
  );
}

export default App;
