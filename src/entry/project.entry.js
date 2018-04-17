import React from 'react';
import ReactDOM from 'react-dom';
import BasePage from '../jsx/page/BasePage.jsx';
import PageTitle from '../jsx/ui/base/PageTitle.jsx';

ReactDOM.render(<PageTitle title="项目工具库"/>, document.getElementById('page-title'));
const list = [
  {
    text: '项目工具',
    url: './project.html'
  }, {
    text: 'Java工具',
    url: './java.html'
  }, {
    text: 'host工具',
    url: './host.html'
  }, {
    text: 'Java工具',
    url: './java.html'
  }
];
ReactDOM.render(<BasePage list={list}/>, document.getElementById('main-ui'));
