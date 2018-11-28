import React from 'react'
import ReactDOM from 'react-dom';
import ajax from '../../http/http.js'
import PATH  from '../../path/path.js'
import Subabout  from "./Subabout.js"
import RadioButton   from   '../form/radio.js'
import CheckboxButton   from   '../form/checkbox.js'
class About extends React.Component{
	constructor(props) {
	  super(props);
	   this.state={
           tel:"",
           password1:"",
           selectvalue:'fb',
           isGoing:false,
           editvalue:"修改前的",
		   flag:true,
           beforevalue: '父组件的值',
           radiovalue:'',
           checkboxValue:[],
           textareaValue:"这个是文本域"
	   }
	      
    }
    handleChange=(event)=> {
        this.setState({tel: event.target.value});
    }
    handleChangepsw=(event)=>{
        this.setState({password1: event.target.value});
	}
    masterlogin=()=>{
        ajax.post(PATH.fetchlogin+'?mobile='+this.state.tel+'&code='+this.state.password1).then(res=>{
            console.log(res);
        })
	}
    selectChange=(event)=>{
		console.log( event.target.value)
		this.setState({selectvalue:event.target.value})
	}
    // handleInputChange=(event)=>{
     //    const target = event.target;
     //   const value=target.type=="checkbox"?target.checked:target.value
	// 	this.setState({isGoing:value})
	// 	console.log(this.state.isGoing)
	// }
    handleCheckbox=(event)=>{
        var checks=this.state.checkboxValue.slice();
        var newVal=event.target.value;
        var index=checks.indexOf(newVal);
        if(index == -1){
            checks.push(newVal);
        }else{
            checks.splice(index,1);
        }
        this.setState({
            checkboxValue:checks
        });
        //console.log(this.state.checkboxValue)
    }
    handlebuttonChange=()=>{
		 if(!this.state.flag){
             this.setState({
                 flag:!this.state.flag,
                 editvalue:"修改后的"
             })
		 }else {
             this.setState({
                 flag:!this.state.flag,
                 editvalue:"修改前的"
             })
		 }

	}
    handleParentsChange=()=>{
	    this.setState({
            beforevalue:"我传给你了"
        })

    }
    submit1=()=>{
	    console.log(this.state.checkboxValue)
        var formData={
            remark:this.refs['remark'].value,
        }
        console.log(formData);
    }
    handleChangeradio=(event)=>{
        var that=this;
        new Promise((resove,reject)=>{
            that.setState({radiovalue: event.target.value});
            resove()

        }).then(res=>{
            console.log( that.state.radiovalue)
            } )



    }
    render(){
		 return (
		  <div>
		  <h1>关于</h1>
              <input type="text" value={this.state.tel}   placeholder="请输入电话号码" onChange={this.handleChange} />
              <input type="password" value={this.state.password1}   placeholder="请输入密码" onChange={this.handleChangepsw} />
			  <button   onClick={this.masterlogin}>登录</button>
              <label>
                  选择您最喜欢的网站
                  <select value={this.state.selectvalue} onChange={this.selectChange}>
                      <option value="gg">Google</option>
                      <option value="rn">Runoob</option>
                      <option value="tb">Taobao</option>
                      <option value="fb">Facebook</option>
                  </select>
              </label>
              <RadioButton   handleChangeradio={this.handleChangeradio} ></RadioButton>
              <CheckboxButton   handleCheckbox={this.handleCheckbox}></CheckboxButton>
              <textarea defaultValue={this.state.textareaValue} ref="remark"></textarea>
              <button onClick={this.handlebuttonChange}>点我</button>
              <h4>{this.state.editvalue}</h4>
              <button onClick={this.submit1}>提交</button>
              <Subabout   myParentsProp={this.state.beforevalue}  updateStateProp1={this.handleParentsChange}></Subabout>
		  </div>
	   )
    }
// <Subabout   myParentsProp={this.state.beforevalue}  updateStateProp={this.handlePChange}></Subabout>
/*<form onChange={this.handleCheckbox} name="like" type="checkbox" value="足球"/>足球
    <form onChange={this.handleCheckbox} name="like" type="checkbox" value="篮球"/>篮球
    <form onChange={this.handleCheckbox} name="like" type="checkbox" value="游泳"/>游泳

    <label >
    <form type="radio" name='gender' value="Man"

checked={this.state.radiovalue==="Man"}           onChange={this.handleChangeradio}/>Man</label>
<br/>
<label >
<form type="radio" name='gender' value="Women"
checked={this.state.radiovalue==="Women"}            onChange={this.handleChangeradio}/>Women</label>*/

    componentWillMount() {//在渲染前调用,在客户端也在服务端。
        //console.log("挂载前")
    }
    componentDidMount(){//componentDidMount 只在客户端。之后组件已经生成了对应的DOM结构
        //console.log("dom渲染后")
    }
    componentWillReceiveProps(){//在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用
       // console.log("组件接受都先的pros的时候")
    }
    componentWillUpdate(){//在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
       // console.log("组件接受都新的pros和state的时候")
    }
    componentDidUpdate(){//在组件完成更新后立即调用。在初始化时不会被调用。
       // console.log("组件更新的时候")
    }
    componentWillUnmount(){//在组件从 DOM 中移除的时候立刻被调用。
        //console.log("卸载的时候")
    }
}



export default About