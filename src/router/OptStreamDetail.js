import React from 'react'
import { withRouter } from 'react-router-dom'
import LocalBackGround from './../commons/LocalBackGround'
import {FetchDoGet,FetchDoPost} from './../commons/Utils'
import { Layout,Card,Button,Divider,Form, Input, Select,Descriptions,Tag,Steps,Timeline} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  EditOutlined,
  DownOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';
import TabbleUtils from '../components/TabbleUtils';
import LocalIconFont from '../components/LocalIconFont';


/**
 *查看操作流的的详情页
 */
class OptStreamDetail extends React.Component{

    render(){
        let optStreamRecord =this.props.location.state.optStreamRecord;
        console.log(optStreamRecord)
        return(
            <LocalBackGround 
            onBack={()=>{
                this.props.history.go(-1)//返回到上一页
            }}
            content={
                <div>
                    <Card
                    bordered={false}
                    title={"操作流ID:"+optStreamRecord.optId}
                    extra={
                        <Button type="primary">
                            <EditOutlined/>
                            编辑
                        </Button>
                    }
                    >
                        <Descriptions title={""}>
                            <Descriptions.Item label="创建者">{optStreamRecord.creatorName}</Descriptions.Item>
                            <Descriptions.Item label="操作流名称">{optStreamRecord.optName}</Descriptions.Item>
                            <Descriptions.Item label="操作流版本">{optStreamRecord.optVersion}</Descriptions.Item>
                            <Descriptions.Item label="操作流类别">{optStreamRecord.optTypename}</Descriptions.Item>
                            <Descriptions.Item label="状态">{
                                (optStreamRecord.optEnable==0)?(
                                    <Tag color="green">可用</Tag>
                                ):(
                                    <Tag color="red">不可用</Tag>
                                )
                            }</Descriptions.Item>
                            <Descriptions.Item label="创建时间">{optStreamRecord.gmtCreate}</Descriptions.Item>
                            <Descriptions.Item label="修改时间">{optStreamRecord.gmtModified}</Descriptions.Item>
                            <Descriptions.Item label="描述">{optStreamRecord.optDesc}</Descriptions.Item>
                    
                        </Descriptions>
                    </Card>
                    <Divider/>
                    <Card
                    bordered={false}
                    title={"操作流详情流程"}
                    extra={
                        <Button type="primary">
                            <EditOutlined/>
                            编辑
                        </Button>
                    }
                    >
                        <Timeline mode="left">
                            <Timeline.Item label={
                                <div style={{fontSize:"18px"}}>
                                    第一步
                                </div>
                            } dot={
                                <ArrowDownOutlined
                                style={{fontSize:"24px",cursor:"pointer",color:"#a0d911"}}
                                 />
                            }>{
                                <div style={{fontSize:"18px"}}>
                                    第一步
                                </div>
                            }</Timeline.Item>
                            <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
                            <Timeline.Item>Technical testing</Timeline.Item>
                            <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                        </Timeline>
                    </Card>
                </div>
            }/>//LocalBackGround
        )
    }


}

export default withRouter(OptStreamDetail)