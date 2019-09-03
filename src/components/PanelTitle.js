import React from 'react';

class PanelTitle extends React.Component {
  render() {
    const title = this.props.title
    return (
      <h2>{title}</h2>
    );
  }
}

export default PanelTitle;