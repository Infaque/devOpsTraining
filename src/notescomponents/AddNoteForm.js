import React, { useState } from "react";

import { connect } from "react-redux";

import { addNewNote } from "../redux/actions";

import { useDispatch } from "react-redux";
import { getNotes } from "../redux/actions";

function AddNoteForm(props) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    text: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    let newForm = { ...form };
    newForm[name] = value;

    setForm(newForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addNewNote(form);
    dispatch(getNotes());
    setForm({ title: "", text: "" });
  }

  return (
    <form style={{ padding: "10em" }} onSubmit={handleSubmit}>
      <h4 data="input-fields">Add a Note</h4>
      <div>
        <label data="notes">Title</label>
        <input
          name="title"
          placeholder="enter title"
          value={form.title}
          data="note-input1"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label data="Note-to-add">Text</label>
        <textarea
          name="text"
          value={form.text}
          placeholder="enter text"
          data="note-input2"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <button className="success" data="add-button">
          Add Note +
        </button>
      </div>
    </form>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addNewNote: (payload) => {
      dispatch(addNewNote(payload));
    },
  };
}

export default connect(null, mapDispatchToProps)(AddNoteForm);
