import React from 'react'
import LocalBackGround from './../commons/LocalBackGround'
import {FetchDoGet,FetchDoPost,FetchDoUploadFile} from './../commons/Utils'
/**
 * 基本的公共的引入
 */
import Bottom from './../components/Bottom'
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Layout,Card,Button,Divider,Tabs, PageHeader,Avatar,Upload,Row, Col,Input} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UploadOutlined
} from '@ant-design/icons';
//end


const itemCardStyle={
    width:"50%",
    float:"left"
}

const { TabPane } = Tabs;

/**
 * 我们的个人主页
 */
class EditUserInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userData:null,
            user:{},
            role:{},
            other:{},
            avater:null
        }
    }

    /**
     * 初始化我们的数据
     */
    componentDidMount(){
        const _this=this;
        /**
         * 获取当前登陆的用户
         */
        FetchDoGet("/block/v1/sys_user/getCurrentLoginUser",function(response){
            _this.setState({
                userData:response,
                user:response.tbSystemUser,
                role:response.tbSystemRole,
                other:response.userOtherMessageInfo,
                avater:response.tbSystemUser.userPhoto
            })
        });
        
    }

    render(){
        let history=this.props.history;
        const _this=this;
        let span=18
        let gutter=[8,15]
        return( 
            <LocalBackGround
            onBack={()=>{history.go(-1)}}
             content={
                <div>
                    <Card style={{width:"100%"}}>
                        <Tabs tabPosition="left"
                        size="large"
                        type="line"
                        >
                            <TabPane tab="基本设置" key="1">
                                <PageHeader title={""}>
                                    <Card style={{width:"100%"}}
                                    bordered={false}
                                    title={"基本设置"}
                                    extra={
                                        <Button type="primary">更新基本信息</Button>
                                    }
                                    >
                                        <Card style={{width:"50%",float:"left"}}
                                        bordered={false}
                                        >
                                            <Row gutter={gutter}>
                                                <Col  span={span}>用户名<Input disabled></Input></Col>
                                            </Row>
                                            <Row gutter={gutter}>
                                                <Col  span={span}>昵称<Input id="nickName" placeholder="昵称"></Input></Col>
                                            </Row>
                                            <Row gutter={gutter}>
                                                <Col  span={span}>手机<Input id="phone" placeholder="手机"></Input></Col>
                                            </Row>
                                            <Row gutter={gutter}>
                                                <Col  span={span}>邮箱<Input id="phone" placeholder="手机"></Input></Col>
                                            </Row>
                                            <Row gutter={gutter}>
                                                <Col  span={span}>性别<Input id="phone" placeholder="手机"></Input></Col>
                                            </Row>
                                            <Card.Meta title={"*诺想更新其他信息*"} description={"其他信息有管理员或者部门领导者更新"}/>
                                        </Card>
                                        <Card style={{width:"50%",float:"right",textAlign:"center"}}
                                        bordered={false}
                                        >
                                            <Avatar size="large"
                                                style={{height:"80px",width:"80px",clear:"both"}}
                                                src={this.state.avater}
                                            />
                                            <br/>
                                            <br/>
                                            <Upload 
                                            showUploadList={false}
                                            customRequest={(option)=>{
                                                const formData = new FormData();
                                                formData.append('file',option.file);
                                                //上传文件
                                                FetchDoUploadFile(null,formData,function(response){
                                                    console.log(response)
                                                    _this.setState({
                                                        avater:response.fileName,
                                                        oriFileName:response.oriFileName
                                                    })
                                                })
                                            }}
                                            >
                                                <Button>
                                                <UploadOutlined /> 上传头像
                                                </Button>
                                            </Upload>
                                        </Card>
                                    </Card>
                                </PageHeader>  
                            </TabPane>
                            <TabPane tab="设置密码" key="2">
                                <PageHeader title={""}>
                                    <Card style={{width:"100%"}}
                                    bordered={false}
                                    title={"设置密码"}
                                    >
                                        <Row gutter={gutter}>
                                                <Col  offset={8} span={8}>原密码<Input></Input></Col>
                                        </Row>
                                        <Row gutter={gutter}>
                                                <Col  offset={8} span={8}>新密码<Input></Input></Col>
                                        </Row>
                                        <Row gutter={gutter}>
                                                <Col  offset={8} span={8}>确认新密码<Input></Input></Col>
                                        </Row>
                                        <Row gutter={gutter}>
                                                <Col  offset={8} span={8}><Button type="primary">确认更新信息</Button></Col>
                                        </Row>


                                    </Card>
                                </PageHeader>
                            </TabPane>
                        </Tabs>
                    </Card>
                </div>
            }/>
        )
    }
}

export default  withRouter(EditUserInfo)