import React from 'react'
/**空白表单对象，实现了handleChange方法,
*handleChange是配合文本输入框使用的方法，可以更改state对象*/
class EmptyForm extends React.Component {
    handleChange = (event) => {
        event.preventDefault();
        var newState = {};
        const name = event.target.name;
        newState[name] = event.target.value;
        this.setState(newState);
    }
}

export default EmptyForm;
