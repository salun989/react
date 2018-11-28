import React from 'react'
import   {BrowserRouter  as Router ,Route,Link ,Redirect,Switch,} from 'react-router-dom';
import App from './App'
import Home from './components/Home/Home.js';
import  About  from './components/About/About.js'
import  Topics  from './components/Topics/Topics.js'

import  Tabels  from './components/table/table.js'
import  BaseForm  from './components/baseform/baseform.js'
import './components/css/base.css'
import {  LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Message from './components/Topics/Message.js';
import Admin from './components/Admin/admin.js';
// <Route  path="messages/:id" component={Message} />
const getConfirmation = (message, callback) => {
    //const allowTransition = window.confirm(message);
    //console.log(message)
   // callback(allowTransition);
}

export default class ERouter extends React.Component{

    render(){
        return (
            <LocaleProvider locale={zhCN}>
            <Router>
                <App>
                    <Route path="/" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/home" component={Home}/>
                                <Route path="/about" component={About}/>
                                <Route path="/topics" component={Topics}/>
                                <Route path="/tabels" component={Tabels}/>
                                <Route path="/baseform" component={BaseForm}/>
                            </Switch>
                        </Admin>
                    }/>
                </App>
            </Router>
            </LocaleProvider>
        );
    }
}



{/*<Route path="/topics" component={Topics}  />*/}
{/*<Route path="/admin" component={Admin}/>*/}
{/*
<ul className="navbar clearfix">
    <li><Link  to="/home">首页</Link></li>
    <li><Link  to="/about">关于</Link></li>
    <li><Link  to="/topics">主题</Link></li>
    <li><Link  to="/tabels">表格</Link></li>
</ul>*/}
