import { useState } from 'react';
import './PlayListForm.scss'

function PlaylistForm({ error, handleClose, handleSubmit }) {
  const [name, handleName] = useState();
  function handleForm(e) {
    e.preventDefault();
    handleSubmit(name);
  }
  return (
    <>
      <div className="back-drop" />
      <form className="playlist-modal">
        <h2>Create Playlist</h2>
        <button type="button" className="close-btn" onClick={handleClose}>
         X
        </button>
        <div className="input-field">
          <label forHtml="playlist-name">Playlist Name</label>
          <input
            autoFocus
            name="playlist-name"
            type="text"
            value={name}
            onChange={(e) => handleName(e.target.value)}
            maxLength={100}
          />
          {error && <div className="error">{error}</div>}
        </div>
        <button
          type="button"
          className="primary-btn create-btn"
          onClick={handleForm}
        >
          Create
        </button>
      </form>
    </>
  );
}

export default PlaylistForm;