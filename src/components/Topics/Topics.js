import React from 'react'
import { render } from 'react-dom'
import   {Route,} from 'react-router-dom';
import ReactDOM from 'react-dom';
import  Message  from './Message.js'

// 如果你用到了constructor就必须写super(),是用来初始化this的，可以绑定事件到this上;
// 如果你在constructor中要使用this.props,就必须给super加参数：super(props)；
// （无论有没有constructor，在render中this.props都是可以使用的，这是React自动附带的；）
// 如果没用到constructor,是可以不写的；React会默认添加一个空的constructor。
class Topics extends React.Component{
	constructor(props) {
	  super(props);
	
    }

    componentWillMount() {//在渲染前调用,在客户端也在服务端。
        console.log("挂载前")
    }
    componentDidMount(){//componentDidMount 只在客户端。之后组件已经生成了对应的DOM结构
        console.log("dom渲染后")
    }
    componentWillReceiveProps(){//在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用
        console.log("组件接受都先的pros的时候")
    }
    componentWillUpdate(){//在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
        console.log("组件接受都新的pros和state的时候")
    }
    componentDidUpdate(){//在组件完成更新后立即调用。在初始化时不会被调用。
        console.log("组件更新的时候")
    }
    componentWillUnmount(){//在组件从 DOM 中移除的时候立刻被调用。
        console.log("卸载的时候")
    }
	render(){
//	   console.log(this.props.match+  this.props.children)
	   
		 return (
		 	<div>
		    <h1>主题</h1>
                <Route path={`${this.props.match.url}/messages/:id`} component={Message}/>

		  </div>
	   )
    }
}



export default Topics

// <Route path={`${this.props.match.url}/messages/:id`} component={Message}/>
// "eslintConfig": {
//     "extends": "react-app",
//         "rules": {
//         "no-undef": "off",
//             "no-restricted-globals": "off",
//             "no-unused-vars": "off",
//             "no-useless-constructor": "off"
//     }
// },