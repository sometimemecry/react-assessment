import Header from "./Header";
import { useState } from "react";
import User from "./user";
import Admin from "./admin";

const mockEmployees = [
  {
    id: 0,
    name: "Leonardo",
    lastname: "Da vinci",
    position: "Artist",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [sector, setSector] = useState("");
  const [employees, setEmployees] = useState([...mockEmployees]);

  const handleUserClick = () => {
    setSector("Home - User Sector");
  };

  const handleAdminClick = () => {
    setSector("Home - Admin Sector");
  };

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  let changeSector;
  if (sector === "Home - User Sector") {
    changeSector = <User employees={employees} />;
  } else if (sector === "Home - Admin Sector") {
    changeSector = (
      <Admin
        addEmployee={addEmployee}
        employees={employees}
        mockEmployees={mockEmployees}
        setEmployees={setEmployees}
      />
    );
  }

  return (
    <div>
      <Header />
      <div className="home-section">
        <h1>Generation Thailand</h1>
        <h1>{sector}</h1>
      </div>
      <button onClick={handleUserClick}>User Home Sector</button>
      <button onClick={handleAdminClick}>Admin Home Sector</button>
      {changeSector}
    </div>
  );
};

export default Home;
