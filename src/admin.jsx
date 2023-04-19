import React, { useState } from "react";

const Admin = ({ addEmployee, employees, mockEmployees, setEmployees }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const handleSave = () => {
    const newEmployee = {
      id: Math.max(...mockEmployees.map((e) => e.id)) + 1,
      name,
      lastname: lastName,
      position,
    };
    addEmployee(newEmployee);
    setName("");
    setLastName("");
    setPosition("");
  };

  const handleDelete = (id) => {
    const index = employees.findIndex((employee) => employee.id === id);
    employees.splice(index, 1);
    setEmployees([...employees]);
  };
  return (
    <>
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        ></input>
        <button onClick={handleSave}>Save</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
                <td>
                  <button onClick={() => handleDelete(employee.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
