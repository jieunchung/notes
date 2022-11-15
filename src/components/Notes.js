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

  //when change happens on the input
  const handleInput = (event) => {
    setInputText(event.target.value);
  };

  //when saving the note
  const saveNote = () => {
    setNotes((prevNotes) => [...prevNotes, { id: nanoid(), text: inputText }]);
    //clear the textarea
    setInputText("");
  };

  //deleting the note
  const deleteNote = (noteId) => {
    setNotes((notes) =>
      // only show if note.id and noteId does not match
      notes.filter((note) => note.id !== noteId)
    );
  };
  return (
    <section style={grid}>
      {notes &&
        notes.map((note) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              text={note.text}
              deleteNote={deleteNote}
            />
          );
        })}
      <CreateNote
        handleInput={handleInput}
        saveNote={saveNote}
        inputText={inputText}
      />
    </section>
  );
};

export default Notes;
