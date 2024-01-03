import { useState } from "react";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

function App() {
  function handleNoteDel(val) {
    setNotes(
      notes.filter((note) => {
        return note.id !== val.id;
      })
    );
  }
  const [notes, setNotes] = useState([]);
  return (
    <div className="bg-purple-100 w-[80%] m-auto min-h-screen opacity-[98.5%]">
      <header>
        <h1 className="text-2xl ml-8 font-bold text-purple- 800 p-5 leading-6">
          Another <br />
          Note App
        </h1>
      </header>
      <main>
        <section></section>
        <section>
          <AddNote setNotes={setNotes} notes={notes} />
          <NoteList onDelNote={handleNoteDel} notes={notes} />
        </section>
      </main>
    </div>
  );
}

export default App;
