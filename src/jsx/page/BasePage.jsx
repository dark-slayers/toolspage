import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/base/Button.jsx';
const STEP = 4;
class PButton extends Button {
  handleClick = () => {
    location = this.props.pageUrl;
  }
}
class Line extends React.Component {
  render() {
    const line = {
      display: 'flex',
      justifyContent: 'center'
    };
    const list=this.props.list?this.props.list:[];
    const buttons = list.map((b) => <PButton text={b.text} pageUrl={b.url}/>
  );
    return (<div>
      <div style={line}>{buttons}</div>
    </div>);
  }
}
class BasePage extends React.Component {
  render() {
    const array = this.props.list
      ? this.props.list
      : [];
    let list = [];
    for (let i = 0, len = array.length; i < len; i += STEP) {
      list.push(array.slice(i, i + STEP));
    }
    const lines = list.map((line) => <Line list={line}/>);
    return (<div>{lines}</div>);
  }
}

export default BasePage;
