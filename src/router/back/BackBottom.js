import React from 'react'
import './BackBottom.css'
import { withRouter } from 'react-router-dom'

/**
 * 底部
 */
class BackBottom extends React.Component{

    render(){

        return(
            <div className="blog-back-bottom">
                菜鸟程序员&copy;2020
            </div>
        )
    }

}

export default withRouter(BackBottom)
