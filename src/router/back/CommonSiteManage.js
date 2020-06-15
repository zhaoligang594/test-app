import React from 'react'
import { withRouter,Link } from 'react-router-dom'
import {Row,Col,Card,Button, Avatar,Tag} from 'antd'
import BackBlogGround from './BackBlogGround'
import TabbleUtils from '../../components/TabbleUtils'
import LocalIconFont from '../../components/LocalIconFont'
import { AjaxDoPost } from '../../commons/Utils'

const columns = [
    {
        title: 'ID',
        width: 30,
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
        // ellipsis:true,
        align:"tenter"
    },
    {
        title: '头像',
        width: 80,
        dataIndex: 'type',
        align:"tenter",
        render:(text, record, index) => {
            
            return(
                <Avatar src={record.pitureUrl}/>
            )
        }
    },
    {
        title: '昵称',
        width: 80,
        dataIndex: 'userName',
        align:"tenter"
    },
    {
        title: '留言信息',
        width: 80,
        dataIndex: 'message',
        // ellipsis:true,
        align:"tenter"
    },
    {
        title: '是否展示',
        width: 80,
        dataIndex: 'type',
        align:"tenter",
        render:(text, record, index) => {
            
            return(
                (record.type==0)?(
                    <Tag color="green">已发布</Tag>
                ):(
                    <Tag color="red">未发布</Tag>
                )
            )
        }
    },
    {
        title: '留言时间',
        width: 120,
        dataIndex: 'gmtCreate',
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
            //const _this=this;
            return (
                <div style={{height:"40px"}}>
                    <span style={{float:"left",width:"45%",marginLeft:"3px"}}>
                        <Button type="primary"
                        ghost={false} 
                        style={{backgroundColor:"#389e0d",border:"none",float:"left"}}
                        icon={<LocalIconFont type="icon-edit" />}
                        onClick={()=>{
                            //const _this=this;
                            AjaxDoPost("/v1/liuyan/publicComments",(response)=>{
                                window.location.href='/comments-site-manage'
                            },
                            {
                                commentId:record.id
                            })
                        }}
                        >
                            发布精选留言
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
 * 我们的留言的审核
 */
class CommonSiteManage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            commentRequestUrl:"/v1/liuyan/getYouLiuYanByPageInfo",
            tableKey:Math.random()
        }
    }

    componentDidMount(){
       // _this=this
    }

    render (){

        return(
            <BackBlogGround
            leftSpan={0}
            rightSpan={24}
            extra={
                <Row gutter={[16,16]}>
                    <Col span={24}>
                        <Card 
                        title={"网站留言"}
                        extra={
                            <div>您的位置：网站的留言</div>
                        }
                        >

                    <TabbleUtils
                    key={this.state.tableKey}
                    columns={columns}
                    // searchParams={}
                    requestUrl={this.state.commentRequestUrl}
                    />
                            
                        </Card>
                    </Col>
                </Row>
            }
            />
        )
    }

}

export default withRouter(CommonSiteManage)