import React, { useEffect, useState } from 'react';
import { albumEndPoint } from '../../../api-facade/endpoints';
import { getData } from '../../../api-facade/http';
import { BEMHelper } from '../../../utils/bem-helper';
import { Card } from '../../common/Cards/Cards';
import { useHistory } from "react-router-dom";
import "./AllSongs.scss"
import { SearchBox } from '../../common/Search/Search';
import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
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

//  const fetchData = async() => {
//         const albumData = await getData(albumEndPoint)
//         setAlbum(albumData)
//         return albumData
//       }

//  useEffect(() => {
//      if(!loaded){
//          setLoaded(true)
//         fetchData()
//      }
// });


//  const onSearchChange = event => {
//     setInput(event.target.value)
// };
// const filteredData = album.filter(song =>
//     song.title.toLowerCase().includes(input.toLowerCase())
//   );

//   const handleChange = event => {
//       setPlayList(event.target.value)
//   }
// const handleSubmit = (e) => {
//     e.preventDefault();
//     setPlayListValue([...playListValue,{title: playList}])
// }
// const handleClick = () => {
//   setVisible(true)
// }

// useEffect(() => {  
//     localStorage.setItem('playList',JSON.stringify(playListValue))
//     setData(() => localStorage.getItem('playList'))
//   });

// useEffect(() => {
//     setData(() => localStorage.getItem('playList'))
// },[])
 
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