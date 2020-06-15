import React from 'react'
import { withRouter,Link } from 'react-router-dom'
import LocalBackGround from './../commons/LocalBackGround'
import {FetchDoGet,FetchDoPost} from './../commons/Utils'
import { Layout,Card,Button,Divider,Tabs,Tag,Input} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusSquareOutlined,
  StopOutlined,
  FormOutlined,
  SearchOutlined
} from '@ant-design/icons';
import TabbleUtils from '../components/TabbleUtils';
import LocalIconFont from '../components/LocalIconFont';
import ProjectTypeSelect from '../components/ProjectTypeSelect';
import SearchUserSelect from '../components/SearchUserSelect';
import $ from 'jquery'

const { TabPane } = Tabs;

const optcolumns=[
    {
        title: '操作流ID',
        width: 50,
        dataIndex: 'optId',
        key: 'optId',
        fixed: 'left',
        ellipsis:true,
        align:"tenter"
    },
    {
        title: '操作流名称',
        width: 50,
        dataIndex: 'optName',
        align:"tenter"
    },
    {
        title: '创建者',
        width: 50,
        dataIndex: 'creatorName',
        align:"tenter"
    },
    {
        title: '版本',
        width: 50,
        dataIndex: 'optVersion',
        align:"tenter",
        ellipsis:true
    },
    {
        title: '操作流类别',
        width: 50,
        dataIndex: 'optTypename',
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
        title: '是否可用',
        width: 50,
        align:"tenter",
        render: (text, record, index) => {
            return (record.optEnable==0)?(
                <Tag color="green">可用</Tag>
            ):(
                <Tag color="red">不可用</Tag>
            )
        }
    },
    {
        title: '操作',
        key:"operation",
        width: 50,
        fixed: 'right',
        align:"tenter",
        render: (text, record, index) => {

            return(
                <Link to={{
                    pathname:"/opt_stream_detail",
                    state:{
                        title:"操作流详情",
                        subTitle:"ID:"+record.optId,
                        optStreamRecord:record
                    },
                }}>
                    <Button type="primary"
                    ghost={false} 
                    style={{backgroundColor:"#389e0d",border:"none",float:"left"}}
                    icon={<SearchOutlined />}
                    >
                    查看详情</Button>
                </Link>
                
            )//end return
        }
    },
];


class ManageOptStream extends React.Component{
    constructor(props){
        super(props)
        this.state={
            requestUrl:"/block/v1/opt_stream/selectOptStreams",
            queryData:{},
            tableKey:Math.random(),
            optName:"",
            optTypeId:"",
            optCreatorId:""
        }
    }

    /**
     * 初始化我们的变量
     */
    componentDidMount(){

        let opt_stream_queryData=localStorage.getItem("opt_stream_queryData")
        console.log("opt_stream_queryData",opt_stream_queryData)
        if(null!=opt_stream_queryData&&undefined!=opt_stream_queryData){
            // let queryData=JSON.parse(opt_stream_queryData)
            // this.setState({
            //     queryDa ta:queryData,
            //     //tableKey:Math.random(),
            // })
        }
    }

    render(){


        return(
            <LocalBackGround content={
                <Tabs tabPosition="top"
                tabBarGutter={18}
                >
                    <TabPane key="tabs1" tab={"操作流的管理"}>
                        <Card key={"card111"} style={{width:"100%"}} 
                        bordered={false}
                        hoverable={false}
                        title="操作流列表"
                        extra={
                            <div>
                                <Input placeholder="操作流名称"
                                id="opt_name"
                                style={{width:200,marginRight:"8px"}}
                                onChange={(e)=>{
                                    console.log($("#opt_name").val())
                                    this.setState({
                                        optName:$("#opt_name").val(),
                                    })
                                }}
                                />
                                <SearchUserSelect 
                                placeholder={"创建者"}
                                onChange={(value)=>{
                                    console.log(value)
                                    this.setState({
                                        optCreatorId:value.value
                                    })

                                }}
                                />
                                <ProjectTypeSelect
                                onChange={(value)=>{
                                    console.log(value)
                                    this.setState({
                                        optTypeId:value
                                    })
                                }}
                                />
                                <Button type="primary"
                                style={{marginRight:"10px"}}
                                onClick={()=>{
                                    let queryData={
                                        optName:this.state.optName,
                                        optTypeId:this.state.optTypeId,
                                        optCreatorId:this.state.optCreatorId
                                    };

                                    localStorage.setItem("opt_stream_queryData",JSON.stringify(queryData))
                                    this.setState({
                                        queryData:queryData,
                                        tableKey:Math.random(),
                                    })
                                }}
                                >
                                <SearchOutlined />
                                查询
                                </Button>
                                <Button type="primary">
                                <PlusSquareOutlined />
                                新建
                                </Button>
                            </div>
                        }
                        >
                            <TabbleUtils
                            columns={optcolumns}
                            requestUrl={this.state.requestUrl}
                            currentPage={1}
                            searchParams={this.state.queryData}
                            // 每一次都是更新的
                            key={this.state.tableKey}/>
                        </Card>
                    </TabPane>
                    <TabPane key="tabs2" tab={"操作流类别的管理"}>

                    </TabPane>
                </Tabs>
            }/>
        )
    }

}

export default withRouter(ManageOptStream)