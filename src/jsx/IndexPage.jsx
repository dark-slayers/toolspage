import React from 'react'
import PropTypes from 'prop-types'
import B from './ui/base/PageButton.jsx';

class IndexPage extends React.Component {
  render() {
    const line = {
      display: 'flex',
      justifyContent: 'center'
    };
    return (<div>
      <div style={line}>
        <B text="项目工具" pageUrl="./java.html"/>
        <B text="Java工具" pageUrl="./java.html"/>
      </div>
      <div style={line}>
        <B text="host工具" pageUrl="./host.html"/>
        <B text="Java工具" pageUrl="./java.html"/>
      </div>
    </div>);
  }
}

export default IndexPage;
