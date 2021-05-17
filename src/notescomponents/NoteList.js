import React from "react";
import Note from "./Note";
import { useSelector, useDispatch } from "react-redux";
import { getNotes } from "../redux/actions";

function NoteList() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  React.useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <div className="note-list">
      {notes.map((note, i) => (
        <Note
          key={note.id}
          text={note.text}
          title={note.title}
          id={note.id}
          index={i}
        />
      ))}
      {/* <button onClick={() => dispatch(getNotes())}>Refresh</button> */}
    </div>
  );
}

export default NoteList;
