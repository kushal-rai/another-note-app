/* eslint-disable react/prop-types */

import Note from "./Note";

function NoteList({ notes, onDelNote }) {
  return (
    <div className="w-[90%] m-auto p-5 h-screen bg-purple-600 rounded-t-lg">
      {notes.length <= 0 ? (
        <h2 className="text-slate-100 text-xl text-center mt-10">
          {" "}
          There are no notes saved.
        </h2>
      ) : (
        <ul className="grid grid-cols-2 gap-3">
          {notes.map((note) => (
            <Note note={note} key={note.title} onDelNote={onDelNote} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default NoteList;
