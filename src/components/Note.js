import React from "react";
import { VscTrash } from "react-icons/vsc";

const Note = () => {
  const note = {
    background: "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)",
    border: "1px solid #f1e6e9",
    width: "15vw",
    minHeight: "30vh",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <section style={note}>
      <div style={{ height: "100%" }}>note</div>
      <footer style={{ display: "flex", justifyContent: "flex-end" }}>
        <VscTrash />
      </footer>
    </section>
  );
};

export default Note;
