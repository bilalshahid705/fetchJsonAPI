import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post">
        <h1>{props.userId}</h1>
        <p>{props.title}</p>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>

);

export default post;