import React from 'react'
import { withRouter ,Link} from 'react-router-dom'
import { Result, Button } from 'antd';
import PublicHeader from '../../components/blog/PublicHeader';
import BlogBottom from '../../components/blog/BlogBottom';
import { PageHeader,Layout ,Row, Col,Card} from 'antd';
const { Header, Footer, Sider, Content } = Layout;

/**
 * 
 */
class FileNotFound extends React.Component{

    constructor(props){
        super(props)
        this.state={

        }

    }

    render(){

        return(
            <div>
                <Layout>
                    {/* <Header>Header</Header> */}
                    <PublicHeader/>
                    <Content style={{width:"88%",margin:"0px auto",minHeight:"600px"}}>
                        <PageHeader ghost={true}>
                            <Card>
                            <Result
                                status="404"
                                title="404"
                                subTitle="对不起，你访问的资源消失了！"
                                extra={<Button type="primary">
                                    <Link to={{
                                        pathname:"/",
                                        state:{
                                            title:"首页",
                                        }
                                    }}>回到首页</Link>
                                    </Button>}
                            />,
                            </Card>
                        </PageHeader>
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

export default withRouter(FileNotFound)