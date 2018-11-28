import React from 'react'
// import { render } from 'react'
import ReactDOM from 'react-dom';

class SubAbout extends React.Component{
    constructor(props) {
        super(props);


    }

    render(){
       // console.log(this.props)
        return (
            <div>
                <h1>关于的二级页面</h1>
                <h4>{this.props.myParentsProp}</h4>
                <button  onClick={this.props.updateStateProp1}>点击我就好</button>
            </div>
        )
    }
    componentWillMount() {//在渲染前调用,在客户端也在服务端。
       // console.log("挂载前")
    }
    componentDidMount(){//componentDidMount 只在客户端。之后组件已经生成了对应的DOM结构
       // console.log("dom渲染后")
    }
    componentWillReceiveProps(){//在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用
        //console.log("组件接受都先的pros的时候")
    }
    componentWillUpdate(){//在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
      //  console.log("组件接受都新的pros和state的时候")
    }
    componentDidUpdate(){//在组件完成更新后立即调用。在初始化时不会被调用。
       // console.log("组件更新的时候")
    }
    componentWillUnmount(){//在组件从 DOM 中移除的时候立刻被调用。
       // console.log("卸载的时候")
    }
}



export default SubAbout