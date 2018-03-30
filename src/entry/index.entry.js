import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from '../jsx/IndexPage.jsx';
import PageTitle from '../jsx/ui/base/PageTitle.jsx';

ReactDOM.render(
  <PageTitle title="个人工具库"/>, document.getElementById('page-title'));
ReactDOM.render(
  <IndexPage />, document.getElementById('main-ui'));
