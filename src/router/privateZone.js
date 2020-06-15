import React from 'react'
import LocalBackGround from './../commons/LocalBackGround'
import {FetchDoGet,FetchDoPost} from './../commons/Utils'
/**
 * 基本的公共的引入
 */
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Layout,Card,Button,Divider} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
//end

/**
 * 我们的个人主页
 */
class PrivateZone extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }


    componentDidMount(){
        
    }
 
    render(){
        return(
            <LocalBackGround content={
                <Card>

                </Card>
            }/>
        )
    }
}

export default  withRouter(PrivateZone)