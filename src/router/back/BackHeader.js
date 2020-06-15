import React from 'react'
import './BackHeader.css'
import { withRouter } from 'react-router-dom'

/**
 * 我们的公共的头部分
 */
class BackHeader extends React.Component{
    
    render(){

        return(
            <div className="back-blog-header">
                <div className="header-left-item">
                    博客后台管理系统
                </div>
                <div className="header-right-item">
                    <span className="menu-item">
                        <a>首页</a>
                    </span>
                    <span className="menu-item">
                        <a href="/private-zone">我的文章</a>
                    </span>
                    <span className="menu-item">
                        <a href="/edit-topic">写文章</a>
                    </span>
                    <span className="menu-item">
                        <a href="/comments-site-manage">网站留言</a>
                    </span>
                    <span className="menu-item">
                        <a href="/image-manage">相册照片管理</a>
                    </span>
                    <span className="menu-item">
                        <a>个人资料</a>
                    </span>
                    <span className="menu-item">
                        <a>退出</a>
                    </span>
                </div>
            </div>
        )
    }
}
export default withRouter(BackHeader)