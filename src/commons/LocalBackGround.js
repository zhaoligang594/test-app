import React from 'react'

//基本的公共导入模块 start
import './../commons/layoutcom.css'
import HeaderPrivate from './../components/HeaderPrivate'
import Bottom from './../components/Bottom'
import { withRouter, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css';
import {Layout,PageHeader,Divider,Breadcrumb} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ArrowLeft,
  LeftOutlined
} from '@ant-design/icons';
import MenuComponent from './../components/MenuCom'
import {FetchDoGet,FetchDoPost} from './../commons/Utils'


//基本的公共导入模块 end 

//定义常量
const { Header, Sider, Content} = Layout;
/**
 * 我们后台的公共模板
 * 用于后台的所有的页面
 */
class LocalBackGround extends React.Component{
    //构造函数
    constructor(props){
        super(props)
        this.state={
            collapsed: false,
            user:{},
            role:{},
            other:{},
        }
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };

    //初始化我们的数据
    componentDidMount(){
        const _this=this;
        let user_info=localStorage.getItem("user_info");
        //console.log("user_info",user_info)
        if("null"==user_info||null==user_info||undefined==user_info){
            //获取用户的登陆的信息
            FetchDoGet("/block/v1/sys_user/isLogin",function(response){
                localStorage.setItem("user_info",JSON.stringify(response))
                _this.setState({
                    user:response.tbSystemUser,
                    role:response.tbSystemRole,
                    other:response.userOtherMessageInfo
                })
            });  
         }else{
            let userinfo=JSON.parse(user_info);
            if(null!=userinfo){
                _this.setState({
                    user:userinfo.tbSystemUser,
                    role:userinfo.tbSystemRole,
                    other:userinfo.userOtherMessageInfo
                })
            }
        
         }//end else
       
    }
    //执行渲染我们的组件
    render(){

        let {user,role,other}=this.state;
        const breadcrumb=this.props.breadcrumb;
        //console.log("breadcrumb",breadcrumb)

        let data = this.props.location.state; 
        //console.log("this.props.location.state",data)
        if(null==data||undefined==data){
            data={}
            //console.log("this.props.location.query",this.props.location.query)
        }

        return( 
            <div>
                <HeaderPrivate name={user.userName} 
                callback={this.toggle} 
                avatar={user.userPhoto}
                // collapsed={collapsed}
                />
                    <Layout className="layout-header">
                        <Sider theme="light" trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <MenuComponent collapsed={this.state.collapsed}/>
                        </Sider>
                        <Layout className="site-layout">
                        {/* <Header className="site-layout-background" style={{ padding: 0 }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                            })}
                        </Header> */}
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '8px 8px 0px 8px',
                                padding: "0px",
                                minHeight: 680,
                                backgroundColor: "inherit"
                            }}
                        >
                            <PageHeader title={data.title}
                            subTitle={data.subTitle}
                            style={{padding:"15px",backgroundColor:"#ffffff"}}
                            // footer={<Bottom/>}
                            backIcon={<LeftOutlined />}
                            onBack={this.props.onBack}
                            // breadcrumb={{routes}}
                            >
                                {/* //定义我们自己的组件 */}
                                {this.props.content}
                            </PageHeader>
                            <Bottom/>
                        </Content>
                        </Layout>
                    </Layout>
            </div>
        )//end return

    }//end render
}

export default withRouter(LocalBackGround)