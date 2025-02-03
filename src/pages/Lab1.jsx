import React, { useContext } from "react";
import PersonProfile from "../components/PersonProfile.js";
import AppContext from "../data/AppContext.js";
import "./Lab1.css";

function Lab1Page() {
  const { items } = useContext(AppContext);

  return (
    <div className="lab1-container">
      <h1 style={{ textAlign: "center" }}>Person Profiles</h1>
      <div className="profile-grid">
        {items.map((person) => (
          <PersonProfile
            key={person.id}
            id={person.id}
            name={person.name}
            dateOfBirth={person.dateOfBirth}
            eyeColor={person.eyeColor}
            rating={person.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Lab1Page;