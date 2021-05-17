import React from "react";
import { connect } from "react-redux";
import { deleteNote } from "../redux/actions";

function Note(props) {
  return (
    <div className="note-component" data={`newnotes-${props.index}`}>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
      <p>{props.key}</p>
      <button className="delete" onClick={() => props.remove(props.id)}>
        Delete
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    remove: (id) => dispatch(deleteNote(id)),
  };
}

export default connect(null, mapDispatchToProps)(Note);
