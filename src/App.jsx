import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import AddNote from "./components/AddNote/AddNote";
import { Note } from "./components/Note/Note";
import Search from "./components/Search/search";
import Title from "./components/Title/Title";

const savedNotes = () => {
  const saved = localStorage.getItem("data"); //get item that is saved in local storage
  if (saved) {
    return JSON.parse(saved); //parse: JSOn to object
  }
  return [];
};

function App() {
  const [notes, setNotes] = useState(savedNotes());
  const [search, setSearch] = useState("");

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

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLocaleLowerCase())
  ); //while searching: sees includes or not

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  //storing in local storage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(notes)); //stringify: object to JSON
  }, [notes]);

  return (
    <>
      <div className="container">
        <Title />
        <Search toSearch={handleSearch} />
        <div className="notes-list">
          <AddNote handleAddNote={handleAdd} />
          {filteredNotes.map((noteItem) => (
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
