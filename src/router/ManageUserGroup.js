import React from 'react'
import { withRouter } from 'react-router-dom'
import LocalBackGround from './../commons/LocalBackGround'
import {FetchDoGet,FetchDoPost} from './../commons/Utils'
import { Layout,Card,Button,Divider,Tabs} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import TabbleUtils from '../components/TabbleUtils';
import LocalIconFont from '../components/LocalIconFont';

const { TabPane } = Tabs;

const columns=[
    {
        title: '用户组ID',
        width: 50,
        dataIndex: 'groupId',
        key: 'groupId',
        fixed: 'left',
        align:"tenter",
        ellipsis:true
    },
    {
        title: '用户组名称',
        width: 50,
        dataIndex: 'groupName',
        align:"tenter"
    },
    {
        title: '用户组类别',
        width: 50,
        dataIndex: 'groupTypeName',
        align:"tenter"
    },
    {
        title: '用户组的版本',
        width: 50,
        dataIndex: 'groupVersion',
        align:"tenter",
        ellipsis:true
    },
    {
        title: '领导者',
        width: 50,
        dataIndex: 'leaderName',
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
                        icon={<SearchOutlined />}
                        >
                        查看详情</Button>
            )
        }
    },
];


const typeColumns=[
    {
        title: '类别ID',
        width: 50,
        dataIndex: 'typeId',
        key: 'typeId',
        fixed: 'left',
        align:"tenter",
        ellipsis:true
    },
    {
        title: '用户组名称',
        width: 50,
        dataIndex: 'typeName',
        align:"tenter"
    },
    {
        title: '创建者',
        width: 50,
        dataIndex: 'createName',
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
                        编辑</Button>
            )
        }
    },
];

/**
 * 管理我们的用户组的操作
 */
class ManageUserGroup extends React.Component{

    constructor(props){
        super(props)
        this.state={
            requestUrl:"/block/v1/user_group/selectAllUserGroup",
            userGroupTypeUrl:"/block/v1/group_type/selectAllGroupTypes",
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
                    <Tabs defaultActiveKey={"key1"}
                    tabPosition={"top"}
                    style={{margin:"6px"}}
                    >
                        <TabPane tab="用户组管理" key="key1">
                        <Card key={"card11"} style={{width:"100%"}} 
                        bordered={false}
                        hoverable={false}
                        title="用户组列表"
                        >
                            <TabbleUtils
                            columns={columns}
                            requestUrl={this.state.requestUrl}
                            currentPage={1}
                            searchParams={this.state.queryData}
                            // 每一次都是更新的
                            key={this.state.tableKey}/>
                        </Card>
                        </TabPane>
                        <TabPane tab={"用户组类别管理"} key={"key2"}>
                            <Card key={"card11"} style={{width:"100%"}} 
                            bordered={false}
                            hoverable={false}
                            title="用户组类别列表"
                            >
                                <TabbleUtils
                                columns={typeColumns}
                                requestUrl={this.state.userGroupTypeUrl}
                                currentPage={1}
                                searchParams={this.state.queryData}
                                // 每一次都是更新的
                                key={this.state.tableKey}/>
                            </Card>
                        </TabPane>
                    </Tabs>
            }/>
        )
    }

}

export default withRouter(ManageUserGroup)