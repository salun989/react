import React from 'react'
import ReactDOM from 'react-dom';
class Checkbox extends React.Component{
    constructor(props) {
        super(props);
        console.log( this.props)
        this.state={
            links:["足球",'篮球','游泳']
        }

    }
    render(){
        const listItems = this.state.links.map((ele,index) =>
            <label key={index.toString()}  htmlFor={'id'+index}>
        <input   id={'id'+index} onChange={this.props.handleCheckbox}   value={ele} name="like" type="checkbox" /> {ele}
            </label>
                    )
        return (
            <div>
                {listItems}
            </div>
        )
    }
}



export default Checkbox
/*
            </lable>

<input onChange={this.props.handleCheckbox} name="like" type="checkbox" value="足球"/>足球
    <input onChange={this.props.handleCheckbox} name="like" type="checkbox" value="篮球"/>篮球
    <input onChange={this.props.handleCheckbox} name="like" type="checkbox" value="游泳"/>游泳
        <lable >
    */
