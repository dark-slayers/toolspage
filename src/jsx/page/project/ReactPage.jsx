import React from 'react'
import PropTypes from 'prop-types'
import EmptyForm from '../../ui/base/EmptyForm.js';
import TextInput from '../../ui/base/TextInput.js';
import URL from '../../../js/URL.js';
import AjaxUtil from '../../../js/AjaxUtil.js';

class ReactPage extends EmptyForm {
  state = {
    projectName: '',
    description: '',
    license: 'MIT'
  };
  handleClick = () => {
    AjaxUtil.post(URL.reactZip, this.state, function(data) {
      alert("添加成功！");
    });
  }
  render () {
    const pageStyle = {
      display: 'flex',
      justifyContent: 'center',
    };
    const lineStyle={
      marginBottom:10
    };
    return (
      <div style={pageStyle}>
        <div>
          <div style={lineStyle}><TextInput obj={this} name="projectName" label="项目名称："/></div>
          <div style={lineStyle}><TextInput obj={this} name="description" label="项目描述："/></div>
          <div style={lineStyle}><TextInput obj={this} name="license" label="license："/></div>
          <div style={pageStyle}>
            <button onClick={this.handleClick}>下载ZIP</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactPage;
