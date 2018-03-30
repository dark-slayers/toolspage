import React from 'react';
import ReactDOM from 'react-dom';
import JavaPage from '../jsx/page/JavaPage.jsx';
import PageTitle from '../jsx/ui/base/PageTitle.jsx';

ReactDOM.render(
  <PageTitle title="Java工具库"/>, document.getElementById('page-title'));
ReactDOM.render(
  <JavaPage />, document.getElementById('main-ui'));
