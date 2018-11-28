import React from 'react'
import ReactDOM from 'react-dom';
class Message extends React.Component{
	constructor(props) {
	  super(props);
	 console.log( this.props.location )
    }
   	render(){
		 return (
		  <div>
		  <h1>信息页面{this.props.match.params.id}</h1>
		  </div>
	   )
    }
}



export default Message