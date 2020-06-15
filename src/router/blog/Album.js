import React from 'react'
import './Album.css'
import { withRouter } from 'react-router-dom'
import {Row,Col, Card,List,Pagination,Modal,Carousel} from 'antd'
import BlogCommonBackGround from '../../components/blog/BlogCommonBackGround'
import { FetchDoGet } from '../../commons/Utils'
import { EnvironmentOutlined } from '@ant-design/icons';
import $ from 'jquery'
import Zmage from 'react-zmage'


const getter=[16,24];
const colSpan=6;
/**
 * 我们的相册的页
 */
class Album extends React.Component{

    constructor(props){
        super(props)

        this.state={
            requestUrl:"/blog/v1/album/selectPhotos",
            photoPageInfo:{},
            photos:[],
            first:{},
            visible:false,
            photoIndex:0
        }
    }

    /**
     * 初始化我们的基本的数据
     */
    componentDidMount(){
        const _this=this;
        FetchDoGet(this.state.requestUrl,(response)=>{
            console.log(response)
            _this.setState({
                photoPageInfo:response,
                photos:response.data,
                first:response.data[0],
            })
        },{pageSize:"8"})

    }

    render(){

        return(
            <BlogCommonBackGround
            leftSpan={0}
            rightSpan={24}
            extra={
                <div>
                    {/* <Row gutter={[16, 16]}>
                        <Col span={18} offset={3}>
                            <Card 
                                hoverable
                                cover={<img className="preView-img-item" alt="example" src={this.state.first.aPhoto}/>}
                                // title={item.aLocaltion}
                                >
                                <Card.Meta title={
                                    <span>
                                        <EnvironmentOutlined />
                                        {` `+this.state.first.aLocaltion}
                                    </span>
                                    
                                    } description={
                                    <div>
                                        <span style={{fontWeight:"bold",color:"black"}}>{this.state.first.gmtUpdate+` `}</span>
                                        {this.state.first.aMsg}
                                    </div>
                                } />
                                </Card>
                        </Col>
                     </Row> */}
                     <Row gutter={[16, 16]} justify="left" align="middle">
                         {this.state.photos.map((item,index)=>{
                             return(
                                <Col span={6}>
                                    <Card
                                    className="item-card-image"
                                    id={item.aId}
                                    index={index}
                                    onClick={(index)=>{
                                        console.log($(`#`+item.aId).attr("index"));
                                        const _this=this;
                                        _this.setState({
                                            visible:true,
                                            photoIndex:$(`#`+item.aId).attr("index")
                                        })
                                    }}
                                    hoverable
                                    cover={
                                        <Zmage className="preView-img-item" src={item.aPhoto}/>
                                    // <img className="preView-img-item" alt="example" src={item.aPhoto}/>
                                    }
                                    // title={item.aLocaltion}
                                    >
                                    <Card.Meta title={
                                        <span>
                                            <EnvironmentOutlined />
                                            {` `+item.aLocaltion}
                                        </span>
                                        
                                        } description={
                                        <div>
                                            <span style={{fontWeight:"bold",color:"black"}}>{item.gmtUpdate+` `}</span>
                                            {item.aMsg}
                                        </div>
                                    } />
                                    </Card>
                                </Col>
                             )
                         })}
                     </Row>
                     <Row gutter={[16, 16]} justify="space-around" align="middle">
                         <Pagination
                            current={this.state.photoPageInfo.currentPage}
                            defaultCurrent={this.state.photoPageInfo.currentPage}
                            defaultPageSize={this.state.photoPageInfo.pageSize}
                            pageSize={8}
                            total={this.state.photoPageInfo.totalCount}
                            showQuickJumper={true}
                            showTotal={(total, range) => `当前展示：${range[0]}-${range[1]}图片  一共有${total}张图片`}
                            onChange={(page, pageSize)=>{
                                const _this=this;
                                FetchDoGet(this.state.requestUrl,(response)=>{
                                    console.log(response)
                                    _this.setState({
                                        photoPageInfo:response,
                                        photos:response.data,
                                        first:response.data[0],
                                    })
                                },{
                                    currentPage:page,
                                    pageSize:pageSize
                                })
                            }}

                         />
                     </Row>

                    
                
                </div>
            }
            />
        )
    }
}

export default withRouter(Album)