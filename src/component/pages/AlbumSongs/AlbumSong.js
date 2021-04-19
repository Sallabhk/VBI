import React, { useEffect, useState } from 'react'  
import {
  useParams,
} from "react-router-dom";
import { photoEndPoint } from '../../../api-facade/endpoints';
import { getData } from '../../../api-facade/http';
import { BEMHelper } from '../../../utils/bem-helper';
import { Card } from '../../common/Cards/Cards';
import {SearchBox} from '../../common/Search/Search';
import "./AlbumSong.scss"
const classHelper = BEMHelper("album");


export const AlbumSong = () => {
    const  { id } = useParams();
const [songs,setSongs] = useState([]);
const [filteredSongs,setfilteredSongs] = useState([]);
const [loaded,setLoaded] = useState(false)

const [input, setInput] = useState('');
    const fetchSongs = async () => {
        const songsData = await getData(photoEndPoint)
        setSongs(songsData)
    }
    useEffect(() => {
        if(!loaded){
            setLoaded(true)
            fetchSongs();
        }
    });

    useEffect(() => {
    const filteredSongs =  songs && songs.filter(song => song.albumId == id)
    setfilteredSongs(filteredSongs)
    })

    const onSearchChange = event => {
        setInput(event.target.value)
    };

  const filteredData = filteredSongs.filter(song =>
    song.title.toLowerCase().includes(input.toLowerCase())
  );
    return(
        <div  className={classHelper("")}>
            <div style={{textAlign: "center", marginTop: "4rem" , color: "#fff", fontSize: "5rem"}}>All Songs of Album</div>
            <SearchBox  onSearchChange={onSearchChange}/>     
            {filteredData && filteredData.map(data => <Card data={data} url={data.url} />)}
        </div>
    )
}