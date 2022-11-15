import React from "react";
import Notes from "./components/Notes";

const App = () => {
  return (
    <main>
      <h1 className="note__tip">& don't forget to save your notes :)</h1>
      <Notes />
    </main>
  );
};

export default App;
