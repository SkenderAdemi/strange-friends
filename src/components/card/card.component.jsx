import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.friend.id}?set=set5&size=180x180`} alt="friend"/>   
        <h2>{props.friend.name}</h2>
    </div>
);