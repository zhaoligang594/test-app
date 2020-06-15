import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import "antd/dist/antd.css";
import { Menu,Tooltip } from "antd";
import {Link, withRouter} from "react-router-dom"
import {FetchDoPost,FetchDoGet,MessageAlter} from './../commons/Utils'

import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined
  } from "@ant-design/icons";

import './../commons/commons.css'


const { SubMenu } = Menu;

/**
 * 我们顶部的基本操作
 */
class HeaderPrivate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            open:false,
            collapsed: null,

        }

        this.propsCallBack=this.propsCallBack.bind(this)
    }

    handleClick = e => {
        console.log("click ", e);
        this.setState({
          current: e.key
        });
    };

    clickExit=e=>{
        console.log(e)
        //this.props.callback();
        FetchDoPost("/block/v1/sys_user/exit",function(response){
            console.log("exit",response)
            localStorage.setItem("user_info",null)
            MessageAlter("success","退出成功");
            window.location.href="/login"
        })
    }

    componentDidMount(){
        //const _this=this;
        /**
         * 设置初始的状态
         */
        this.setState({
            collapsed:this.props.collapsed
        })
        //FetchDoGet();
    }

    /**
     * 回掉我们的操作
     */
    propsCallBack(){
        this.setState({
            collapsed: !this.state.collapsed,
          });
        this.props.callback();
    }
    
    render(){
        let {avatar,name,collapsed}=this.props;

        console.log("name",name)


        console.log("header collapsed",collapsed)
        let {open} =this.state;

        return(
            <div className="header-class">
                <div className="header-trigger">
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.propsCallBack,
                })}
                </div>
                <div className="header-title">光网络建设管理平台</div>
                <div className="header-avater-private">
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        >
                            <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                {/* <SettingOutlined /> */}
                                <Avatar variant="circle" alt={name}
                                    style={{
                                        color: '#f56a00',
                                        backgroundColor: '#fde3cf',
                                        fontSize:"24px",
                                        lineHeight:"64px",
                                        width:"30px",
                                        height:"30px"
                                    }}
                                    src={this.props.avatar}
                                    alt="N"
                                    >
                                    {/* {name} */}
                                </Avatar>
                                </span>
                            }
                            >
                            {/* <Menu.ItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </Menu.ItemGroup> */}
                           {/* <Menu.Item key="setting:3">
                               <Link to="/user_info">
                                个人信息
                               </Link>
                            </Menu.Item> */}
                            <Menu.Item key="setting:4" onClick={this.clickExit}>退出</Menu.Item>
                            </SubMenu>
                    </Menu>
           

                </div>

                <div style={{float:"right",marginRight:"7px",fontSize:"24px",cursor:"pointer"}}>
                    <Tooltip placement="bottom" title="跳转到首页">
                        <Link 
                            style={{color:"white"}}
                            to={{
                            pathname:"/",
                            state:{
                              selectKey:"",
                              openKey:"",
                              title:"",
                              subTitle:""
                            }
                        }}>
                            <HomeOutlined />
                        </Link>
                    </Tooltip>
                </div>
            </div>
        )
    }
}

export default withRouter(HeaderPrivate) 