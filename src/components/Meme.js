import React from 'react'
import PropTypes from 'prop-types'
// prop type  identifica el tipo de dato que es 
const Meme =({name,avatar_url})=> (
    <div className="single-meme">
        <h2> {name}</h2>
        <img src={avatar_url} alt={name}/>
       
    </div>
);

Meme.prototype={
    name:PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
}
export default Meme;