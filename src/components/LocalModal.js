import React from 'react'
import { withRouter } from 'react-router-dom'
import { Modal, Button,Card } from 'antd';

/**
 * 自定义对话框
 */
class LocalModal extends React.Component{

    constructor(props){
        super(props)
        this.state={
            visible: false//对话框是否可见
        }

    }

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

      /**
       * 初始化我们的操作
       */
      componentDidMount(){
        this.setState({
            visible:this.props.visible
        })
      }

    render(){

        

        return(
                <Modal
                title={this.props.title}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={null}
                >
                    {/* 定义我们其他的操作 */}
                    {this.props.extra}
                </Modal> 
        )//end return

    }//end render

}

export default withRouter(LocalModal)