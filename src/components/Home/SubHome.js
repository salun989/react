import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
console.log(React)

class SubHome extends React.Component{
	constructor(props) {
	  super(props);
	   console.log(props)
	   this.state={
	   	props:props,
	   }
	   
    }
   handleClick = () => {
   	console.log(this.state)
   	
    this.state.props.name.props.history.push({pathname:'/about',query:{abc:"1111"}})
  }

   	render(){
		 return (
		  <div>
		  <h1>是home的二级页面</h1>
		  <button  onClick={this.handleClick} >进入二级页面</button>
	 
		  </div>
	   )
    }
}



export default SubHome