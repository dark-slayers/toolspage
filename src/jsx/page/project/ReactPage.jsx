import React from 'react'
import PropTypes from 'prop-types'
import EmptyForm from '../../ui/base/EmptyForm.jsx';
import TextInput from '../../ui/base/TextInput.jsx';
import URL from '../../../js/URL.js';
import AjaxUtil from '../../../js/AjaxUtil.js';

class ReactPage extends EmptyForm {
  state = {
    projectName: '',
    description: '',
    license: 'MIT'
  };
  handleClick = () => {
    AjaxUtil.post(URL.reactSessionFile, this.state,function(json){
      var url = URL.reactZipFile;
      var a = window.document.createElement("a");
      window.document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      // a.download = fileName;
      a.click();
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
        <div style={lineStyle}><TextInput obj={this} name="projectName" label="项目名称："/></div>
        <div style={lineStyle}><TextInput obj={this} name="description" label="项目描述："/></div>
        <div style={lineStyle}><TextInput obj={this} name="license" label="license："/></div>
        <div style={pageStyle}>
          <button onClick={this.handleClick}>下载ZIP</button>
        </div>
      </div>
    </div>);
  }
}

export default ReactPage;
