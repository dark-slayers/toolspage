import React from 'react'
import PropTypes from 'prop-types'
import EmptyForm from '../../ui/base/EmptyForm.jsx';
import TextInput from '../../ui/base/TextInput.jsx';
import TextArea from '../../ui/base/TextArea.jsx';
class POJO extends EmptyForm {
  state = {
    typeName: 'UserInfo',
    args: 'name,username,password,role',
    showText: ''
  };
  handleClick = () => {
    const typeName = this.state.typeName;
    const args = this.state.args;
    if (typeName.length == 0 || args.length == 0) {
      alert('类型和参数都不能为空！');
    } else {
      const argArray = args.split(',');
      let fields = '';
      let initFields = '';
      let ar = '';
      for (let arg of argArray) {
        fields = fields + 'private String ' + arg + ';\n';
        initFields = initFields + 'this.' + arg + '=' + arg + ';\n';
        ar = ar + 'String ' + arg + ',';
      }
      ar = ar.substr(0, ar.length - 1);
      const result = `public class ${typeName}\n{${fields}public ${typeName}(${ar})\n{${initFields}}\n}`;
      this.setState({showText: result});
    }
  }
  render() {
    return (<div>
      <div>
        <TextInput obj={this} name="typeName" label="类名："/>
      </div>
      <div>
        <TextArea obj={this} name="args" label="参数（多个参数之间使用英文,分割）："/>
      </div>
      <div>
        <button type="button" onClick={this.handleClick}>生成</button>
      </div>
      <div>
        <textarea rows="30" cols="130" value={this.state.showText}/>
      </div>
    </div>);
  }
}

export default POJO;
