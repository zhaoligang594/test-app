import React from 'react'
import './PublicLeft.css'
import { withRouter } from 'react-router-dom'
import { List, Avatar,Pagination,Button,Tag,Card,Row, Col,Calendar} from 'antd';
import ArticleBar from './ArticleBar';
import { FetchDoGet } from '../../commons/Utils';

/**
 * 左面的基本操作
 */
class PublicLeft extends React.Component{

    constructor(props){
        super(props)
        this.state={
            requestTodayUrl:"/blog/v1/statistic/getTodayDate",
            today:{},
            weatherData:[],
            todayWeather:{},
            fx:{}



        }
    }
    /**
     * 初始话我们的数据
     */
    componentDidMount(){
        const _this=this;
        FetchDoGet(this.state.requestTodayUrl,(response)=>{
            _this.setState({
                today:response
            })
        })

        FetchDoGet("https://python.breakpoint.vip/getweather",(response)=>{
            //console.log("response",response)
            _this.setState({
                weatherData:response.weatherData[0],
                todayWeather:response.todayWeather,
                fx:response.weatherData[0][4]
            })
        },{
            location:'101010100'
        },false)

    }

    render(){

        return(
            <div>
                <Row gutter={[16,16]}>
                    <Col span={24}>
                        <Card 
                        
                        title={"今天是 "+this.state.today.today2}
                        // extra={"天气情况"}
                        >   
                        <div style={{textAlign:"center"}}>
                        <h3 style={{color:"#1890ff"}}>今日北京天气</h3>
                            <p>{this.state.weatherData[1]}</p>
                            <p>温度 {(this.state.weatherData[2]!=null?this.state.weatherData[2]+"~":"")}{this.state.weatherData[3]}摄氏度</p>
                            <p>{this.state.fx.sw} {this.state.fx.message}</p>
                        </div>
                            
                            <Card.Meta
                            description={"查看更多"}
                            />
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title={"文章统计"}>
                            <ArticleBar/>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title={"网站小日历"} className="Calendar-item">
                            <Calendar fullscreen={false} onPanelChange={()=>{}} />
                        </Card>
                    </Col>
                </Row>
                
               
                {/* <Card title={"北京7日天气"}>
                                    亲！欢迎访问日常杂论网站
                                    日常杂论网站的主题是站主发表一些平时的日常学习过程中或者生活中有趣有意义的文章
                                    技术支持：Mr.Zhao
                </Card> */}
            </div>
        )
    }

}
export default withRouter(PublicLeft)