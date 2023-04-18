import React from "react";

const Table = ({ employees, onDelete }) => {
  return (
    <>
      {employees.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>Position</th>
              {onDelete && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
                {onDelete && (
                  <td>
                    <button onClick={() => onDelete(index)}>Delete</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;