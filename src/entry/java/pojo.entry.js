import React from 'react';
import ReactDOM from 'react-dom';
import POJO from '../../jsx/page/java/POJO.jsx';
import PageTitle from '../../jsx/ui/base/PageTitle.jsx';

ReactDOM.render(
  <PageTitle title="Java贫血POJO类生成工具"/>, document.getElementById('page-title'));
ReactDOM.render(
  <POJO />, document.getElementById('main-ui'));
