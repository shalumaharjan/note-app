import React from "react";
import "./note.css";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const Note = ({ note, handleDelNote }) => {
  return (
    <div className="note">
      <p>{note.text}</p>
      <div className="note-footer">
        {note.date}
        <RiDeleteBin5Fill onClick={() => handleDelNote(note.id)} />
      </div>
    </div>
  );
};
