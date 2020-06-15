import React from 'react'

import Header from './../components/Header'
import Bottom from './../components/Bottom'
import { Result, Button } from 'antd';

import './NotFound.css'
import { Redirect,Link, withRouter } from 'react-router-dom';

class NotFound extends React.Component{

    render(){
        return(
            <div>
                <Header/>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, you are not authorized to access this page."
                    extra={<Button type="primary">
                        <Link to={{
                            pathname:"/",
                            state:{
                                title:"首页",
                            }
                        }}>回到首页</Link>
                        </Button>}
                />,
                {/* <div className="not-fount-css">
                404<small>您的查找的资源消失了😢</small>
                </div> */}
                <Bottom/>
            </div>
        )
    }
}

export default withRouter(NotFound)