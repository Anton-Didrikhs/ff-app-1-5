import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PersonProfile from "../components/PersonProfile.js";
import AppContext from "../data/AppContext.js";

function Lab2Page() {
  const { id } = useParams();
  const { items } = useContext(AppContext);

  if (!id) {
    return <p>No person id.</p>;
  }

  const person = items.find((person) => person.id === parseInt(id));

  if (!person) {
    return <p>No person with this id found.</p>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Person Profile</h1>
      <PersonProfile
        key={person.id}
        id={person.id}
        name={person.name}
        dateOfBirth={person.dateOfBirth}
        eyeColor={person.eyeColor}
        rating={person.rating}
      />
    </div>
  );
}

export default Lab2Page;