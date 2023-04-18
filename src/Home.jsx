import Header from "./Header";
import Button from "./Button";
import { useState } from "react";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
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
  const [sectorText, setSectorText] = useState("React - Asssessment");
  const handleClick = (buttonId) => {
    if (buttonId === 1) {
      setSectorText("Home - User Sector");
    } else if (buttonId === 2) {
      setSectorText("Home - Admin Sector");
    }
  };
  return (
    <div>
      <Header />
      <div className="header">
        <h1>Generation Thailand</h1>
        <h1>{sectorText}</h1>
      </div>
      <Button onClick={handleClick} />
    </div>
  );
};

export default Home;
