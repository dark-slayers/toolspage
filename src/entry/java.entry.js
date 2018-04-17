import React from 'react';
import ReactDOM from 'react-dom';
import BasePage from '../jsx/page/BasePage.jsx';
import PageTitle from '../jsx/ui/base/PageTitle.jsx';

ReactDOM.render(<PageTitle title="Java工具库"/>, document.getElementById('page-title'));
const list = [
  {
    text: '贫血POJO生成工具',
    url: './java/pojo.html'
  }, {
    text: '贫血POJO生成工具',
    url: './java/pojo.html'
  }
];
ReactDOM.render(<BasePage list={list}/>, document.getElementById('main-ui'));
