import React from 'react'
import './PorpularArticle.css'
import { withRouter } from 'react-router-dom'
import { Card,Tag,Collapse} from 'antd'
import { FetchDoGet } from '../../commons/Utils'
import {Link} from 'react-router-dom'

const { Panel } = Collapse;
/**
 * 受欢迎的文章
 */
class PorpularArticle extends React.Component{

    constructor(props){
        super(props)
        this.state={
            requestUrl:"/blog/v1/topic/getTop3Topic",
            hotArticles:[]
        }
    }

    /**
     * 初始化我们的数据
     */
    componentDidMount(){
        const _this=this;
        FetchDoGet(this.state.requestUrl,(response)=>{
            _this.setState({
                hotArticles:response
            })
        })

    }

    render(){

        let title=this.props.title||"文章阅读排行"

        return(
            <Card
            className="porpular-articles-message"
            title={title}
            >   
                <Collapse accordion
                bordered={false}
                expandIcon={null}
                >
                    {this.state.hotArticles.map((item,index)=>{
                        return (
                            <Panel 
                            bordered={false}
                            className="site-collapse-custom-collapse-item"
                            header={
                                <span className="article-ttem">
                                    <Tag color={(index<3)?"#fa541c":"#595959"}>{index+1}</Tag>
                                    <span className="article-ttem-message">{item.topicTitle}</span>
                                </span>
                            } key={item.topicId}
                            >
                               <p>
                                   {item.topicDesc}&nbsp;
                                   <a href={`/tech-article?topicId=`+item.topicId}>阅读更多</a>
                               
                               </p>
                            </Panel>
                        )
                    })}
                </Collapse>
            </Card>
        )
    }

}

export default withRouter(PorpularArticle)