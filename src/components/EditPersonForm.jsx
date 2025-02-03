import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import AppContext from "../data/AppContext";

function EditPersonForm() {
  const { id } = useParams();
  const { items, dispatch } = useContext(AppContext);
  const person = items.find((person) => person.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: person.name,
    dateOfBirth: person.dateOfBirth,
    eyeColor: person.eyeColor,
    rating: person.rating,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPerson = { ...formData, id: person.id };
    dispatch({ type: "edit", person: updatedPerson });
    console.log("Person Updated:", updatedPerson);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={person.id} />
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          pattern="[A-Za-z\s]+"
          title="Name should only contain letters and spaces."
        />
      </Form.Group>
      <Form.Group controlId="formDateOfBirth">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formEyeColor">
        <Form.Label>Eye Color</Form.Label>
        <Form.Control
          type="text"
          name="eyeColor"
          value={formData.eyeColor}
          onChange={handleChange}
          required
          pattern="[A-Za-z\s]+"
          title="Eye color should only contain letters and spaces."
        />
      </Form.Group>
      <Form.Group controlId="formRating">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="0"
          max="10"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Edit Person
      </Button>
    </Form>
  );
}

export default EditPersonForm;