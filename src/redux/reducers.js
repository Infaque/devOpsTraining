const initialState = { notes: [] };

const notesReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NOTES_FROM_FIRESTORE":
      return { ...state, notes: action.payload };
    case "REMOVE_NOTE":
      return { notes: state.notes.filter((note) => note.id !== action.id) };
    default:
      return state;
  }
};

export default notesReducers;
