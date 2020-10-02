import React from 'react';

import './search-box.styles.css';

const SearchBox = props => (
    <div>
        <input type="text" placeholder="Search friends" onChange={props.onSearchChange}/>
    </div>
);

export default SearchBox;