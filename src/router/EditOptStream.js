import React from 'react'
import { withRouter } from 'react-router-dom'
import LocalBackGround from './../commons/LocalBackGround'
import {FetchDoGet,FetchDoPost} from './../commons/Utils'
import { Layout,Card,Button,Divider,Form, Input, Select} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  EditOutlined,
} from '@ant-design/icons';
import TabbleUtils from '../components/TabbleUtils';
import LocalIconFont from '../components/LocalIconFont';

const { Option } = Select;


/**
 * 编辑我们的操作流
 */
class EditOptStream extends React.Component{

    //我们的数据交互
    formRef = React.createRef();

    



    render(){
        let optStreamRecord =this.props.location.state.optStreamRecord;
        console.log(optStreamRecord)
        return(
            <LocalBackGround 
            onBack={()=>{
                this.props.history.go(-1)//返回到上一页
            }}
            content={
                <Card>

                </Card>
            }/>//LocalBackGround
        )
    }

}

export default withRouter(EditOptStream)