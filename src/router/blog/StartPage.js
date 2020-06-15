import React from 'react'
import './StartPage.css'
import { withRouter } from 'react-router-dom'
import BlogCommonBackGround from '../../components/blog/BlogCommonBackGround'
import { Card, Col, Row,List, Divider,Calendar,Avatar,Button,Tag, Breadcrumb } from 'antd';
import ArticleBar from '../../components/blog/ArticleBar';
import { FetchDoGet } from '../../commons/Utils';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import LocalIconFont from '../../components/LocalIconFont';
import PublicLeft from '../../components/blog/PublicLeft';
import Zmage from 'react-zmage'

/**
 * 我们的首页
 */
class StartPage extends React.Component{

    constructor(props){
        super(props)

        this.state={
            hotArticles:[],
            bingImages:[],
            imagePrefix:"https://blog.breakpoint.vip/biying/",
            imageRequestUrl:"/HPImageArchive.aspx"
        }
    }

    /**
     *初始化我们的数据
     */
    componentDidMount(){
        const _this=this;
        FetchDoGet("/blog/v1/topic/getTop3Topic",function(response){
            //console.log(response)
            _this.setState({
                hotArticles:response
            })
        });

        FetchDoGet(this.state.imagePrefix+this.state.imageRequestUrl,function(response){
            //console.log(response)
            _this.setState({
                bingImages:response.images
            })
        },{
            format:'js',
            idx:-1,
            n:6
        },false);

    }

    render(){

        return(
            <BlogCommonBackGround
            left={
                <PublicLeft/>
            }
            extra={
                <div>
                    <Row gutter={[16, 24]}>
                        <Col span={24}>
                            <Card className="start-page-welcome">
                                <h3>博主寄语</h3>
                                <p>欢迎访问我的博客网站。</p>
                                <p>在这里，你可以学到一些编码的技术。</p>
                                <p>该网站设计以及实现均由博主自己实现，有任何问题，或者交流学习，请联系博主。</p>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={[16, 24]}>
                        {/* <Col span={24}>
                            <Card className="start-page-welcome">
                                <h3>必应高清壁纸</h3>
                                
                            </Card>
                        </Col> */}
                        {this.state.bingImages.map((item)=>{
                            return (
                                <Col span={8}>
                                    <Card
                                    style={{height:"300px"}}
                                    cover={<Zmage src={"https://cn.bing.com/"+item.url}/>}
                                    >
                                        <Card.Meta
                                        description={
                                            <div>
                                                <span>{item.copyright}</span>
                                                <span style={{marginLeft:"8px"}}>来自必应</span>
                                            </div>
                                        }
                                        />
                                    </Card>
                                </Col>
                            )
                        })}
                        
                        <Col span={24}>
                            <Card 
                            title={
                                <span>
                                    文章阅读排行榜&nbsp;&nbsp;
                                    <Tag color="#fa541c">TOP 6</Tag>
                                </span>
                            }
                            extra={
                                <Button type="primary"
                                href="/tech-talk"
                                >阅读更多文章</Button>
                            }
                            bordered={false}>
                                <List
                                itemLayout="vertical"
                                size="default"
                                // grid={{ gutter: 16, column: 2}}
                                pagination={false}
                                dataSource={this.state.hotArticles}
                                renderItem={(item,index)=>(
                                    <List.Item
                                    attr={index}
                                    // key={item.topicTitle}
                                    actions={[
                                        <Breadcrumb
                                                style={{marginTop:"24px"}}
                                                separator={" "}>
                                                    <Breadcrumb.Item>
                                                        <span style={{marginRight: "8px"}}>
                                                            <LocalIconFont type="icon-information"/>&nbsp;
                                                            {item.nickName}
                                                        </span>
                                                    </Breadcrumb.Item>
                                                    <Breadcrumb.Item>
                                                        <span style={{marginRight: "8px"}}>
                                                            <LocalIconFont type="icon-see"/>&nbsp;
                                                            {item.seeCount}人已围观
                                                        </span>
                                                    </Breadcrumb.Item>
                                                    <Breadcrumb.Item>
                                                        <span style={{marginRight: "8px"}}>
                                                            <LocalIconFont type="icon-riqi2"/>&nbsp;
                                                            {item.gmtModified}
                                                        </span>
                                                    </Breadcrumb.Item>
                                                </Breadcrumb>
                                    ]}
                                    >

                                        <List.Item.Meta
                                            // avatar={
                                            //     <Avatar src="http://file.breakpoint.vip/picture/blog/4f6bbb5c-2404-484a-a9f1-062317bc840e.jpg" />
                                            // }
                                            title={
                                                <span>
                                                    <a style={{marginLeft:"8px"}} href={`/tech-article?topicId=`+item.topicId}>
                                                        <span style={{fontSize:"18px"}}>{item.topicTitle}</span>
                                                    </a>
                                                </span>
                                            }
                                            description={
                                                    <div>
                                                        <Tag color="blue">{item.topicCategory}</Tag>
                                                        {item.topicDesc}
                                                        <Button type="link"
                                                        href={`/tech-article?topicId=`+item.topicId}
                                                        >阅读更多</Button>
                                                    </div>
                                            }
                                            />
                                        </List.Item>   
                                )}
                                />
                                
                            </Card>
                        </Col>
                    </Row>
                </div>
            }
            />
        )
    }
}

export default withRouter(StartPage)