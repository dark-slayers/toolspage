import React from 'react';
import ReactDOM from 'react-dom';
import SpringBootPage from '../../jsx/page/project/SpringBootPage.jsx';
import PageTitle from '../../jsx/ui/base/PageTitle.jsx';

ReactDOM.render(<PageTitle title="SpringBoot项目生成"/>, document.getElementById('page-title'));
ReactDOM.render(<SpringBootPage />, document.getElementById('main-ui'));
