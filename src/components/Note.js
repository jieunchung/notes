import React from "react";
import { VscTrash } from "react-icons/vsc";

const Note = ({ id, text, deleteNote }) => {
  const note = {
    background: "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)",
    border: "1px solid #f1e6e9",
    width: "15vw",
    minHeight: "20vh",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <section style={note}>
      <div style={{ height: "100%" }}>{text}</div>
      <footer
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <VscTrash
          onClick={() => {
            deleteNote(id);
          }}
        />
      </footer>
    </section>
  );
};

export default Note;
