import React from 'react'
import './BackBlogGround.css'
import { withRouter } from 'react-router-dom'
import BackHeader from './BackHeader'
import BackBottom from './BackBottom'
import { PageHeader,Layout ,Row, Col,Card} from 'antd';



const { Header, Footer, Sider, Content } = Layout;

/**
 * 我们的个人的空间
 */
class BackBlogGround  extends React.Component{

    render(){

        let leftSpan=this.props.leftSpan||7;
        let rightSpan=this.props.rightSpan||17;
        let rightOffset=this.props.rightOffset||1;

        return(
            <div>
                <Layout>
                    {/* <Header>Header</Header> */}
                    <BackHeader/>
                    <Content style={{width:"90%",margin:"15px auto",minHeight:"650px"}}>
                        {/* <PageHeader ghost={true}
                        title={this.props.pageTitle}
                        > */}
                            <Row gutter={16}>
                                <Col span={leftSpan} offset={0}>
                                    {this.props.left}
                                </Col>
                                <Col span={rightSpan} offset={0}>
                                    
                                        {this.props.extra}
                                 
                                </Col>
                            </Row>
                        {/* </PageHeader> */}
                    </Content>
                    <BackBottom/>
                    {/* <Footer>
                    <BlogBottom/>
                    </Footer> */}
                </Layout>            
            </div>
        )
    }

}

export default withRouter(BackBlogGround)