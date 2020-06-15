 import React from 'react'
import { withRouter } from 'react-router-dom'
import LocalBackGround from './../commons/LocalBackGround'
import {FetchDoGet,FetchDoPost} from './../commons/Utils'
import { Layout,Card,Button,Divider} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import TabbleUtils from '../components/TabbleUtils';
import LocalIconFont from '../components/LocalIconFont';

const columns=[
    {
        title: 'ID',
        width: 50,
        dataIndex: 'roleId',
        key: 'roleId',
        fixed: 'left',
        align:"tenter"
    },
    {
        title: '角色名',
        width: 50,
        dataIndex: 'roleName',
        key: 'roleName',
        align:"tenter"
    },
    {
        title: '角色值',
        width: 50,
        dataIndex: 'roleVal',

        align:"tenter"
    },
    {
        title: '创建时间',
        width: 50,
        dataIndex: 'gmtCreate',
        align:"tenter"
    },
    {
        title: '修改时间',
        width: 50,
        dataIndex: 'gmtModified',
        align:"tenter"
    },
    {
        title: '操作',
        key:"operation",
        width: 50,
        fixed: 'right',
        align:"tenter",
        render: (text, record, index) => {

            return(
                <Button type="primary"
                        ghost={false} 
                        style={{backgroundColor:"#389e0d",border:"none",float:"left"}}
                        icon={<LocalIconFont type="icon-edit" />}
                        >
                        管理角色</Button>
            )
        }
    },
];




/**
 * 管理角色的基本操作
 */
 class ManageRoles extends React.Component{

    constructor(props){
        super(props)
        this.state={
            requestUrl:"/block/v1/role/selectAllRoles",
            queryData:{},
            tableKey:Math.random()
        }
    }

    /**
     * 初始化我们的变量
     */
    componentDidMount(){

    }

    render(){


        return(
            <LocalBackGround content={
                <Card key={"card1"} style={{width:"100%"}} 
                bordered={false}
                hoverable={false}
                title="角色列表"
                >
                    <TabbleUtils
                    columns={columns}
                    requestUrl={this.state.requestUrl}
                    currentPage={1}
                    searchParams={this.state.queryData}
                    // 每一次都是更新的
                    key={this.state.tableKey}/>
                    <Card.Meta title={
                        <div style={{color:"#f5222d"}}>*角色有系统决定，不能更改，可以管理我们每个角色的菜单*</div>
                    }/>
                </Card>
            }/>
        )
    }

 }

 export default withRouter(ManageRoles)