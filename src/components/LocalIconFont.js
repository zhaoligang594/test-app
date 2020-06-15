import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1670298_zifga8qyiwd.js',
});

class LocalIconFont extends React.Component{

    render(){
        let {type}=this.props;
        // if(null==type||undefined==type){
        //     type="icon-set"
        // }
        return(
            (null==type||undefined==type)?"":<IconFont type={type} />
        )
    }
}

export default LocalIconFont