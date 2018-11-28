
import React from 'react'
import {   Menu, Icon} from 'antd'
import { Row,Col } from 'antd';

import   {BrowserRouter  as Router ,Route,Link ,Redirect,Switch,NavLink} from 'react-router-dom'
import './admin.less'
import  MenuConfig  from  "../config/menuconfig.js"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Admin extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    constructor(props){
        super(props)
        this.state = {
            // openKeys: [''],
            // selectedKeys: [''],
            // rootSubmenuKeys: menuKey,
            // itemName: ''
        };
    }
    // setDefaultActiveItem = ({ location }) => {
    //     const { pathname } = location;
    //     console.log(pathname)
    //     menuList.map(item => {
    //         if (item.pathname) {
    //
    //         }
    //         // 因为菜单只有二级,简单的做个遍历就可以了
    //         if (item.children && item.children.length > 0) {
    //             // openKeys: [item.key],
    //             item.children.map(childitem => {
    //                 // 为什么要用match是因为 url有可能带参数等,全等就不可以了
    //                 // 若是match不到会返回null
    //                 if (pathname.match(childitem.path)) {
    //                     this.setState({
    //                         selectedKeys: [childitem.key]
    //                     });
    //                     // 设置title
    //                    document.title = childitem.text;
    //                 }
    //             });
    //         }
    //     });
    // }



    // state = {
    //     current: 'userlist',
    // }
    // handleClick = (e) => {
    //     console.log('click ', e);
    //     this.setState({
    //         current: e.key,
    //     });
    // }
    componentWillMount(){

        console.log(this.props.children)
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
   }
   //  componentDidMount = () => {
   //      // 设置菜单的默认值
   //      console.log(this.props)
   //      this.setDefaultActiveItem(this.props);
   //  };
    // 菜单渲染
    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.path}  activeClassName="nav_menu_active">{item.title}</NavLink>
            </Menu.Item>
        })
    }

    render(){
         console.log(this.props)
        return (
             <div>
                 <Row>
                     <Col span={4} className="nav_left">
                         <Menu   style={{color:'red',textAlign:'center'}}
                                onClick={this.handleClick}
                                selectedKeys={[this.state.current]}
                                mode="inline"
                                theme="dark"
                         >
                             { this.state.menuTreeNode }
                         </Menu>
                     </Col>
                     <Col span={20} className="right_contianer">
                         {this.props.children}
                     </Col>
                 </Row>


             </div>



        );
    }
}

// {
//                 <Menu.Item key="cardlist" >
//                     会员卡列表
//                 </Menu.Item>
//                 <Menu.Item key="couponlist">
//                     优惠券列表
//                 </Menu.Item>
//                 <SubMenu title={<span className="submenu-title-wrapper">帮助</span>}>
//                     <Menu.Item key="userjiaocheng">使用教程</Menu.Item>
//                     <Menu.Item key="qa">常见问题</Menu.Item>
//                 </SubMenu>
// }

{/*<Menu.Item key="order">
                    <NavLink to="/home">
                        <Icon type="user"/><span className="nav-text">首页</span>
                    </NavLink>


                </Menu.Item>
                <Menu.Item key="mastercenter" >
                    <NavLink to="/about">
                        <Icon type="user"/><span className="nav-text">关于</span>
                    </NavLink>


                </Menu.Item>
                <Menu.Item key="orderlist" >
                    <NavLink to="/baseform">
                    <Icon type="user"/><span className="nav-text">预约列表</span>
                   </NavLink>

                </Menu.Item>
                <Menu.Item key="userlist" >
                    <NavLink to="/tabels">
                        <Icon type="user"/><span className="nav-text">用户列表</span>
                    </NavLink>

                </Menu.Item>*/}
