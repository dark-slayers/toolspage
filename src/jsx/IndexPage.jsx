import React from 'react'
import PropTypes from 'prop-types'
import Button from './ui/base/Button.jsx';
class PButton extends Button {
  handleClick = () => {
    location = this.props.href;
  }
}
class IndexPage extends React.Component {

  render() {
    const line = {
      display: 'flex',
      justifyContent: 'center'
    };
    return (<div>
      <div style={line}><PButton text="项目工具"/><PButton text="Java工具"/></div>
    </div>);
  }
}

export default IndexPage;
