import React, { useEffect, useState } from 'react';
import { BEMHelper } from '../../../utils/bem-helper';
import "./AllSongs.scss"
import PlaylistForm from '../../common/PlayListForm/PlayListForm';
import { parseCookies, setCookie } from 'nookies';
import PlaylistCard from '../../common/PlayListCard/PlayListCard';
const classHelper = BEMHelper("songs");

export const PlayList = () => {

const [showPlaylist, handleShowPlaylist] = useState('');
const [createPlaylist, handleCreate] = useState(false);
const [playlists, handlePlaylists] = useState(initialValue());
const [addSong, handleAdd] = useState('');
const [error, handleError] = useState('');

function initialValue() {
  const { playlistArray } = parseCookies();
  if (playlistArray) {
    return JSON.parse(playlistArray);
  }
  return {};
}

useEffect(() => {
  if (Object.keys(playlists)) {
    setCookie(null, 'playlistArray', JSON.stringify({ ...playlists }), {
      maxAge: 30 * 24 * 60 * 60,
    });
  }
}, [playlists]);

function handleSubmit(name) {
  if (
    name &&
    Object.keys(playlists).every(
      (listname) => listname.toLowerCase() !== name.toLowerCase(),
    )
  ) {
    error && handleError('');
    handlePlaylists((state) => ({
      ...state,
      [name]: { ids: [], createdAt: new Date() },
    }));
    handleCreate(false);
  } else {
    handleError(
      !name ? 'Required Field!!' : 'Playlist with this name already exist!!',
    );
  }
}
 
function removePlaylist(name) {
    const newPlaylist = { ...playlists };
    delete newPlaylist[name];
    handlePlaylists(newPlaylist);
  }
return (
    <div className={classHelper("")}>
        <div className={classHelper("playlist")}>Create your own playlist</div>
        {!showPlaylist && (
              <button
                onClick={() => {
                  handleCreate(true);
                  handleError('');
                }}
                className={classHelper("create")}
              >
                + Create Playlist
              </button>
            )}
            {createPlaylist && (
                <PlaylistForm
                  error={error}
                  handleClose={() => handleCreate(false)}
                  handleSubmit={handleSubmit}
                />
              )}
                <section className="playlistCard-container">
              {Object.keys(playlists).map((label) => (
                <PlaylistCard
                  key={label}
                  name={label}
                  createdOn={playlists[label].createdAt}
                  handleDelete={() => removePlaylist(label)}
                  handleDetail={() => handleShowPlaylist(label)}
                />
              ))}
            </section>
    </div>
)    
}