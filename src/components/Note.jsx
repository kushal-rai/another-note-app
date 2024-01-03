/* eslint-disable react/prop-types */
function Note({ note, onDelNote }) {
  const { title, description, dateAdded } = note;
  function handleDelNote(note) {
    const confirmation = window.confirm(
      "Are you sure you want to delete the note?"
    );
    if (confirmation) {
      return onDelNote(note);
    }
  }
  return (
    <li className="bg-purple-100 rounded-md cursor-pointer p-3">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-md">{description}</p>
      <div className="flex justify-between cursor-default mt-5">
        <p className="text-sm">{dateAdded}</p>
        <button className="hover:text-lg" onClick={() => handleDelNote(note)}>
          🗑️
        </button>
      </div>
    </li>
  );
}

export default Note;
