import React from 'react';

import './SearchBox.scss';

export const SearchBox = props => (
<div style={{textAlign: "center", marginTop: "2rem"}}>
<input
    className='search-box'
    type='search'
    placeholder='search songs'
    onChange={props.onSearchChange}
  />
</div>
);