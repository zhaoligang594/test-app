import React from 'react'
import './AuthorLeft.css'
import { withRouter } from 'react-router-dom'
import {Card,Avatar,Divider,Row,Tag,Badge} from 'antd'

import {
    ApartmentOutlined,
    SendOutlined,
    EnvironmentOutlined,
    ManOutlined
} from '@ant-design/icons';

/**
 * 作者的个人简介
 */
class AuthorLeft extends React.Component{

    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){

        return(
            <Card className="private-message">
                <Row gutter={[16,16]}>  
                        <Avatar
                         className="avatar"
                         src="http://file.breakpoint.vip/picture/blog/4f6bbb5c-2404-484a-a9f1-062317bc840e.jpg"
                         />      
                </Row>
                <Row>
                    <div className="avatar-user">
                      <h1>Mr.Zhao</h1>
                      <span>优术 明道 取势</span>
                    </div>
                </Row>
                <Row>
                    <span><ManOutlined />&nbsp;男</span>      
                </Row>
                <Row>
                    <span><SendOutlined/>&nbsp;Java 研发工程师、在读研究生</span>      
                </Row>
                <Row>
                    <span><EnvironmentOutlined/>&nbsp;中国.北京</span>
                </Row>
                <Divider dashed=""/>
                <Row style={{fontSize:"16px",fontWeight:"bold"}}>标签</Row>
                <Row>
                   <p className="user-message-p">
                       <Tag color="red">喜欢旅游</Tag>
                       <Tag color="blue">喜欢运动</Tag>
                       <Tag color="magenta">90后理工男</Tag>
                       <Tag color="orange">Java 研发工程师</Tag>
                       <Tag color="gold">在读研究生</Tag>
                       <Tag color="purple">...</Tag>
                   </p>
                </Row>
                <Divider dashed=""/>
                <Row style={{fontSize:"16px",fontWeight:"bold"}}>个人技术公众号</Row>
                <Row>
                    <p className="user-message-p">
                        <img src="http://file.breakpoint.vip/picture/blog/4626ba55-8725-4f1b-819d-5bbe58fc6edc.jpg"/>
                    </p>
                </Row>

            </Card>
        )
    }

}

export default withRouter(AuthorLeft)