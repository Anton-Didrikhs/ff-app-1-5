import React from "react";
import { Card } from "react-bootstrap";
import useItems from "../hooks/useItems.js";

function FlexContainer({ element: Element }) {
  const items = useItems();

  return (
    <div style={styles.container}>
      {items.map((item) => (
        <Card key={item.id} style={styles.card}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    width: "300px",
  },
};

export default FlexContainer;