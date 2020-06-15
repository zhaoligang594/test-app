import React from 'react'
import './PublicHeader.css'
import { withRouter,Link} from 'react-router-dom'
import { Layout, Menu, Breadcrumb,BackTop } from 'antd';
import $ from 'jquery';
import { orange } from '@material-ui/core/colors';




const { Header, Content, Footer } = Layout;

/**
 * 我们公共的头文件
 */
class PublicHeader extends React.Component{

    /**
     * 初始化我们的基本操作
     */
    componentDidMount(){

        let headerMsg=this.props.location.headerMsg;

        console.log("headerMsg",headerMsg)
        if(null!=headerMsg){
            $("#"+headerMsg.key).css({
                "color":"orange"
            })
            window.document.title=headerMsg.value
        }else{

        let href=window.location.href;
        
        if(href.indexOf("tech-talk")>=0){
            $("#tech-talk").css({
                "color":"orange"
            })
            window.document.title="技术杂谈"
        }else if(href.indexOf("tech-article")>=0){
            $("#tech-talk").css({
                "color":"orange"
            })
        }else if(href.indexOf("about-author")>=0){
            $("#about-author").css({
                "color":"orange"
            })
            window.document.title="关于我"
        }else if(href.indexOf("about-site")>=0){
            $("#about-site").css({
                "color":"orange"
            })
            window.document.title="关于本站"
        }else if(href.indexOf("album")>=0){
            $("#album").css({
                "color":"orange"
            })
            window.document.title="相册"
        }else if(href.indexOf("comment-site")>=0){
            $("#comment-site").css({
                "color":"orange"
            })
            window.document.title="给我留言"
        }else if(href.indexOf("build-site")>=0){
            $("#build-site").css({
                "color":"orange"
            })
            window.document.title="建站资源"
        }
        else{
            
            $("#index-page").css({
                "color":"orange"
            })
        }

        }

        


        window.addEventListener('scroll',this.bindHandleScroll)

    }

    bindHandleScroll=(event)=>{
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) 
        || window.pageYOffset
        || (event.srcElement ? event.srcElement.body.scrollTop : 0);

        //console.log("scrollTop",scrollTop)

        if (scrollTop >= 30) {
            $('#public-header-outer').css({'position': 'fixed', 'top': '0px'});
            $('#height-64').show();
            $('#blog-marquee').hide();
        }
        if (scrollTop < 30) {
            $('#public-header-outer').css({'position': 'relative', 'top': '0px'});
            $('#height-64').hide();
            $('#blog-marquee').show();
        }

    }

    //在componentWillUnmount，进行scroll事件的注销
    componentWillUnmount(){
        window.removeEventListener('scroll', this.bindHandleScroll);
    }

    

    render(){


        let headerMsg=this.props.location.headerMsg;

        return (
            <div>
                <div id="blog-marquee" style={{height:"30px"}}>
                        <marquee  behavior="alternate">欢迎来到赵先生的博客</marquee>
                </div>
                <div id="height-64" style={{height:"64px",display:"none"}}></div>
                <div id="public-header-outer" className="public-header-outer">
                    <div className="blog-title">
                        <h1 style={{color:"orange"}}>
                            Mr.Zhao‘s Blog
                            <small>Aspire to Inspire Until I Expire</small>
                            </h1>
                    </div>
                    <div className="blog-header-menu">
                        <div className="menu-item">
                            <Link id="index-page" to={{
                                pathname:"/",
                                headerMsg:{
                                    key:"index-page",
                                    value:"Mr.Zhao‘s Blog"
                                }
                            }}>
                                首页
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link id="tech-talk" to={{
                                pathname:"/tech-talk",
                                headerMsg:{
                                    key:"tech-talk",
                                    value:"技术杂谈"
                                }
                            }}>
                                技术杂谈
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link id="album" to={{
                                pathname:"/album",
                                headerMsg:{
                                    key:"album",
                                    value:"相册"
                                }
                            }}>
                                相册
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link id="about-author" to={{
                                pathname:"/about-author",
                                headerMsg:{
                                    key:"about-author",
                                    value:"关于我"
                                }
                            }}>关于我</Link>
                        </div>
                        <div className="menu-item">
                            <Link id="about-site" to={{
                                pathname:"/about-site",
                                headerMsg:{
                                    key:"about-site",
                                    value:"关于本站"
                                }
                            }}>关于本站</Link>
                        </div>
                        <div className="menu-item">
                            <Link id="comment-site" to={{
                                pathname:"/comment-site",
                                headerMsg:{
                                    key:"comment-site",
                                    value:"给我留言"
                                }
                            }}>给我留言</Link>
                        </div>
                        <div className="menu-item">
                            <Link id="build-site" to={{
                                pathname:"/build-site",
                                headerMsg:{
                                    key:"build-site",
                                    value:"建站资源"
                                }
                            }}>建站资源</Link>
                        </div>
                    </div>
                </div>
                <BackTop />
            </div>
            
        )
    }
}

export default withRouter(PublicHeader)