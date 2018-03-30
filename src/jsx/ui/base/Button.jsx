import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
  handleClick = () => {
    alert("该方法必须被覆盖！");
  }
  render() {
    const spanStyle = {
      width: this.props.width
        ? this.props.width
        : 200,
      height: this.props.height
        ? this.props.height
        : 50,
      boxShadow: '0px 0px 5px white',
      borderRadius: '5px',
      margin: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'darkviolet',
      background: 'palegreen',
      cursor: 'pointer'
    };
    return (<span style={spanStyle} onClick={this.handleClick}>{this.props.text}</span>);
  }
}

export default Button;
