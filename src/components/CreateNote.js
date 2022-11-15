import React from "react";
import { VscSave } from "react-icons/vsc";
import "./Note.css";

const CreateNote = ({ handleInput, saveNote, inputText, color }) => {
  const limit = 200;
  const limitCount = limit - inputText.length;

  return (
    <section className="note" style={{ background: color }}>
      <textarea
        className="text"
        onChange={handleInput}
        value={inputText}
        cols="10"
        row="5"
        placeholder="type something..."
        maxLength={limit}
      />
      <footer className="save__footer" onClick={saveNote}>
        <span className="text_limit">{limitCount} characters left</span>
        <VscSave />
      </footer>
    </section>
  );
};

export default CreateNote;
