import React from 'react';

import './Card.css';

class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        { this.props.children }
      </div>
    );
  }
}

export default Card;
