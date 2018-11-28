import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Router from './router'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import  'antd/dist/antd.css';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
