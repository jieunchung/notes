import React from "react";
import { VscTrash } from "react-icons/vsc";
import "./Note.css";
import { Fade } from "react-awesome-reveal";

const Note = ({ id, text, deleteNote, color }) => {
  return (
    <Fade triggerOnce={true}>
      <section className="note" style={{ background: color }}>
        <div className="text">{text}</div>
        <footer style={{ justifyContent: "end" }}>
          <span className="trash">
            <VscTrash
              style={{ fontSize: "1.5rem" }}
              onClick={() => {
                deleteNote(id);
              }}
            />
          </span>
        </footer>
      </section>
    </Fade>
  );
};

export default Note;
