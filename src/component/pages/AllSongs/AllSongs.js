import React, { useEffect, useState } from 'react';
import { albumEndPoint } from '../../../api-facade/endpoints';
import { getData } from '../../../api-facade/http';
import { BEMHelper } from '../../../utils/bem-helper';
import { Card } from '../../common/Cards/Cards';
import { useHistory } from "react-router-dom";
import "./AllSongs.scss"
import { SearchBox } from '../../common/Search/Search';
const classHelper = BEMHelper("songs");

export const AllSongs = () => {

const [album,setAlbum] = useState([]);
const [loaded,setLoaded] = useState(false)
const history = useHistory();
const [input, setInput] = useState('');

 const fetchData = async() => {
        const albumData = await getData(albumEndPoint)
        setAlbum(albumData)
        return albumData
      }

 useEffect(() => {
     if(!loaded){
         setLoaded(true)
        fetchData()
     }
});

 const handleClick = (id) => {
    history.push(`/songs/${id}`)
 }
 const onSearchChange = event => {
    setInput(event.target.value)
};
const filteredData = album.filter(song =>
    song.title.toLowerCase().includes(input.toLowerCase())
  );

return (
    <div className={classHelper("")}>
        <SearchBox  onSearchChange={onSearchChange}/>     
        { filteredData && filteredData.map(data => 
         <Card data={data} key={data.id} handleClick={() => handleClick(data.id)}/>
        )
        }
    </div>
)    
}