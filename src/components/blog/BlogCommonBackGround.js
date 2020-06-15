import React from 'react'
import './BlogCommonBackGround.css'
import { withRouter } from 'react-router-dom'
import PublicHeader from './PublicHeader'
import BlogBottom from './BlogBottom'
import { PageHeader,Layout ,Row, Col,Card} from 'antd';



const { Header, Footer, Sider, Content } = Layout;

class BlogCommonBackGround extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){

        let leftSpan=this.props.leftSpan||7;
        let rightSpan=this.props.rightSpan||17;
        let rightOffset=this.props.rightOffset||1;
    
        return(
            <div>
                <Layout>
                    {/* <Header>Header</Header> */}
                    <PublicHeader/>
                    <Content style={{width:"93%",margin:"0px auto",minHeight:"600px"}}>
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
                    <BlogBottom/>
                    {/* <Footer>
                    <BlogBottom/>
                    </Footer> */}
                </Layout>            
            </div>
        )
    }
}

export default withRouter(BlogCommonBackGround)