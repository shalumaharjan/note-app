import React, { useState } from "react";
import "../Note/note.css";
import "./addnote.css";
import { IoMdAddCircle } from "react-icons/io";

const AddNote = ({ handleAddNote }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const handleSaveClick = () => {
    handleAddNote(input);
    setInput("");
  };
  return (
    <div className="note add-note">
      <textarea
        cols={10}
        rows={4}
        value={input}
        placeholder="Notes"
        onChange={handleInputChange}
      />
      <div className="note-footer">
        <button className="btn" onClick={handleSaveClick}>
          Add <IoMdAddCircle />
        </button>
      </div>
    </div>
  );
};

export default AddNote;
