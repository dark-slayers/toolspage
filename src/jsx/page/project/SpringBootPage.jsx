import React from 'react'
import PropTypes from 'prop-types'
import EmptyForm from '../../ui/base/EmptyForm.jsx';
import TextInput from '../../ui/base/TextInput.jsx';
import URL from '../../../js/URL.js';
import AjaxUtil from '../../../js/AjaxUtil.js';

class SpringBootPage extends EmptyForm {
  state = {
    sqlName: '',
    path: '',
    packagePath: ''
  };
  handleClick = () => {
    AjaxUtil.put(URL.springbootUpdate, this.state, function(json) {
      alert("更新成功！");
    });
  }
  render() {
    const pageStyle = {
      display: 'flex',
      justifyContent: 'center'
    };
    const lineStyle = {
      marginBottom: 10
    };
    return (<div style={pageStyle}>
      <div>
        <div style={lineStyle}><TextInput obj={this} name="sqlName" label="数据库名称："/></div>
        <div style={lineStyle}><TextInput obj={this} name="path" label="项目路径："/></div>
        <div style={lineStyle}><TextInput obj={this} name="packagePath" label="包路径："/></div>
        <div style={pageStyle}>
          <button onClick={this.handleClick}>update</button>
        </div>
      </div>
    </div>);
  }
}

export default SpringBootPage;
