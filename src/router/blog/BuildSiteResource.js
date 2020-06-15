import React from 'react'
import './BuildSiteResource.css'
import { withRouter } from 'react-router-dom'
import BlogCommonBackGround from '../../components/blog/BlogCommonBackGround'
import {Card,Avatar,Divider,Row,Col,Tag,Badge} from 'antd'

import AuthorLeft from './../../components/blog/AuthorLeft'

class BuildSiteResource extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    // 执行执行我们的操作
    render(){

        return(
            <BlogCommonBackGround
            left={
                <AuthorLeft/>
            }
            rightTitle={"个人技能"}
            extra={
                <Row gutter={[16,16]}>
                    <Col span={24}>
                        <Card title={"建站步骤"}>

                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title={"建站资源"}>
                            <div className="build-site-resource-parent">
                                <div>
                                    <span className="item-title"><Tag color="#eb2f96">1</Tag>华为云资源</span>
                                    <p className="item-p">
                                        华为云最大的特色是新用户使用的时候。每个用户可以购买3台4G 2M的云服务器，每台499元，非常的合适。详情请看下面的介绍。点击图片，就可以了解详情哈，直接购买更加的优惠！！！
                                    </p>
                                    <p className="item-p">
                                        如果经过学生认证的话，还会有更大的惊喜哈！！！
                                    </p>
                                    <div className="message">
                                        <div>
                                        <a target="_blank" href="https://activity.huaweicloud.com/discount_area_v5/index.html?fromacct=9f8c10da-05fb-46ab-89d8-74a302b57d76&utm_source=aHc0MDQ3ODM5NQ==&utm_medium=cps&utm_campaign=201905">
                                            <img src="http://file.breakpoint.vip/picture/blog/23140bc2-ac29-4650-a333-1b0c5bced9a0.jpg"/>
                                        </a>
                                        </div>
                                        <div>
                                        <a target="_blank" href="https://activity.huaweicloud.com/domainwebsite_promotion/index.html?fromacct=9f8c10da-05fb-46ab-89d8-74a302b57d76&utm_source=aHc0MDQ3ODM5NQ==&utm_medium=cps&utm_campaign=201905">
                                            <img src="http://file.breakpoint.vip/picture/blog/d4cbafdb-c5de-434a-bbf9-726d4b25a6ca.jpg"/>
                                        </a>
                                        </div>
                                        <div>
                                        <a target="_blank" href="https://activity.huaweicloud.com/2020dbs_promotion/index.html?fromacct=9f8c10da-05fb-46ab-89d8-74a302b57d76&utm_source=aHc0MDQ3ODM5NQ==&utm_medium=cps&utm_campaign=201905">
                                            <img src="http://file.breakpoint.vip/picture/blog/678115ad-376f-4573-89a9-32b4733f241b.png"/>
                                        </a>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div>
                                    <span className="item-title"><Tag color="#a0d911">2</Tag>腾讯云资源</span>
                                    <p className="item-p">
                                        华为云最大的特色是新用户使用的时候。每个用户可以购买3台4G 2M的云服务器，每台499元，非常的合适。详情请看下面的介绍。点击图片，就可以了解详情哈，直接购买更加的优惠！！！
                                    </p>
                                    <p className="item-p">
                                        如果经过学生认证的话，还会有更大的惊喜哈！！！
                                    </p>
                                    <div className="message">
                                        <div>
                                        <a target="_blank" href="https://activity.huaweicloud.com/discount_area_v5/index.html?fromacct=9f8c10da-05fb-46ab-89d8-74a302b57d76&utm_source=aHc0MDQ3ODM5NQ==&utm_medium=cps&utm_campaign=201905">
                                            <img src="http://file.breakpoint.vip/picture/blog/23140bc2-ac29-4650-a333-1b0c5bced9a0.jpg"/>
                                        </a>
                                        </div>
                                        <div>
                                        <a target="_blank" href="https://activity.huaweicloud.com/domainwebsite_promotion/index.html?fromacct=9f8c10da-05fb-46ab-89d8-74a302b57d76&utm_source=aHc0MDQ3ODM5NQ==&utm_medium=cps&utm_campaign=201905">
                                            <img src="http://file.breakpoint.vip/picture/blog/d4cbafdb-c5de-434a-bbf9-726d4b25a6ca.jpg"/>
                                        </a>
                                        </div>
                                        <div>
                                        <a target="_blank" href="https://activity.huaweicloud.com/2020dbs_promotion/index.html?fromacct=9f8c10da-05fb-46ab-89d8-74a302b57d76&utm_source=aHc0MDQ3ODM5NQ==&utm_medium=cps&utm_campaign=201905">
                                            <img src="http://file.breakpoint.vip/picture/blog/678115ad-376f-4573-89a9-32b4733f241b.png"/>
                                        </a>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </Card>
                    </Col>
                </Row>
            }
            />
        )
    }
}

export default withRouter(BuildSiteResource)