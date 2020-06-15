import React from 'react'
import './PrivateZone.css'
import { withRouter } from 'react-router-dom'
import BackBlogGround from './BackBlogGround'
import BackBlogTopic from '../../components/blog/BackBlogTopic'
import { Row, Col,Card, Button } from 'antd'

class PrivateZone extends React.Component{

    constructor(props){
        super(props)
        this.state={}

    }

    render(){

        return(
            <BackBlogGround
            leftSpan={0}
            rightSpan={24}
            extra={
                <Row gutter={[16,16]}>
                    <Col span={24}>
                        <Card 
                        title={"博主文章"}
                        extra={
                            <div>您的位置：博主文章</div>
                        }
                        >
                            <BackBlogTopic/>
                        </Card>
                    </Col>
                </Row>
            }
            />
        )
    }

}

export default withRouter(PrivateZone)