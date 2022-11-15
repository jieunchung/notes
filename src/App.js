import React from "react";
import Notes from "./components/Notes";

const App = () => {
  return (
    <main>
      <h1
        style={{ textAlign: "center", marginTop: "4rem", marginBottom: "4rem" }}
      >
        Notes
      </h1>
      <Notes />
    </main>
  );
};

export default App;
