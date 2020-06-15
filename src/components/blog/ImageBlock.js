import React, { PureComponent } from "react";
import { Card,Row ,Tag,Divider} from 'antd'
import Zmage from 'react-zmage'
import $ from 'jquery'


class ImageBlock extends PureComponent{

    render() {
        let props=this.props;
        console.log(props)
        return (
           <div style={{margin:"0px auto",textAlign:"center"}}>
               <Zmage src={props.src}  style={{maxWidth:"90%",margin:"0px auto"}}/>
           </div>
        );
    }
}

export default ImageBlock