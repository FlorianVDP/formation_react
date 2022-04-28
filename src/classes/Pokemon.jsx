import React, { Component } from 'react';

class Pokemon extends Component {

  render() {
    const { name, weight, src, action } = this.props;
    return (
      <li className='Pokemon' onClick={action}>
        <div className='name'>{name}</div>
        <div className='weight'>{weight}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default Pokemon;
