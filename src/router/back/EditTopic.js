import React from 'react'
import './EditTopic.css'
import { withRouter, Redirect } from 'react-router-dom'
import BackBlogGround from './BackBlogGround'
import Editor from 'for-editor'
import { Input, Row ,Col, Card, Button} from 'antd'
import { TextField } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';
import { FetchDoUploadFile ,FetchDoPost, MessageAlter, FetchDoGet, AjaxDoPost} from '../../commons/Utils'
import $ from 'jquery'

/**
 * 编辑我们的文章
 */
class EditTopic extends React.Component{

    constructor(props){
        super(props)
        this.state={
            markdownvalue:"",
            topicTypes:[],
            topicType:""
        }
        this.$vm = React.createRef()
    }

    /**
     * 初始化我们的数据
     */
    componentDidMount(){
        this.setState({
            topicTypes:[
                {
                    value: 'Java',
                    label: 'Java',
                  },
                  {
                    value: 'Spring',
                    label: 'Spring',
                  },
                  {
                    value: 'Mybatis',
                    label: 'Mybatis',
                  },
                  {
                    value: '前端代码',
                    label: '前端代码',
                  },
                  {
                    value: '每天一个leetcode',
                    label: '每天一个leetcode',
                  },
                  {
                    value: '数据库',
                    label: '数据库',
                  },
                  {
                    value: '数据结构',
                    label: '数据结构',
                  },
                  {
                    value: '生活笔记',
                    label: '生活笔记',
                  },
                  {
                    value: '技术笔记',
                    label: '技术笔记',
                  },
                  {
                    value: '站点维护日志',
                    label: '站点维护日志',
                  }
            ] 
        })

        //FetchDoGet("/blog/v1/statistic/statisticTopic")

    }
    render(){

        return(
            <BackBlogGround
            leftSpan={0}
            rightSpan={24}
            extra={
                <Card
                title={"新建文章"}
                extra={
                    <Button type="primary"
                    onClick={()=>{
                        let postData={
                            topicText:this.state.markdownvalue,
                            topicName:$("#topicName").val(),
                            topicDesc:$("#topicDesc").val(),
                            topicType:this.state.topicType
                        }
                        console.log(postData)
                        AjaxDoPost("/blog/v1/topic/saveForReact",(response)=>{
                            MessageAlter("success",response)
                            window.location.href="/private-zone"
                        },postData)
                    }}
                    >
                        保存
                    </Button>
                }
                >
                    <Row gutter={[16,16]}>
                        <Col span={24}>
                            <TextField 
                            fullWidth
                            id="topicName" 
                            label="文章标题" 
                            variant="outlined" />
                        </Col>
                        <Col span={24}>
                            <TextField 
                            fullWidth
                            multiline
                            rowsMax="4"
                            id="topicDesc" 
                            label="文章简介" 
                            variant="outlined" />
                        </Col>
                        <Col span={24}>
                            <TextField 
                            fullWidth
                            select
                            helperText="请选择文章的类别"
                            id="topicDesc" 
                            value={this.state.topicType}
                            onChange={(event)=>{
                                this.setState({
                                    topicType:event.target.value
                                })
                            }}
                            label="文章类别" 
                            variant="outlined">
                                {this.state.topicTypes.map((item)=>{
                                    return (
                                        <MenuItem key={item.value} value={item.value}>
                                            {item.label}
                                        </MenuItem>
                                    )
                                })}
                            </TextField>
                        </Col>
                        <Col span={24}>
                            <Editor
                            style={{width:"100%"}}
                            placeholder={"请输入文章的信息"}
                            ref={this.$vm}
                            addImg={(file)=>{
                                const _this=this;
                                const file2=new FormData()
                                file2.append("file",file)
                                console.log(file)
                                FetchDoUploadFile("/blog/v1/file/imageUpload4React",file2,(response)=>{
                                    //console.log(response)
                                    _this.$vm.current.$img2Url(response.fileName, response.fileName)
                                    
                                })
                                
                            }}
                            value={this.state.markdownvalue} onChange={(value) =>{
                                //console.log(value)
                                this.setState({
                                    markdownvalue:value
                                })
                            }} />
                        </Col>
                    </Row>
                    <Input/>

                </Card>
            }
            />
        )
    }

}

export default withRouter(EditTopic)