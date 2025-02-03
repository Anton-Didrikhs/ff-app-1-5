import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RatingBar from "./RatingBar.jsx";
import useDispatch from "../hooks/useDispatch.js";

const PersonProfile = ({ id, name, dateOfBirth, eyeColor, rating }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/lab4/edit/${id}`);
  };

  const handleDelete = () => {
    dispatch({ type: "delete", id });
  };

  const handleRate = () => {
    const newRating = (rating + 1) % 11;
    dispatch({ type: "rate", id, rating: newRating });
  };

  return (
    <Card style={{ width: "18rem" }} className="m-1">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>Date of Birth: {dateOfBirth}</p>
          <p>Eye Color: {eyeColor}</p>
        </Card.Text>
        <RatingBar rate={rating} />
        <div className="button-group">
          <Button variant="primary" onClick={handleEdit}>Edit</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
          <Button variant="success" onClick={handleRate}>Rate</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PersonProfile;
