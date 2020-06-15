import React from 'react'
import './CommentSite.css'
import { withRouter } from 'react-router-dom'
import {List,Card,Comment,Pagination,Tag,Row,Col,Form,Input,Button,Collapse} from 'antd'
import BlogCommonBackGround from '../../components/blog/BlogCommonBackGround'
import { FetchDoGet, FetchDoPost, AjaxDoPost } from '../../commons/Utils'
import moment from 'moment';
import { TextField ,InputAdornment} from '@material-ui/core'
import PorpularArticle from '../../components/blog/PorpularArticle'
import CommentPanel from '../../components/blog/CommentPanel'


/**
 * 我们的留言区域
 */
const { TextArea } = Input;
/**
 * 我们的留言版本
 */
class CommentSite extends React.Component{

    /**
     * 我们的表单的操作
     */
    formRef = React.createRef();

    constructor(props){
        super(props)
        this.state={
            veryfyCode:"",
            verifyCodeKey:"",
            pictureUrl:"http://file.breakpoint.vip/picture/blog/4d6fb840-b0b5-46ed-9db8-98084c585229.jpeg",                   
            commentpanelkey:Math.random(),
            message:"",
            userName:"", 
            veryfyCodeMsg:""
        }
    }

    /**
     * 初始化的数据
     */
    componentDidMount(){
        const _this=this;

        FetchDoGet("/blog/v1/image/getKaptcha",(response)=>{
            _this.setState({
                veryfyCode:response.verifyCode,
                verifyCodeKey:response.verifyCodeKey
            })
        })

    }

    render(){
        //console.log("this.formRef.current",this.formRef.current)
        return(
            <BlogCommonBackGround
            left={
                <Row gutter={[16,24]}>
                    <Col span={24}>
                        <Card title={"感谢支持"}>
                            <h4>您的支持是给我最大的鼓励!!!!!</h4>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <PorpularArticle
                        title={"文章推荐"}
                        />
                    </Col>
                </Row>
            }
            extra={
                <Row gutter={[16,24]}>
                    <Col span={24}>
                        <Card
                        cover={
                            <img src="https://myblogadmin.breakpoint.vip/image/liuyan.jpg"/>
                        }
                        >
                            <Collapse 
                            bordered={false}
                            onChange={()=>{}}>
                                <Collapse.Panel header={
                                    <div>
                                        <span>
                                            点击我，留下对我想说的话
                                            <Tag style={{marginLeft:"10px"}} color="#fa541c">
                                                注意：管理员审核通过后，才会展示在该评论里
                                            </Tag>
                                            <Tag style={{marginLeft:"10px"}} color="#fa541c">
                                                ****理智留言，从我做起****
                                            </Tag>
                                        </span>
                                    </div>
                                } key="1">
                                <div className="comments-form-outer">
                                    <div className="comments-form-outer-item">
                                        <TextField
                                            fullWidth
                                            multiline
                                            rowsMax="4"
                                            variant="outlined" 
                                            label="留言信息"
                                            color="secondary"
                                            placeholder={"请输入留言信息"}
                                            value={this.state.message}
                                            onChange={(event)=>{
                                                this.setState({
                                                    message:event.target.value
                                                })
                                            }}
                                        />
                                    </div>     

                                    <div className="comments-form-outer-item">
                                        <TextField
                                            fullWidth
                                            variant="outlined" 
                                            label="您的称呼"
                                            placeholder="请输入您的称呼"
                                            color="secondary"
                                            value={this.state.userName}
                                            onChange={(event)=>{
                                                this.setState({
                                                    userName:event.target.value
                                                })
                                            }}
                                        /> 
                                    </div>  

                                    <div className="comments-form-outer-item">
                                        <TextField
                                            fullWidth
                                            variant="outlined" 
                                            label="验证码"
                                            placeholder="请输入验证码"
                                            color="secondary"
                                            value={this.state.veryfyCodeMsg}
                                            onChange={(event)=>{
                                                this.setState({
                                                    veryfyCodeMsg:event.target.value
                                                })
                                            }}
                                            />
                                            <div className="comments-verifycode">
                                                <img style={{cursor:"pointer"}} src={this.state.veryfyCode}
                                                onClick={()=>{
                                                    const _this=this;
                                                    FetchDoGet("/blog/v1/image/getKaptcha",(response)=>{
                                                        _this.setState({
                                                            veryfyCode:response.verifyCode,
                                                            verifyCodeKey:response.verifyCodeKey
                                                        })
                                                        })
                                                    }}
                                                />
                                            </div>
                                    </div>  
                                    
                                    <div className="comments-form-outer-item button">
                                        <Button type="primary" htmlType="submit"
                                        onClick={()=>{
                                            const _this=this;

                                            let data={
                                                message:this.state.message,
                                                userName:this.state.userName, 
                                                verifyCode:this.state.veryfyCodeMsg,
                                                verifyCodeKey:this.state.verifyCodeKey,
                                                pictureUrl:this.state.pictureUrl,
                                            }
                                            AjaxDoPost("/v1/liuyan/save",(response)=>{
                                                _this.setState({
                                                    message:"",
                                                    userName:"", 
                                                    veryfyCodeMsg:"",
                                                    commentpanelkey:Math.random()
                                                })
                                            },data)
                                        }}
                                        >
                                                发表
                                        </Button>
                                    </div>
                                </div>
                                </Collapse.Panel>
                            </Collapse>
                            
                        </Card>
                    </Col>
                    <Col span={24}>
                        <CommentPanel
                        key={this.state.commentpanelkey}
                        />
                    </Col>
                </Row>
                
            }
            />
        )
    }

}

export default withRouter(CommentSite)