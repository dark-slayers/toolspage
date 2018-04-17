import React from 'react';
import ReactDOM from 'react-dom';
import ReactPage from '../../jsx/page/project/ReactPage.jsx';
import PageTitle from '../jsx/ui/base/PageTitle.jsx';

ReactDOM.render(<PageTitle title="Java工具库"/>, document.getElementById('page-title'));
ReactDOM.render(<ReactPage />, document.getElementById('main-ui'));
