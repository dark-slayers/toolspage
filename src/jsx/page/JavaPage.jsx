import React from 'react'
import PropTypes from 'prop-types'
import Button from '../ui/base/Button.jsx';
class PButton extends Button {
  handleClick = () => {
    location = this.props.pageUrl;
  }
}
class JavaPage extends React.Component {
  render() {
    const line = {
      display: 'flex',
      justifyContent: 'center'
    };
    return (<div>
      <div style={line}><PButton text="贫血POJO生成工具" pageUrl="./java/pojo.html"/><PButton text="贫血POJO生成工具"/></div>
    </div>);
  }
}

export default JavaPage;
