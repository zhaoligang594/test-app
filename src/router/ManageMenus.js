import React from 'react'
import { withRouter } from 'react-router-dom'
import LocalBackGround from './../commons/LocalBackGround'
import {FetchDoGet,FetchDoPost} from './../commons/Utils'
import { Layout,Card,Button,Divider} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  EditOutlined,
} from '@ant-design/icons';
import TabbleUtils from '../components/TabbleUtils';
import LocalIconFont from '../components/LocalIconFont';

const columns=[
    {
        title: '菜单ID',
        width: 50,
        dataIndex: 'menuId',
        key: 'menuId',
        fixed: 'left',
        align:"tenter"
    },
    {
        title: '菜单图标',
        width: 50,
        dataIndex: 'mIcon',
        key: 'roleName',
        align:"tenter",
        render: (text, record, index) => {
            return <LocalIconFont type={record.mIcon}/>
        }
    },
    {
        title: '菜单名称',
        width: 50,
        dataIndex: 'menuName',
        align:"tenter"
    },
    {
        title: '请求路径',
        width: 50,
        dataIndex: 'menuUrl',
        align:"tenter"
    },
    {
        title: '菜单类型',
        width: 50,
        dataIndex: 'menuLevel',
        align:"tenter"
    },
    {
        title: '排序',
        width: 50,
        dataIndex: 'menuSort',
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
                <div>
                     <Button type="primary"
                        ghost={false} 
                        style={{backgroundColor:"#389e0d",border:"none",float:"left"}}
                        icon={<LocalIconFont type="icon-edit" />}
                        >
                        编辑</Button>
                    <Button type="primary"
                        ghost={false} 
                        style={{backgroundColor:"#389e0d",border:"none",float:"left",marginLeft:"6px"}}
                        icon={<EditOutlined />}
                        >
                        管理子菜单</Button>
                </div>
            )
        }
    },
];


/**
 * 菜单的基本管理
 */
class ManageMenus extends React.Component{

    constructor(props){
        super(props)
        this.state={
            requestUrl:"/block/v1/menu/getAllMenu",
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
                extra={
                    <Button type="primary">管理主菜单</Button>
                }
                >
                    <TabbleUtils
                    columns={columns}
                    requestUrl={this.state.requestUrl}
                    currentPage={1}
                    searchParams={this.state.queryData}
                    // 每一次都是更新的
                    key={this.state.tableKey}/>
                    <Card.Meta title={
                        <div style={{color:"#f5222d"}}>*菜单的类别由系统设定，总量不变，我们仅仅可以修改排序以及父菜单的子菜单*</div>
                    }/>
                </Card>
            }/>
        )
    }
}

export default withRouter(ManageMenus)