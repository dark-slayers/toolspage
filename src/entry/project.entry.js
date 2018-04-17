import React from 'react';
import ReactDOM from 'react-dom';
import BasePage from '../jsx/page/BasePage.jsx';
import PageTitle from '../jsx/ui/base/PageTitle.jsx';

ReactDOM.render(<PageTitle title="项目工具库"/>, document.getElementById('page-title'));
const list = [
  {
    text: 'Eclipse项目工具',
    url: './project/eclipse.html'
  }, {
    text: 'React项目工具',
    url: './project/react.html'
  },
];
ReactDOM.render(<BasePage list={list}/>, document.getElementById('main-ui'));
