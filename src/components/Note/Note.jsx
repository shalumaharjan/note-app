import React from "react";
import "./note.css";
import { TiDelete } from "react-icons/ti";

export const Note = ({ note, handleDelNote }) => {
  return (
    <div className="note">
      <p>{note.text}</p>
      <div className="note-footer">
        {note.date}
        <button className="btn" onClick={() => handleDelNote(note.id)}>
          Delete
          <TiDelete />
        </button>
      </div>
    </div>
  );
};
