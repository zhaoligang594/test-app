import React from 'react'
import './AboutSite.css'
import { withRouter } from 'react-router-dom'
import {Card,Row,Divider,Timeline,Tag, Col} from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons';
import BlogCommonBackGround from '../../components/blog/BlogCommonBackGround'
import EvedaySay from '../../components/blog/EvedaySay';

/**
 * 关于本站的基本操作
 */
class AboutSite extends React.Component{

    constructor(props){
        super(props)
        this.state={

        }

    }

    render(){

        return(
            <BlogCommonBackGround
            left={
                <div>
                    
                    {/* className="site-message-left" */}
                        <Row gutter={[16,16]} >
                        <Col span={24}>
                            <Card title={"网站公告"}>
                                <p>
                                    亲！欢迎访问日常杂论网站
                                </p>
                                <p>日常杂论网站的主题是站主发表一些平时的日常学习过程中或者生活中有趣有意义的文章</p>
                               <p> 技术支持：Mr.Zhao</p>
                            </Card>
                        </Col>
                            <Col span={24}>
                                <Card title={"每日一句"}>
                                    <EvedaySay/>
                                 </Card>
                            </Col>   
                            <Col span={24}>
                                <Card title="站点信息">
                                <div>
                                <span>建站时间:</span>2017年
                                </div>
                                <div>
                                    <span>网站设计:</span>赵先生
                                </div>
                                <div>
                                    <span>技术支持:</span>赵先生
                                </div>
                                <div>
                                    <span>微信公众号:</span>扫描二维码，关注赵先生
                                </div>
                                <div>
                                <Card
                                bordered={false}
                                cover={ <img src={"http://file.breakpoint.vip/picture/blog/8bc55bf6-7359-43e4-9b36-d10d1163a1ae.jpg"}/>}
                                >
                                        <Card.Meta
                                        title={"分享以及交流技术"}
                                        description={"快来关注吧！"}
                                        />
                                </Card>
                                </div>
                                </Card>
                            </Col>
                            <Col span={24}>
                                <Card title={"友情链接"}>
                                    <span>
                                        <a target="_blank" href="https://blog.nowcoder.net/breakpoint">
                                            日常杂论
                                        </a>
                                    </span>
                                 </Card>
                            </Col>        
                        </Row>
                    
                </div>
            }

            extra={
                <Card
                title={"关于本站"}
                extra={""}
                >
                    <Row className="about-site-row">
                        <h3><Tag color="#FF4500">1</Tag>本站简介</h3>
                        <p>
                            首先欢迎访问我的个人博客，日常杂论，分享平时生活中的有趣，有意义的事情，
                            不定期的分享图片或者读书的文章，以及学习的技术和工作中遇到的问题。
                        </p>
                    </Row>
                    <Divider dashed/>
                    <Row className="about-site-row">
                        <h3><Tag color="#FF4500">2</Tag>技术框架</h3>
                        <p>
                            <div className="tag-item"><Tag color="#eb2f96">1</Tag>数据存储采用mysql数据库</div>
                            <div className="tag-item"><Tag color="#a0d911">2</Tag>后端服务采用SSM架构设计以及实现</div>
                            <div className="tag-item"><Tag color="#1890ff">3</Tag>前端采用React技术实现前端的页面</div>
                            <div className="tag-item"><Tag color="#722ed1">4</Tag>等等等</div>
                        </p>
                    </Row>
                    <Divider dashed/>
                    <Row className="about-site-row">
                        <h3><Tag color="#FF4500">3</Tag>网站时间线</h3>
                        <p>
                        <Timeline mode="alternate">
                        <Timeline.Item
                            label={"2020年4月"}
                            >
                                完善博客网站的展示以及修改文章的字体
                            </Timeline.Item>
                            <Timeline.Item
                            label={"2020年3月"}
                            >
                                用react重新构建我的博客网站
                            </Timeline.Item>
                            <Timeline.Item 
                            label={"2020年1月"}
                            color="green">
                                修改网站的已知的BUG.
                            </Timeline.Item>
                            <Timeline.Item 
                            label={"2019年"}
                            dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                                网站改版，改变网站的主题，修改为藏青色，增加站主笔记模块，论坛模块，淘宝优惠卷模块,系统集成markdown编辑器
                            </Timeline.Item>
                            <Timeline.Item 
                            label={"2018年"}
                            color="red">
                                虽然网站的外表没有什么改进，但是底层的技术支持换成了spring-boot+mybatis+redis and the like
                            </Timeline.Item>
                            <Timeline.Item
                            label={"2017年"}
                            >
                                网站原型搭建成功，与11月部署在阿里云服务器上
                            </Timeline.Item>
                            <Timeline.Item 
                            dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
                            label="lang lang ago">
                            那是一个遥远的故事，欲知详情，请联系作者！！！😄
                            </Timeline.Item>
                        </Timeline>
                        </p>
                    </Row>
                    <Divider dashed/>
                    <Row className="about-site-row">
                        <h3><Tag color="#FF4500">4</Tag>博客资源</h3>
                        <p>
                           <Card
                           bordered={false}
                           title={<span style={{fontSize:"14px"}}>网站设计图</span>}
                           cover={<img src={"http://file.breakpoint.vip/picture/microp/banner1.jpg"}/>}
                           >
                                <Card.Meta
                                title={"👆网站设计图"}
                                description={"最初的网站设计"}
                                />
                           </Card>
                        </p>
                        <p>
                        <Card
                           bordered={false}
                           title={<span style={{fontSize:"14px"}}>网站logo</span>}
                           cover={<img src={"http://file.breakpoint.vip/picture/blog/7c1d6340-0026-4a18-8d72-2fb1585b6ed4.png"}/>}
                           >
                                <Card.Meta
                                title={"👆网站logo"}
                                description={"2020年设计于家乡"}
                                />
                           </Card>
                        </p>
                    </Row>
                    {/* <Divider dashed/> */}


                </Card>
            }
            />
        )
    }

}

export default withRouter(AboutSite)