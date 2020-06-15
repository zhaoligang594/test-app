import React from 'react'

import {Menu,Icon} from 'antd';
import 'antd/dist/antd.css'; 
//请求的基本操作
import {FetchDoGet,FetchDoPost} from './../commons/Utils'
import {Link, withRouter} from 'react-router-dom'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import LocalIconFont from './../components/LocalIconFont'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


/**
 * 我们的menu的组件
 */
class MenuComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            current:1,
            parentMenu:[],
            collapsed:null//菜单的展示问题

        }
        this.menuOnOpenHandle=this.menuOnOpenHandle.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.subMenuClick=this.subMenuClick.bind(this)
    }


    componentDidMount(){
        const _this=this;
        this.setState({
          collapsed:this.props.collapsed
        })
        FetchDoGet("block/v1/menu/getMenuByLoginUser",function (response) {
            _this.setState({
                parentMenu:response
            })
            //console.log(response); 
        });
    }

    getInitialState() {
        return {
          current: '1',
        };
      }
      handleClick(e) {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }

      menuOnOpenHandle(e){
          //console.log("menuOnOpenHandle",e)
      }

      subMenuClick(e){
        //console.log("subMenuClick",e)
        const _this=this;
        let {parentMenu}=_this.state;
      }

    render(){
        let data = this.props.location.state; 

        // console.log("data",data);
        // this.props.setTitleCallBack(this.props.location.state)
        //console.log("this.props.collapsed",this.props.collapsed)
        if(undefined==data||null==data){
          data={
            openKey:"",
            selectKey:""
          }
        }

        let {parentMenu} =this.state;
        // console.log(parentMenu)
        // console.log("parentMenu",parentMenu);
        return(
            <Menu theme="light" onClick={this.handleClick}
            defaultOpenKeys={[data.openKey]}
            selectedKeys={[data.selectKey]}
            mode="inline"
            >
                {parentMenu.map((item,index)=>{
                    return (
                      (item.menuUrl!=null&&item.menuUrl!="#")?(
                        <Menu.Item key={item.menuId}>
                          {/* <UserOutlined /> */}
                          <Link to={
                            {
                              pathname:item.menuUrl==null?"#":item.menuUrl,
                              state:{
                                selectKey:item.menuId,
                                openKey:item.menuId,
                                title:item.menuName,
                                subTitle:"",
                                
                              }
                            }
                          }>
                          <LocalIconFont type={item.mIcon}/>
                          <span>{item.menuName}</span>
                          </Link>
                      
                          </Menu.Item>
                      ):(
                        <SubMenu key={item.menuId} title={<span><LocalIconFont type={item.mIcon}/><span>{item.menuName}</span></span>} 
                        onTitleClick={this.subMenuClick}>
                          {(null!=item.childList&&undefined!=item.childList)?(
                            item.childList.map((cItem)=>{
                            return <Menu.Item key={cItem.menuId}>
                              <Link to={{
                                pathname:cItem.menuUrl==null?"#":cItem.menuUrl,
                                state:{
                                  selectKey:cItem.menuId,
                                  openKey:item.menuId,
                                  title:item.menuName,
                                  subTitle:cItem.menuName,
                                  
                                }
                              }}>
                              <LocalIconFont type={cItem.mIcon}/>
                              {cItem.menuName}
                              </Link>
                              </Menu.Item>
                            })
                          ):("")}
                    </SubMenu>
                      )
                    )
                })}
          </Menu>
        )
    }
}

export default  withRouter(MenuComponent)