import React, { useState } from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";
import { nanoid } from "nanoid";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

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
      <Note />
      <CreateNote />
    </section>
  );
};

export default Notes;
