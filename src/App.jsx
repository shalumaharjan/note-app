import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import AddNote from "./components/AddNote/AddNote";
import { Note } from "./components/Note/Note";

const savedNotes = () => {
  const saved = localStorage.getItem("data"); //get item that is saved in local storage
  if (saved) {
    return JSON.parse(saved); //parse: JSOn to object
  }
  return [];
};

function App() {
  const [notes, setNotes] = useState(savedNotes());

  const handleAdd = (inputText) => {
    if (!inputText) return;
    const currentDate = new Date().toLocaleDateString();
    const newNotes = {
      id: nanoid(), //gives random id
      text: inputText,
      date: currentDate,
    };
    setNotes([...notes, newNotes]);
  };

  const handleDelete = (idtoDel) => {
    const newTodoList = notes.filter((note) => note.id !== idtoDel);
    setNotes(newTodoList);
  };

  //storing in local storage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(notes)); //stringify: object to JSON
  }, [notes]);

  return (
    <>
      <div className="container">
        <h1>NOTES</h1>
        <div className="notes-list">
          <AddNote handleAddNote={handleAdd} />
          {notes.map((noteItem) => (
            <Note
              key={noteItem.id}
              note={noteItem}
              handleDelNote={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
