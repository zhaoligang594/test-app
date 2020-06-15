import React from 'react'
import './BackBlogTopic.css'
import { withRouter } from 'react-router-dom'
import TabbleUtils from '../TabbleUtils'
import {Button} from 'antd'
import LocalIconFont from '../LocalIconFont'
import { Card } from '@material-ui/core'
import {Link} from 'react-router-dom'

const columns = [
    {
        title: 'ID',
        width: 120,
        dataIndex: 'topicId',
        key: 'topicId',
        fixed: 'left',
        // ellipsis:true,
        align:"tenter"
    },
    {
        title: '文章名称',
        width: 80,
        dataIndex: 'topicTitle',
        align:"tenter"
    },
    {
        title: '文章描述',
        width: 80,
        dataIndex: 'topicDesc',
        ellipsis:true,
        align:"tenter"
    },
    {
        title: '文章类别',
        width: 80,
        dataIndex: 'topicCategory',
        align:"tenter"
    },
    {
        title: '创建时间',
        width: 120,
        dataIndex: 'gmtCreate',
        align:"tenter"
    },
    {
        title: '修改时间',
        width: 120,
        dataIndex: 'gmtModified',
        align:"tenter"
    },
    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        align:"tenter",
        width: 120,
        render: (text, record, index) => {
            //console.log("row",record);
            return (
                <div style={{height:"40px"}}>
                    <span style={{float:"left",width:"45%",marginLeft:"3px"}}>
                        <Button type="primary"
                        ghost={false} 
                        style={{backgroundColor:"#389e0d",border:"none",float:"left"}}
                        icon={<LocalIconFont type="icon-edit" />}
                        >
                            <Link style={{color:"white"}} to={{
                                pathname:'update-topic',
                                state:{
                                    record:record
                                }
                                
                            }}>
                                编辑
                            </Link>
                        </Button>  
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
/**
 * 我们的文章的基本操作
 */
class BackBlogTopic extends React.Component{

    constructor(props){
        super(props)
        this.state={
            requestUrl:"/blog/v1/topic/getAllTopicByUser"
        }
    }

    /**
     * 初始化我们的数据
     */
    componentDidMount(){

    }

    render(){
        return(
            <div>
                
                    <TabbleUtils
                    columns={columns}
                    // searchParams={}
                    requestUrl={this.state.requestUrl}
                    />
               
                
            </div>
        )
    }

}

export default withRouter(BackBlogTopic)