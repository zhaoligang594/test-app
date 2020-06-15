import React from 'react'
import { Layout} from 'antd';
import { StepBackwardOutlined,StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import Button from '@material-ui/core/Button';
import {fetch as fetchPolyfill} from 'whatwg-fetch'
import './LoginForm.css'
import './../commons/commons.css'

/**
 * 我们登陆的基本窗口
 */
class LoginForm extends React.Component{

    constructor(props){
        super(props)
        this.state={}
        this.onTest=this.onTest.bind(this);
    }

    onTest(){ 
        window.fetch("http://api.breakpoint.vip/block/v1/image/getVerifyCode").then(function(response){
            return response.json()
        }).then(function(json) {
            
            console.log('parsed json', json)
          });
        //alert()
        return false;
    }

    render(){

        const { Header, Footer, Content } = Layout;

        return(
            <div>
                <Layout className="outer-layout">
                <Header className="header">光网络规划系统</Header>
                <Layout>
                    <Content className="content">
                    <div>
                        <form>
                        <Button variant="contained" color="primary">
      你好，世界
    </Button>
                        <Button type="primary" onClick={this.onTest}>测试的按钮</Button>
                        </form>
                    </div>
                    <Button type="primary" onClick={this.onTest}>测试的按钮</Button>
                    </Content>
                    </Layout>
                    <Footer className="footer">©CopyRight 2020</Footer>
                </Layout>
            </div>
        )
    }
}

export default LoginForm

