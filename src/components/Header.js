import React from 'react'
import Avatar from '@material-ui/core/Avatar';

import './../commons/commons.css'


/**
 * 我们顶部的基本操作
 */
class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        let {avatar,name}=this.props;

        console.log("name",name)

        return(
            <div className="header-class">
                <div className="header-title">基于区块链的光网络建设管理平台</div>
        <div className="header-avater"><Avatar variant="circle"/>{name}</div>
            </div>
        )
    }
}

export default Header 