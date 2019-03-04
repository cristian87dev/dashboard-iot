import React from 'react';

import './Title.css';

class Title extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="title">
        { this.props.children }
      </div>
    );
  }
}

export default Title;
