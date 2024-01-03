/* eslint-disable react/prop-types */
import { useState } from "react";
import formattedDate from "../ulitities/formattedDate";
import { v4 as uuidv4 } from "uuid";

function AddNote({ setNotes, notes }) {
  // state used to find if the add new note section is open, It's closed by default
  const [isAddNoteOpen, setIsAddNoteOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateAdded, setDateAdded] = useState("");

  const handleOpenForm = () => {
    setIsAddNoteOpen(true);
  };
  const handleCloseForm = () => {
    setIsAddNoteOpen(false);
  };

  function setCurrentDate() {
    setDateAdded(formattedDate);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    setCurrentDate();

    const newNote = { id: uuidv4(), title, description, dateAdded };
    setNotes([...notes, newNote]);
    setTitle("");
    setDescription("");
    setDateAdded("");
    handleCloseForm();
  }

  return (
    <div>
      <div
        className="bg-purple-600 text-center p-2 font-medium text-purple-50 rounded-lg md:w-[90%] hover:bg-purple-800 cursor-pointer w-[70%] m-auto mb-6"
        onClick={handleOpenForm}
      >
        + Create New
      </div>
      {isAddNoteOpen && (
        <form
          onSubmit={(e) => handleSubmitForm(e)}
          className="max-w-md mx-auto my-4 p-6 bg-gray-100 rounded-lg shadow-md w-[70%] sm:w-full"
        >
          <button onClick={handleCloseForm} className="w-full text-right">
            ✖
          </button>
          <h3 className="mb-5">Write your note here.</h3>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 mb-4 rounded-md border-gray-300  focus:border-indigo-500"
            placeholder="Title"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 mb-4 rounded-md border-gray-300 focus:border-indigo-500"
            placeholder="Description"
            id=""
            cols="30"
            rows="10"
            required
          ></textarea>

          <button
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-800 focus:outline-none focus:bg-purple-800"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default AddNote;
