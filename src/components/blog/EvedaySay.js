import React from 'react' 
import './EvedaySay.css'
import { withRouter } from 'react-router-dom'
import { Card } from 'antd'

/**
 * 每日一句
 */
class EvedaySay extends React.Component{

    constructor(props){
        super(props)
        this.state={

            oneSay:{}

        }
    }

    /**
     * 初始化我们的数据
     */
    componentDidMount(){
        const _this=this;
        fetch("https://blog.breakpoint.vip/apis/dsapi/")
        .then((response)=>{
            return response.json()
        })
        .then((json)=>{
            console.log(json)
            _this.setState({
                oneSay:json
            })
        })

    }

    render(){

        return(
           <div className="one-say-div">
               <img src={this.state.oneSay.fenxiang_img}/>
               <p>{this.state.oneSay.content}</p>
               <p>{this.state.oneSay.note}</p>
               <p>{this.state.oneSay.dateline}</p>
           </div>
        )
    }

}
export default withRouter(EvedaySay)