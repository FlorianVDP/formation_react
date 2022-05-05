import React from "react";

function Pokemon(props) {

    const { name, weight, src, action } = props;
    return (
      <li className='Pokemon' onClick={action}>
        <div className='name'>{name}</div>
        <div className='weight'>{weight}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
}

export default Pokemon;
