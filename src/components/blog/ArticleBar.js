import React from 'react'
import './ArticleBar.css'
import { withRouter } from 'react-router-dom'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import { FetchDoGet } from '../../commons/Utils';
// import 'echarts/lib/component/toolbox';
// import 'echarts/lib/component/markPoint';
// import 'echarts/lib/component/markLine';

/**
 * 统计我们的文章的基本谢信息
 */
class ArticleBar extends React.Component{

    constructor(props){
        super(props)
        this.state={
            requestUrl:"/blog/v1/statistic/statisticTopic",
            data:[]

        }
    }

    /**
     * 初始化我们的数据
     */
    componentDidMount(){
        const _this=this;
         //初始化
         var myChart = echarts.init(document.getElementById('article-main'));

        FetchDoGet(this.state.requestUrl,(response)=>{
           
            myChart.setOption({
                title: {
                    text: '共计'+response.total+'篇',
                    subtext: '网站实时数据',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: response.typeList
                },
                series: [
                    {
                        name: '文章统计',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: response.statistic
                    }
                ],
                color:[
                    '#f5222d','#fa541c', '#fa8c16', '#faad14', '#fadb14','#a0d911', 
                     '#52c41a', '#13c2c2','#1890ff', '#2f54eb', '#722ed1','#eb2f96'
                ]
            })

        })//end fetch
       
        

    }

    render() {
        return (
            <div id="article-main" style={{ width: '100%',height:"300px"}}></div>
        );
    }

}

export default withRouter(ArticleBar)