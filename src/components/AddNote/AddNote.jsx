import React, { useState } from "react";
import "../Note/note.css";
import "./addnote.css";
import { IoMdAddCircle } from "react-icons/io";

const CHARACTER_LIMIT = 200;

const AddNote = ({ handleAddNote }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (CHARACTER_LIMIT - value.length >= 0) {
      setInput(event.target.value);
    } else {
      alert("you have reached the character limit.");
    }
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
        <small>{CHARACTER_LIMIT - input.length} characters remaining</small>
        <button className="btn" onClick={handleSaveClick}>
          Add <IoMdAddCircle />
        </button>
      </div>
    </div>
  );
};

export default AddNote;
