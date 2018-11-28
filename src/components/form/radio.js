import React from 'react'
import ReactDOM from 'react-dom';
class Radio extends React.Component{
    constructor(props) {
        super(props);
        console.log( this.props)
    }
    render(){
        return (
            <div>
                <label >
                    <input type="radio" name='gender' value="Man"
                                    onChange={this.props.handleChangeradio}/>Man</label>
                <br/>
                <label >
                    <input type="radio" name='gender' value="Women"
                                   onChange={this.props.handleChangeradio}/>Women</label>
            </div>
        )
    }
}



export default Radio