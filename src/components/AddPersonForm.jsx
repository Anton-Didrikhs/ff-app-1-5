import React, { useContext, useState } from "react";
import AppContext from "../data/AppContext";

function AddPersonForm() {
  const { dispatch } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    eyeColor: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { ...formData, id: Date.now() };
    dispatch({ type: "add", person: newPerson });
    console.log("New Person Added:", newPerson);
    setFormData({ name: "", dateOfBirth: "", eyeColor: "", rating: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          pattern="[A-Za-z\s]+"
          title="Name should only contain letters and spaces."
        />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Eye Color:</label>
        <input
          type="text"
          name="eyeColor"
          value={formData.eyeColor}
          onChange={handleChange}
          required
          pattern="[A-Za-z\s]+"
          title="Eye color should only contain letters and spaces."
        />
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="0"
          max="10"
          required
        />
      </div>
      <button type="submit">Add Person</button>
    </form>
  );
}

export default AddPersonForm;