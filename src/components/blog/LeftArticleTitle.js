import React from 'react'
import './LeftArticleTitle.css'
import { withRouter } from 'react-router-dom'

import './../../store/store'
import store from './../../store/store'
import { connect } from 'react-redux'
import $ from 'jquery'
import {Card,Tag} from 'antd'
import { keys } from '@material-ui/core/styles/createBreakpoints'

/**
 * 文章的左标题
 */
class LeftArticleTitle extends React.Component{

    // 构造方法
    constructor(props){
        super(props)
        this.state={
            articleTitles:[]
        }
    }

    componentDidMount(){
        let articleTitles=this.props.articleTitles;
        this.setState({
            articleTitles:articleTitles
        })
    }

    render(){
        let dataList=this.state.articleTitles;

        //var dataList = [];//需要去重复的集合
        var res = [];//去重复后的集合
        var tem = {};


        　for(var i = 0; i < dataList.length; i++){
            let key=tem[dataList[i].title];
            if(key==null||undefined==key){

                res.push(dataList[i]);
                tem[dataList[i].title]=1;
            }
        }

        //console.log(articleTitles)
        return(
            <div>
                <Card
                title={"文章目录"}
                className="left-article-title-parent"
                >
                    {
                        res.map((item,index)=>{
                            return(
                                <span>
                                {/* <Tag color={(index<=2)?"#FF4040":"#ABABAB"}>{index+1}</Tag> */}
                                    <div className="left-titles-item-a"
                                    keyvalue={item.title}
                                    >
                                        <a 
                                        // href="javaScript:void(0);"
                                        href={`#${item.title}`}
                                        keyvalue={item.title}
                                        style={{color:"black"}}
                                        >
                                            {item.title}
                                        </a>
                                    </div>
                                </span>
                            )
                        })
                    }
                </Card>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    //console.log("mapStateToProps",state)
    return { articleTitles: state.articleTitles }
}

export default connect(mapStateToProps)(LeftArticleTitle)