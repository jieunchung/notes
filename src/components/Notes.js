import React, { useState, useEffect } from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";
import { nanoid } from "nanoid";
import "./Note.css";

const Notes = () => {
  const [notes, setNotes] = useState(
    () =>
      JSON.parse(localStorage.getItem("notes")) || [
        {
          id: nanoid(),
          text: "welcome to your note app! when you are done writing your note, click the floppy disk to save it. if you want to delete a note, you can click the trash icon :) have a nice day! --jieun",
          color:
            "radial-gradient(circle at 10% 20%, rgb(166, 226, 229) 0%, rgb(198, 232, 221) 100.2%)",
        },
      ]
  );
  const [inputText, setInputText] = useState("");
  const [color, setColor] = useState();

  //when change happens on the input
  const handleInput = (event) => {
    setInputText(event.target.value);
  };

  //when saving the note
  const saveNote = () => {
    setNotes((prevNotes) => [
      { id: nanoid(), text: inputText, color: color },
      ...prevNotes,
    ]);
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

  //save on localstorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  //get random colors
  useEffect(() => {
    const colors = [
      "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)",
      "radial-gradient(circle at 10% 20%,rgb(254, 255, 165) 0%,rgb(255, 232, 182) 90%)",
      "linear-gradient(109.6deg,rgb(204, 228, 247) 11.2%,rgb(237, 246, 250) 100.2%)",
      "radial-gradient(circle at 10% 20%, rgb(166, 226, 229) 0%, rgb(198, 232, 221) 100.2%)",
    ];
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [notes]);

  return (
    <section className="note__grid">
      <CreateNote
        color={color}
        handleInput={handleInput}
        saveNote={saveNote}
        inputText={inputText}
      />
      {notes &&
        notes.map((note) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              text={note.text}
              deleteNote={deleteNote}
              color={note.color}
            />
          );
        })}
    </section>
  );
};

export default Notes;
