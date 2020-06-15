import React from 'react'
import './TechAritcle.css'
import { withRouter, Redirect } from 'react-router-dom'
import BlogCommonBackGround from '../../components/blog/BlogCommonBackGround'
import { FetchDoGet, GetQueryVariable } from '../../commons/Utils'
import ReactMarkdown from 'react-markdown/with-html'
import htmlParser from 'react-markdown/plugins/html-parser'
import CodeBlock from './../../components/blog/CodeBlock'
import HeadingBlock from './../../components/blog/HeadingBlock'
import ImageBlock from './../../components/blog/ImageBlock'
import { Card,Row ,Tag,Divider,Avatar,Breadcrumb, Button,Col} from 'antd'

import { MessageOutlined, LikeOutlined, StarOutlined ,HeartOutlined,
    UserOutlined,
    LineChartOutlined,BookOutlined} from '@ant-design/icons';
import LocalIconFont from '../../components/LocalIconFont'
import LeftArticleTitle from '../../components/blog/LeftArticleTitle'

const content = '## Heading One...\n\n## Heading Two...\n';

/**
 * 我们文章的详细页
 */
class TechAritcle extends React.Component{
    constructor(props){
        super(props)
        this.state={
            requestURL:"/blog/v1/topic/selectTopicInfoById",
            article:{},
            preArticle:{},
            nextArticle:{},
            hotArticle:[],
            leftArticleTitleKey:Math.random()
        }
    }

    /**
     * 初始化我们的数据
     */
    componentDidMount(){
        const _this=this;
        //let herf=window.location.href;
        let topicId=GetQueryVariable("topicId");
        console.log("topicId",topicId)
        FetchDoGet(_this.state.requestURL,function(response){
            if(null!=response.currentTopic){
                _this.setState({
                    article:response.currentTopic,
                    preArticle:response.preTopic,
                    nextArticle:response.nextTopic
                })
                window.document.title=response.currentTopic.topicTitle;

                _this.setState({
                    leftArticleTitleKey:Math.random()
                })

            }else{
                window.location.href="/"
            }
           
        },{topicId:topicId})

        //点击排行top 6

        

        FetchDoGet("/blog/v1/topic/getTop3Topic",function(response){
            _this.setState({
                hotArticle:response
            })
        })


        // FetchDoGet("/signatureForPublic",function(response){
        //     window.wx.config({
        //         debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        //         appId: response.appId, // 必填，公众号的唯一标识
        //         timestamp: response.timestamp, // 必填，生成签名的时间戳
        //         nonceStr: response.noncestr, // 必填，生成签名的随机串
        //         signature: response.signature,// 必填，签名
        //         jsApiList: ['updateTimelineShareData'] // 必填，需要使用的JS接口列表
        //       });

        //       window.wx.checkJsApi({
        //         jsApiList: ['updateTimelineShareData'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
        //         success: function(res) {
        //         // 以键值对的形式返回，可用的api值true，不可用为false
        //         // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
        //         console.log(res)
        //         }
        //       });
    
        //     window.wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
        //         console.log("skdhaksk")
        //         window.wx.updateTimelineShareData({ 
        //           title: _this.state.article.topicTitle, // 分享标题
        //           desc: _this.state.article.topicDesc, // 分享描述
        //           link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        //           imgUrl: 'http://file.breakpoint.vip/picture/blog/5878e918-4737-496b-bd02-7e9826cbfc96.png', // 分享图标
        //           success: function () {
        //             // 设置成功
        //           }
        //         })
        //       }); 
        // },{
        //     url:window.location.href
        // },true,false);

       
    }

    render(){

        return(
            <BlogCommonBackGround
            leftSpan={7}
            rightSpan={17}
            left={
                <Row gutter={[16,16]}>
                    <Col span={24}>
                        <LeftArticleTitle key={this.state.leftArticleTitleKey}/>
                    </Col>
                    <Col span={24}>
                        <Card
                        title={"阅读排行"}
                        >
                        {this.state.hotArticle.map((item,index)=>{
                            return (    
                            <Col
                            key={item.topicId}
                            span={24}>
                                    <span>
                                        <Tag color={(index<=2)?"#FF4040":"#ABABAB"}>{index+1}</Tag>
                                        <span>
                                            <a href={`/tech-article?topicId=`+item.topicId}
                                            style={{color:"black"}}>
                                                {item.topicTitle}
                                            </a>
                                        </span>
                                    </span>
                            </Col>
                                
                            )
                        })}
                    
                        </Card>
                    </Col>
                </Row>
            }
            extra={
                <Card 
                title={
                    <div style={{fontWeight:"bold",fontSize:"18px"}}>
                        博客日记
                    </div>
                }
                extra={
                    <div>
                        您现在的位置：技术杂谈>博客日记
                        {/* <span>分享到朋友圈</span> */}
                    </div>
                }
                bordered={false}>
                    <Row>
                        <h1>{this.state.article.topicTitle}</h1>
                    </Row>
                    <Row>
                        <span>
                            <Breadcrumb separator={" "}>
                                <Breadcrumb.Item>
                                    <Avatar
                                    src="http://file.breakpoint.vip/picture/blog/4f6bbb5c-2404-484a-a9f1-062317bc840e.jpg"
                                    />
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    {this.state.article.nickName}
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    {this.state.article.gmtModified}
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    【博客日记】
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    {this.state.article.seeCount}人已围观
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <Tag color="blue">{this.state.article.topicCategory}</Tag>
                                </Breadcrumb.Item>
                                
                            </Breadcrumb>
                        </span>
                    </Row>
                    <Row style={{margin:"15px auto"}}>
                        <div style={{width:"100%",padding:"10px",
                        fontSize:"15px",
                        backgroundColor:"#EEE5DE"
                        }}>
                            <span style={{fontWeight:"bold",color:"black",marginRight:"15px"}}>简介</span>
                            <span>{this.state.article.topicDesc}</span>
                        </div>
                    </Row>
                    <div className="artical-message">
                        <ReactMarkdown
                        // astPlugins={[parseHtml]}
                        escapeHtml={false}
                        source={this.state.article.topicText}
                        //source={content}
                        headingTopOffset={80}
                        renderers={{
                            code: CodeBlock,
                            heading: HeadingBlock,
                            image:ImageBlock,
                            imageReference:ImageBlock
                        }}
                        />
                    </div>
                    <Row className="public-number-core">
                        <Col span={6}>
                            <img src="http://file.breakpoint.vip/picture/blog/8bc55bf6-7359-43e4-9b36-d10d1163a1ae.jpg"/>
                        </Col>
                        <Col span={18}>
                            <p>
                                扫描关注《两个菜鸟程序猿》微信公众号，第一时间技术动态
                            </p>
                            <p>
                                本文地址：
                                {
                                    (window.location.href.indexOf('#'))>0?
                                    window.location.href.substring(0,window.location.href.indexOf('#'))
                                    :window.location.href
                                }
                            </p>
                        </Col>
                    </Row>
                    <Row className="nextinfo">
                        <p>上一篇
                            <a href={`/tech-article?topicId=`+this.state.preArticle.topicId}
                                         style={{color:"black"}}>
                                        {this.state.preArticle.topicTitle}
                            </a>
                        </p>
                        <p>下一篇
                            <a href={`/tech-article?topicId=`+this.state.nextArticle.topicId}
                                         style={{color:"black"}}>
                                        {this.state.nextArticle.topicTitle}
                            </a>
                        </p>
                    </Row>
                </Card> 
            }
            />
        )
    }

}

export default withRouter(TechAritcle)