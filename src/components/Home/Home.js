import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
// import Subhome from './SubHome'
import { Card, Table, Modal, Button, message} from 'antd';
console.log(Button)
class Home extends React.Component{
	constructor(props) {
	  super(props);
	
    }

// handleClick = () => {
// 	console.log(this.props)
//  this.props.history.push({pathname:'/about',query:{abc:"1111"}})
//}
//		  <button  onClick={this.handleClick} >进入about页面</button>
   	render(){
		 return (
		  <div>
		  <h1>关于</h1>
           <Button>按钮</Button>

		  </div>
	   )
    }
}



export default Home
// <Subhome  name={this} ref="getSwordButton"   ></Subhome>