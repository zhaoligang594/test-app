import React from 'react'
import './ManageUsers.css'
import LocalBackGround from './../commons/LocalBackGround'
import {FetchDoGet,FetchDoPost} from './../commons/Utils'
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import $ from 'jquery'

import { Layout,Card,Button,Divider,Table,Pagination,Input} from 'antd';
import LocalIconFont from '../components/LocalIconFont'

import TableUtils from './../components/TabbleUtils'
import DepartSelect from '../commons/DepartSelect'


const columns = [
    {
        title: '用户名',
        width: 50,
        dataIndex: 'userName',
        key: 'userName',
        fixed: 'left',
        align:"tenter"
    },
    {
        title: '昵称',
        width: 50,
        dataIndex: 'userNickName',
        key: 'userNickName',
        align:"tenter"
    },
    {
        title: '手机号',
        width: 50,
        dataIndex: 'userPhone',
        key: 'userPhone',
        align:"tenter"
    },
    {
        title: '邮箱',
        width: 50,
        dataIndex: 'userEmail',
        key: 'userEmail',
        align:"tenter"
    },
    {
        title: '部门',
        width: 70,
        dataIndex: 'departName',
        key: 'departName',
        align:"tenter"
    },
    {
        title: '角色',
        width: 70,
        dataIndex: 'roleName',
        key: 'roleName',
        align:"tenter"
    },
    {
        title: '创建时间',
        width: 100,
        dataIndex: 'gmtCreate',
        key: 'gmtCreate',
        align:"tenter"
    },
    {
        title: '状态',
        width: 100,
        // dataIndex: 'isFreeze',
        key: 'isFreeze',
        align:"tenter",
        render: (text, record, index) => {
            return (record.isFreeze==1)?"锁定":"未锁定"
        }
    },
    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        align:"tenter",
        width: 120,
        render: (text, record, index) => {
            console.log("row",record);
            return (
                <div style={{height:"40px"}}>
                    <span style={{float:"left",width:"45%",marginLeft:"3px"}}>
                        <Button type="primary"
                        ghost={false} 
                        style={{backgroundColor:"#389e0d",border:"none",float:"left"}}
                        icon={<LocalIconFont type="icon-edit" />}
                        >
                        编辑</Button>
                        
                    </span>
                    {/* <span style={{float:"left",width:"45%",marginLeft:"4px"}}>
                    <Button type="danger"
                        ghost={false} 
                        style={{backgroundColor:"#f44336",border:"none",float:"left"}}
                        icon={<LocalIconFont type="icon-edit" />}
                        >
                        冻结</Button>
                    </span> */}
                </div>
            )
        },
    },
];


class ManageUsers extends React.Component{

    constructor(props){
        super(props)
        this.state={
            users:{},
            requestUrl:"/block/v1/sys_user/selectAllUsers",
            //查询的数据 start
            userName:"",
            nickName:"",
            phone:"",
            roleId:"",
            departId:"",
            tableKey:Math.random(),
            //查询的数据 end
            queryData:{
                userName:"",
                nickName:"",
                phone:"",
                roleId:"",
                departId:""
            }

        }
    }
    /**
     * 初始化基本的信息
     */
    componentDidMount(){
    }

    render(){
        const _this=this;
        return(
            <LocalBackGround
             pageTitle={"系统设置"}
             pageSubTitle={"用户管理"}
             content={
                <div>
                    <Card style={{width:"100%"}} 
                            bordered={false}
                            hoverable={false}
                            title="用户信息列表"
                            extra={
                                <div>
                                    {/* <Button type="danger" 
                                    style={{float:"right",marginRight:"4px"}}>
                                        批量冻结
                                    </Button> */}
                                    <Button type="primary" style={{float:"right",marginRight:"4px"}}>添加用户</Button>
                                    <Button type="primary" style={{float:"right",marginRight:"4px"}}
                                    onClick={()=>{
                                        //alert(1)
                                        _this.setState({
                                            queryData:{
                                                userName:_this.state.userName,
                                                nickName:_this.state.nickName,
                                                phone:_this.state.phone,
                                                roleId:_this.state.roleId,
                                                departId:_this.state.departId
                                            },
                                            tableKey:Math.random()
                                        })
                                    }}
                                    >查询
                                    </Button>
                                    <DepartSelect style={{float:"right",marginRight:"4px"}}
                                    setDepartId={(val)=>{
                                        this.setState({
                                            departId:val
                                        })
                                    }}/>
                                    <div style={{float:"right",marginRight:"4px"}}>
                                        <Input 
                                        id="phone"
                                        placeholder={"手机号"}
                                        onChange={(val)=>{
                                            this.setState({
                                                phone:$("#phone").val()
                                            })
                                        }}
                                        />
                                    </div>
                                    <div style={{float:"right",marginRight:"4px"}}>
                                        <Input 
                                        id="nickName"
                                        placeholder={"昵称"}
                                        onChange={(val)=>{
                                            this.setState({
                                                nickName:$("#nickName").val()
                                            })
                                        }}
                                        />
                                    </div>
                                    <div style={{float:"right",marginRight:"4px"}}>
                                        <Input
                                        id="username"
                                        placeholder={"用户名"}
                                        onChange={(val)=>{
                                            this.setState({
                                                userName:$("#username").val()
                                            })
                                        }}
                                        />
                                    </div>
                                </div>
                            }
                    >
                        <TableUtils columns={columns}
                        requestUrl={this.state.requestUrl}
                        currentPage={1}
                        searchParams={this.state.queryData}
                        // 每一次都是更新的
                        key={this.state.tableKey}
                        />
                     </Card>
                </div>
            }/>
        )
    }
}
export default withRouter(ManageUsers)