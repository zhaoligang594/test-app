import React from 'react'
import './TechTalk.css'
import { withRouter } from 'react-router-dom'
import BlogCommonBackGround from '../../components/blog/BlogCommonBackGround'
import { FetchDoGet } from '../../commons/Utils'
import { List, Avatar,Pagination,Button,Tag,Card, Breadcrumb, Row,Col} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined ,HeartOutlined,
    UserOutlined,
    LineChartOutlined,BookOutlined} from '@ant-design/icons';
import LocalIconFont from '../../components/LocalIconFont'
import PublicLeft from '../../components/blog/PublicLeft'
import PorpularArticle from '../../components/blog/PorpularArticle'
import ArticleBar from '../../components/blog/ArticleBar'


const IconText = ({ type, text }) => (
    <span>
        {/* <LocalIconFont type={type} style={{marginRight: 8}}/> */}
      {React.createElement(LocalIconFont, { style: { marginRight: 8 },type:type })}
      {text}
    </span>
  );

/**
 * 我们的技术杂谈的页面
 */
class TechTalk extends React.Component{

    constructor(props){
        super(props)
        this.state={
            requestUrl:"/blog/v1/topic/getAllTopic",
            topicList:[],
            pageInfo:{},
            initLoading: true,
            loading: false,
        }
    }

    /**
     * 初始化我们的数据
     */
    componentDidMount(){
        const _this=this;
        FetchDoGet(this.state.requestUrl,function(response){
            //console.log(response)
            _this.setState({
                initLoading: false,
                topicList:response.data,
                pageInfo:response,
            })
        });
    }

    render(){

       
        return(
            <BlogCommonBackGround
            left={
               <Row gutter={[16,16]}>
                   <Col span={24}>
                       <Card title={"技术杂谈"}>
                            <p>首先，欢迎来到这个板块。</p>
                            <p>这个板块《技术杂谈》主要分享博主平时的学习收获以及生活中的趣事。</p>
                            <p>准确的说，这个板块分享的技术+生活。希望你们能够喜欢！</p>
                            <p>如有任何的问题，都可以给我留言以及联系我。</p>
                       </Card>
                   </Col>
                   <Col span={24}>
                        <Card title={"文章统计"}>
                            <ArticleBar/>
                        </Card>
                   </Col>
                   <Col span={24}>
                            <Card
                            title={"技术公众号"}
                            bordered={false}
                            cover={ 
                            <img 
                            style={{width:"70%",height:"70%",margin:"0px auto"}}
                            src={"http://file.breakpoint.vip/picture/blog/8bc55bf6-7359-43e4-9b36-d10d1163a1ae.jpg"}
                            />}
                            >
                            <Card.Meta
                            title={"快来关注吧！"}
                            />
                        </Card>
                   </Col>
                   <Col span={24}>
                       <PorpularArticle/>
                   </Col>
               </Row>
            }
            extra={
                <Card>
                    <List
                    itemLayout="vertical"
                    size="large"
                    pagination={false}
                    dataSource={this.state.topicList}
                    footer={
                        <Pagination 
                        showQuickJumper
                        showTotal={(total, range)=>{
                            return `当前显示：${range[0]}-${range[1]} 文章 总计 ${total} 篇文章`
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
                                    topicList:response.data,
                                    pageInfo:response,
                                })
                            },{
                                currentPage:page,
                                pageSize:pageSize
                            });
                        }} />
                    }
                    renderItem={(item)=>(
                        <List.Item
                        key={item.topicTitle}
                        actions={[
                            <div>
                                <span>
                                    <Breadcrumb separator={" "}>
                                        <Breadcrumb.Item>
                                        <Avatar src="http://file.breakpoint.vip/picture/blog/4f6bbb5c-2404-484a-a9f1-062317bc840e.jpg" />&nbsp;
                                            {item.nickName}
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item>
                                            <LocalIconFont type="icon-see"/>&nbsp;
                                            {item.seeCount}人已围观
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item>
                                            <LocalIconFont type="icon-riqi2"/>&nbsp;
                                            {item.gmtModified}
                                        </Breadcrumb.Item>
                                    </Breadcrumb>
                                </span>
                            </div>
                            // <IconText icon={"icon-information"} text={item.nickName} key="list-vertical-message" />,
                            // <IconText icon={"icon-see"} text={item.seeCount} key="list-vertical-star-o" />,
                            // <IconText icon={"icon-riqi2"} text={item.gmtModified} key="list-vertical-like-o" />,
                            
                          ]}

                          extra={
                            // <img
                            //   style={{width:"150px",height:"150px"}}
                            //   alt="logo"
                            //   src={item.photoPath}
                            // />
                            <Button type="link"
                             href={`/tech-article?topicId=`+item.topicId}
                             >阅读更多</Button>
                          }
                        >
                            <List.Item.Meta
                                // avatar={<Avatar src={item.photoPath} />}
                                title={
                                <a href={`/tech-article?topicId=`+item.topicId}>
                                    <span style={{fontSize:"18px"}}>{item.topicTitle}</span>
                                </a>}
                                description={<Tag color="blue">{item.topicCategory}</Tag>}
                                />
                                {item.topicDesc}
                            </List.Item>   
                      )}
                    />
                </Card>
            }
            />
        )
    }

}

export default withRouter(TechTalk)