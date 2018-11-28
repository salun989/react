import React from 'react'
// import { render } from 'react-dom'
// import ReactDOM from 'react-dom';
import moment from 'moment';
import {  Table,Divider, Tag,Button,Pagination} from 'antd';
// import Admin from '../Admin/admin.js'
import './table.less'
import PATH  from   "../../path/path.js"
import ajax from "../../http/http";
let set = new Set([{'color' : 'red', 'name' : 'green', 'age':'blue'}]);
console.log(set.entries())

class Tables extends React.Component{
    constructor(props) {
        super(props);
          this.state={
              num:0,
              pageIndex:1,
              pageSize:10,
              tableData:[],
              total:0,
          }
        // this.edit=this.edit.bind(this)
    }
     edit(id){
         console.log(id)
     }

    componentDidMount() {//在渲染前调用,在客户端也在服务端。
        //console.log("挂载前")
        this.getlist()
    }
     getlist=()=>{
           var  that=this
         ajax.get(PATH.fetchbespeaklist, {params: {pageIndex: that.state.pageIndex, pageSize: that.state.pageSize, sortBy: 'createdAt', order: 'desc' }})
             .then(res => {
                // console.log(res)
                 var list=res.list;
               var lists=  list.map((ele,index)=>{
                   ele.key = ele.id;
                   return ele;
                 });
               //  console.log(lists)
                 that.setState({
                      tableData : lists,
                      total:res.page.totalCount,
                 })
             })

     }
    handelpage=(page, pageSize)=>{
        console.log(page);
      var  that=this;
       new Promise((resolve,reject)=>{
            that.setState({
                pageIndex:  page,
            });
            resolve(that.state.pageIndex)
        }).then(res=>{
            this.getlist(res);
        })

    }
    render(){
          var that=this;
          console.log(that)
        const columns = [
            {
            title: '跟进人',
            dataIndex: 'followFgRootName',
            key: 'followFgRootName',
          },
            {
            title: '营销组名',
            dataIndex: 'name',
            key: 'name',
           },
            {
                title: '跟进店铺',
                dataIndex: 'followStoreName',
                key: 'followStoreName',
            },
            {
                title: '日跟进',
                dataIndex: 'dayTargetNum',
                key: 'dayTargetNum',
            },
            {
                title: '跟进期限',
                dataIndex: 'followEndDate',
                key: 'followEndDate',
            },
            {
                title: '已跟进/总客户',
                key: 'totalUserNum',
                render:(item)=>(
                    <div><span>{item.wasFollowCount}</span>/<span>{item.totalUserNum}</span></div>

                )
            },
            {
                title: '创建时间',
                dataIndex: 'createdAt',
                key: 'createdAt',
                render:(item)=>(
                    <div>{ moment(item.createdAt).format("YYYY-MM-DD")
                    }</div>

                )
            }, {
                title: '新增跟进',
                dataIndex: 'followRecordCount',
                key: 'followRecordCount',
            },
            {
                title: '营销业绩',
                dataIndex: 'saleMoneyCount',
                key: 'saleMoneyCount',
            },

            {
                title: '操作',
                key: 'x',
                // render:(item,record) =>{
                //
                //     return <a className="edit-data" onClick={(item)=>{
                //
                //         that.edit()}}>编辑</a>
                // }
                render:(item,record) =><a className="edit-data" onClick={this.edit.bind(this,item.id)}>编辑</a>
            }

        ];
        return (
            <div>
                <Table  className="tabls_right"
                        pagination={false}
                          bordered dataSource={this.state.tableData}
                          columns={columns}
                />
                <Pagination
                    current={this.state.pageIndex}
                    showQuickJumper
                    total={this.state.total}
                    pageSize={this.state.pageSize}
                    onChange={this.handelpage}
                />
            </div>
        )
    }
}



export default Tables
// <Table dataSource={dataSource} columns={columns} />

