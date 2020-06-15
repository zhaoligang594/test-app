import React from 'react'
import './ImageMagage.css'
import { withRouter } from 'react-router-dom'
import {Card,Row,Col,Tag,Avatar,Button,Upload} from 'antd'
import BackBlogGround from './BackBlogGround'
import LocalIconFont from '../../components/LocalIconFont'
import { AjaxDoPost,FetchDoUploadFile } from '../../commons/Utils'
import TabbleUtils from '../../components/TabbleUtils'
import Zmage from 'react-zmage'
import { TextField } from '@material-ui/core'

const columns = [
    {
        title: 'ID',
        width: 30,
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
        // ellipsis:true,
        align:"tenter"
    },
    {
        title: '图片',
        width: 80,
        dataIndex: 'type',
        align:"tenter",
        render:(text, record, index) => {
            
            return(
                // <Avatar src={record.aPhoto}/>
                <Zmage
                style={{width:"50px"}}
                 src={record.aPhoto}/>
            )
        }
    },
    {
        title: '描述',
        width: 80,
        dataIndex: 'aMsg',
        align:"tenter"
    },
    {
        title: '位置',
        width: 80,
        dataIndex: 'aLocaltion',
        // ellipsis:true,
        align:"tenter"
    },
    // {
    //     title: '是否展示',
    //     width: 80,
    //     dataIndex: 'type',
    //     align:"tenter",
    //     render:(text, record, index) => {
            
    //         return(
    //             (record.type==0)?(
    //                 <Tag color="green">已发布</Tag>
    //             ):(
    //                 <Tag color="red">未发布</Tag>
    //             )
    //         )
    //     }
    // },
    {
        title: '发布时间',
        width: 120,
        dataIndex: 'gmtCreate',
        align:"tenter"
    },
    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        align:"tenter",
        width: 120,
        render: (text, record, index) => {
            //console.log("row",record);
            //const _this=this;
            return (
                <div style={{height:"40px"}}>
                    <span style={{float:"left",width:"45%",marginLeft:"3px"}}>
                        <Button type="primary"
                        ghost={false} 
                        style={{backgroundColor:"#389e0d",border:"none",float:"left"}}
                        icon={<LocalIconFont type="icon-edit" />}
                        // onClick={()=>{
                        //     //const _this=this;
                        //     AjaxDoPost("/v1/liuyan/publicComments",(response)=>{
                        //         window.location.href='/comments-site-manage'
                        //     },
                        //     {
                        //         commentId:record.id
                        //     })
                        // }}
                        >
                            操作
                        </Button>  
                    </span>
                    {/* <span style={{float:"left",width:"45%",marginLeft:"4px"}}>
                    <Button type="danger"
                        ghost={false} 
                        style={{backgroundColor:"#f44336",border:"none",float:"left"}}
                        icon={<LocalIconFont type="icon-edit" />}
                        >
                        冻结</Button>
                    </span> */}
                </div>
            )
        },
    },
];
/**
 * 我们照片的基本管理
 */
class ImageMagage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            requestUrl:"/blog/v1/album/selectPhotos",
            pictrueUrl:"",
            oriFileName:'',
            msg:"",
            location:"",
            tableKey:Math.random()
        }

    }

    render(){

        const _this=this;

        return(
            <BackBlogGround
            leftSpan={0}
            rightSpan={24}
            extra={
                <Row gutter={[16,16]}>
                    <Col span={24}>
                        <Card
                        className="image-manage-upload-image"
                        title={"上传图片"}
                        >
                            <div className="item">
                                <Zmage
                                style={{width:"400px"}}
                                 alt="待上传照片" src={this.state.pictrueUrl}/>
                            </div>
                            <div className="item">
                                <Upload showUploadList={false} customRequest={(option)=>{
                                    const formData = new FormData(); formData.append('file',option.file);
                                    //上传文件
                                    FetchDoUploadFile("/blog/v1/file/imageUpload4React",formData,function(response){ console.log(response)
                                    _this.setState({ pictrueUrl:response.fileName, oriFileName:response.oriFileName
                                    }) })
                                    }} >
                                        <Button >
                                            选择照片
                                        </Button>
                                </Upload>
                                <div className="item">
                                    <TextField
                                    label="照片描述"
                                    fullWidth
                                    variant="outlined"
                                    color="secondary"
                                    value={this.state.msg}
                                    onChange={(event)=>{
                                        this.setState({
                                            msg:event.target.value
                                        })
                                    }}
                                    />
                                </div>
                                <div className="item">
                                    <TextField
                                    label="位置信息"
                                    fullWidth
                                    variant="outlined"
                                    color="secondary"
                                    value={this.state.location}
                                    onChange={(event)=>{
                                        this.setState({
                                            location:event.target.value
                                        })
                                    }}
                                    />
                                </div>
                                <div className="item">
                                    <Button type="primary"
                                    onClick={()=>{
                                        const _this=this;
                                        let data={
                                            photoPath:this.state.pictrueUrl,
                                            msg:this.state.msg,
                                            location:this.state.location
                                        }

                                        AjaxDoPost("/blog/v1/album/addPhoto",(response)=>{
                                            _this.setState({
                                                photoPath:"",
                                                msg:"",
                                                location:"",
                                                tableKey:Math.random()
                                            })
                                        },
                                        data);
                                    }}
                                    >
                                        保存
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card 
                        title={"照片的管理"}
                        extra={
                            <div>您的位置：网站相册的维护</div>
                        }
                        >

                    <TabbleUtils
                    key={this.state.tableKey}
                    columns={columns}
                    // searchParams={}
                    requestUrl={this.state.requestUrl}
                    />
                            
                        </Card>
                    </Col>
                </Row>
            }
            />
        )
    }

}

export default withRouter(ImageMagage)