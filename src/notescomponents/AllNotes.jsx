import React from "react";

import AddNotesForm from "./AddNoteForm";

import NoteList from "./NoteList";

const AllNotes = () => {
  return (
      <div data="notes">
        <AddNotesForm />
        <NoteList />
      </div>
  )

};
export default AllNotes;
