import React from 'react';
import 'antd/dist/antd.css';
import './LocalContent.css';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import MenuComponent from './MenuCom'

const { Header, Sider, Content } = Layout;


class LocalContent extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  /**
   * 初始化我们的基本的数据操作
   */
  componentWillMount(){

  }

  render() {
    return (
      <Layout className="layout-header">
        <Sider theme="light" trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <MenuComponent/>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 580,
            }}
          >
              <div>欢迎访问这里要写一些统计的信息</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LocalContent