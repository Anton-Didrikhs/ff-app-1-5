import React from "react";

const RatingBar = ({ rate }) => {
  const totalStars = 10;
  const filledStars = rate;
  const emptyStars = totalStars - filledStars;

  return (
    <div style={styles.container}>
      {[...Array(filledStars)].map((_, index) => (
        <span key={index} style={styles.filledStar}>★</span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} style={styles.emptyStar}>☆</span>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0",
  },
  filledStar: {
    color: "black",
    fontSize: "30px",
  },
  emptyStar: {
    color: "lightgray",
    fontSize: "30px",
  },
};

export default RatingBar;