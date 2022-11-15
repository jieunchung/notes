import React from "react";
import { VscTrash } from "react-icons/vsc";
import "./Note.css";

const Note = ({ id, text, deleteNote, color }) => {
  return (
    <section className="note" style={{ background: color }}>
      <div className="text">{text}</div>
      <footer style={{ justifyContent: "end" }}>
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
