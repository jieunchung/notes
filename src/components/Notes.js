import React from "react";
import Note from "./Note";

const Notes = () => {
  const grid = {
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "repeat(3, minmax(300px, 1fr))",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  return (
    <section style={grid}>
      <Note />
    </section>
  );
};

export default Notes;
