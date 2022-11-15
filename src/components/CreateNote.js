import React from "react";
import { VscSave } from "react-icons/vsc";

const CreateNote = ({ handleInput, saveNote, inputText }) => {
  const note = {
    background: "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)",
    border: "1px solid #f1e6e9",
    width: "15vw",
    minHeight: "20vh",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
  };

  const limit = 200;
  const limitCount = limit - inputText.length;

  return (
    <section style={note}>
      <textarea
        onChange={handleInput}
        value={inputText}
        cols="10"
        row="5"
        placeholder="type something..."
        maxLength={limit}
        style={{
          height: "100%",
          border: "none",
          background: "none",
          resize: "none",
        }}
      />
      <footer
        onClick={saveNote}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "0.9rem", color: "#757575" }}>
          {limitCount} characters left
        </span>
        <VscSave />
      </footer>
    </section>
  );
};

export default CreateNote;
