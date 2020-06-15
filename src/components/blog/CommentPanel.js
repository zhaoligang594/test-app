import React from 'react'
import {List,Card,Comment,Pagination,Tag,Row,Col,Form,Input,Button} from 'antd'
import { FetchDoGet, FetchDoPost } from '../../commons/Utils'

/**
 * 我们的留言板
 */
class CommentPanel extends React.Component{
    constructor(props){
        super(props)
        this.state={
            requestUrl:"/v1/liuyan/getYouLiuYanByPageInfoForSite",
            comments:[],
            pageInfo:{}

        }
    }

    componentDidMount(){
        const _this=this;
        FetchDoGet(this.state.requestUrl,(response)=>{
            _this.setState({
                comments:response.data,
                pageInfo:response
            })
        });

    }

    render(){

        return(
            <Card
            title={
                <div className="comment-title-css">
                    精选留言
                </div>
            }
            extra={
                <span>***筛选后留言内容***</span>
            }
            >
                <List
                className="comment-list"
                                // header={`${this.state.comments.length} replies`}
                itemLayout="horizontal"
                dataSource={this.state.comments}
                pagination={false}
                footer={
                    <Pagination 
                    showQuickJumper
                    showTotal={(total, range)=>{
                        return `当前显示：${range[0]}-${range[1]} 留言 总计 ${total} 条留言`
                    }}
                    current={this.state.pageInfo.currentPage}
                    defaultPageSize={this.state.pageInfo.pageSize}
                    defaultCurrent={this.state.pageInfo.currentPage} 
                    total={this.state.pageInfo.totalCount} 
                    onChange={(page, pageSize)=>{
                        const _this=this;
                        FetchDoGet(this.state.requestUrl,function(response){
                            console.log(response)
                            _this.setState({
                                comments:response.data,
                                pageInfo:response
                            })
                        },{
                            currentPage:page,
                            pageSize:pageSize
                        });
                    }} />
                }
                

                renderItem={item => (
                    <li>
                        <Comment
                        // actions={item.actions}
                        author={
                            <span style={{fontSize:"14px",fontWeight:"bold"}}>
                                {item.userName}
                            </span>
                        }
                        avatar={item.pitureUrl}
                        content={
                        <span style={{fontSize:"14px"}}>{item.message}</span>
                        }
                        datetime={
                            <span style={{fontSize:"14px",fontWeight:"bold"}}>
                                ({item.gmtUpdate})
                            </span>
                            
                        }
                        />
                    </li>
                    )}
                />
            </Card>
        )
    }

}

export default CommentPanel