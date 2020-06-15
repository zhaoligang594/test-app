import React from 'react'
import LocalBackGround from './../commons/LocalBackGround'
import {FetchDoGet,FetchDoPost} from './../commons/Utils'
import './UserInfo.css'

/**
 * 基本的公共的引入
 */
import { withRouter,Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Layout,Card,Button,Divider,Avatar,Descriptions} from 'antd';

//end



const gridStyle = {
    width: '50%',
    textAlign: 'center',
};


/**
 * 个人基本信息页展示
 */
class UserInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userData:null,
            user:{},
            role:{},
            other:{},
            depart:{},
        }
    }

      /**
       * 初始化我们的基本的数据操作
       */
      componentDidMount(){
        const _this=this;
            FetchDoGet("/block/v1/sys_user/getCurrentLoginUser",function(response){
                console.log("userinfo",response);
                _this.setState({
                    userData:response,
                    user:response.tbSystemUser,
                    role:response.tbSystemRole,
                    other:response.userOtherMessageInfo,
                    depart:response.tbSystemDepartment
                })
            });
      }

      
      render() {

        let {user,role,other,depart}=this.state;
        return ( 
            <LocalBackGround 
            content={
                <div>
                    <Card style={{width:"100%"}} 
                            bordered={false}
                            hoverable={true}
                            title="用户的个人信息"
                            extra={
                            <Link to={{
                                pathname:"edit_user_info",
                                state:{
                                    title:"编辑个人信息"
                                }

                            }}>
                                <Button type="primary" style={{float:"right"}}>
                                    编辑个人信息
                                </Button>
                            </Link>
                            }
                            >
                                <Card style={{width:"75%",float:"left"}}
                                bordered={false}
                                >
                                    <Descriptions
                                    layout="vertical" bordered
                                    >
                                        <Descriptions.Item label="用户名">{user.userName}</Descriptions.Item>
                                        <Descriptions.Item label="昵称">{user.userNickName}</Descriptions.Item>
                                        <Descriptions.Item label="性别">{user.userGender}</Descriptions.Item>
                                        <Descriptions.Item label="手机">{user.userPhone}</Descriptions.Item>
                                        <Descriptions.Item label="微信">{user.userWx}</Descriptions.Item>
                                        <Descriptions.Item label="邮件">{user.userEmail}</Descriptions.Item>
                                        <Descriptions.Item label="角色">{role.roleName}</Descriptions.Item>
                                        <Descriptions.Item label="所属部门">{depart.dName}</Descriptions.Item>
                                        <Descriptions.Item label="其他信息">
                                            {other.departLeader?"部门领导人":"无"}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="上次登陆时间">
                                            {user.lastLoginTime}
                                        </Descriptions.Item>
                                    </Descriptions>
                                    
                                 </Card>
                                <Card style={{width:"25%",float:"right"}}
                                // cover={<img src={user.userPhoto}/>}
                                bordered={false}
                                > 
                                    <Card
                                    hoverable
                                    style={{ width: 240,marginRight:"30px" }}
                                    cover={<img src={user.userPhoto}/>}
                                    >
                                        <Card.Meta title={user.userName} description={user.userPhone}/>


                                    </Card>
                                {/* <Avatar src={user.userPhoto}
                                size="large"
                                style={{width:"80px",height:"80px",marginLeft:"30%"}}
                                />
                                    
                                    style={{marginLeft:"30%",marginTop:"25px"}}
                                     /> */}
                                </Card>
                            </Card>

                            <Divider dashed={true}/>


                            <Card style={{width:"100%"}} 
                            bordered={false}
                            hoverable={true}
                            title="个人资产信息"
                            extra={<Button type="primary" style={{float:"right"}}>查看详情</Button>}
                            >

                            </Card>
                </div>
            }/>
        );
      }
}//end
export default withRouter(UserInfo)