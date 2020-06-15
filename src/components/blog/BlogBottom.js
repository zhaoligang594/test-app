import React from 'react'
import './BlogBottom.css'
import { withRouter } from 'react-router-dom'
import { Breadcrumb, Menu, Divider } from 'antd';
import $ from 'jquery'

class BlogBottom extends React.Component{

    constructor(props){
        super(props)
        this.state={

        }
    }

    /**
     * 初始化我们的额数据
     */
    componentDidMount(){

        // $("#text-center-static").html('<script type="text/javascript"> var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");document.write(unescape("%3Cspan id=\'cnzz_stat_icon_1278551559\'%3E%3C/span%3E%3Cscript src=\'" + cnzz_protocol + "s9.cnzz.com/z_stat.php%3Fid%3D1278551559%26online%3D1%26show%3Dline\' type=\'text/javascript\'%3E%3C/script%3E"));</script>')

    }

    render(){

        return(
            <div className="text-center blog-bottom">
                <div style={{margin: "0px auto",width:"1000px"}}>
                    <div className="bottom_four_item_class">
                        <h3>关于<span style={{color: "orange"}}>我的博客</span></h3>
                        <div>首先欢迎访问我的个人博客，日常杂论，分享平时生活中的有趣，有意义的事情，
                            不定期的分享图片或者读书的文章，以及学习的技术和工作中遇到的问题。</div>
                    </div>
                    <div className="bottom_four_item_class">
                        <h3>快速连接</h3>
                        <div>
                            <a href="https://blog.nowcoder.net/breakpoint" target="_blank">日常杂论(牛客)</a>
                            <a href="https://www.baidu.com" target="_blank">百度一下</a>
                            <a href="/tech-talk">文章分享</a>
                            {/* <a href="/projects">作品展示</a> */}
                        </div>
                    </div>

                    <div className="bottom_tow_item_class">
                        <h3>Touch Me</h3>
                        <div>
                            <div>
                                <img src="https://blogjs.oss-cn-beijing.aliyuncs.com/qr/21566889848_.pic_hd.jpg"/>
                                <img src="http://file.breakpoint.vip/picture/blog/8bc55bf6-7359-43e4-9b36-d10d1163a1ae.jpg"/>
                                {/* <img src="https://blogjs.oss-cn-beijing.aliyuncs.com/qr/gh_0393d17804ab_258.jpg"/> */}
                            </div>
                            <div>
                                <Breadcrumb separator="|">
                                    <Breadcrumb.Item>
                                        <a href="#" className="item">182&nbsp;0167&nbsp;7919</a>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <a href="#" className="item">zhaoligang@breakpoint.vip</a>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <a className="item" href="https://blog.csdn.net/zhaoligang1234?viewmode=contents" target="_blank">
                                            CSDN
                                        </a>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <a className="item" href="https://github.com/FREEZINGPOINT" target="_blank">GITHUB</a>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </div>
                    </div>
                    <Divider/>
                    <Breadcrumb separator="|">
                        <Breadcrumb.Item>
                             <a href="#" className="item">Addr:中国·北京</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                             <a href="#" className="item">&copy;CopyRight 2020</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a className="item" target="_blank" href="http://www.beian.miit.gov.cn">京ICP备18001909号-1</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a className="item" href="#" target="_blank">Powered By 赵先生</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>   
                </div>
                <div id="text-center-static">
                   {/* <a href="/private-zone" style={{color:"#69696e !important"}}>后台维护</a> */}
                </div>
            </div>
        )
    }
}

export default withRouter(BlogBottom)