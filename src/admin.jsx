import React, { useState } from "react";
import Home from "./Home";
import Table from "./table";

const Admin = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const [employees, setEmployees] = useState([]);

  const handleSave = () => {
    const newEmployee = { name, lastname, position };
    setEmployees([...employees, newEmployee]);
    setName("");
    setLastname("");
    setPosition("");
  };

  const handleDelete = (index) => {
    const newEmployees = [...employees];
    newEmployees.splice(index, 1);
    setEmployees(newEmployees);
  };

  return (
    <>
      <Home />
      <h3>Create Employee Here</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastname}
        onChange={(event) => setLastname(event.target.value)}
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(event) => setPosition(event.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <Table employees={employees} onDelete={handleDelete} />
    </>
  );
};

export default Admin;