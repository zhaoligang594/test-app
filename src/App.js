import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import {BrowserRouter, Route} from 'react-router-dom'
import { BrowserRouter as Router,Route,Switch,Link,Redirect, withRouter} from "react-router-dom";
import { connect, Provider } from 'react-redux'

import Routers from './router/routers'

import FileNotFound from './router/blog/FileNotFound'
// import store from './redux/store'

import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { FetchDoGet } from './commons/Utils';
import store from './store/store'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  componentDidMount(){
    
  }

  /**
   * 添加预加载的动画
   */
  componentWillMount(){
    let loading = document.getElementById('i-loading')
    if (loading) {
      loading.setAttribute('class', 'i-loading-out')
      setTimeout(() => {
        loading.style.display = 'none'
      }, 1000)
    }
  }

  render(){
    let token = this.props.token

    let islogin=(token==null||'null'==token)?false:true
    console.log("islogin",islogin)
    // console.log("this.props",this.props)
    //this.this.props.changeActive(token)
    return(
      <ConfigProvider locale={zhCN}>
        {/* <Provider store={this.store}> */}
        <Router>
          <div>
            <Switch>
              {Routers.map((item,index)=>{
              return (
                <Route key={index} 
                path={item.path} 
                exact 
                render={(props) =>{
                  //console.log("props",props)
                  return ((!item.auth )? (<item.component {...props} />) : ((islogin)? <item.component {...props} /> :
                    <Redirect to={{
                   pathname: '/login',
                   state: { from: props.location }
                   }} />)
                  )
                  // return ((!item.auth )? (<item.component {...props} />) : ((token!=null)? <item.component {...props} /> :
                  //   <Redirect to={{
                  //  pathname: '/login',
                  //  state: { from: props.location }
                  //  }} />)
                  // )
                }
                }/>
               )//end Route

              })}
            // 所有错误路由跳转页面
            <Route component={FileNotFound} />
           
           </Switch>
        </div>
{/*         
            <Route path={`/private`} component={PrivateZone}></Route>
            <Route path={`/login`} component={LoginMod}></Route> */}
        </Router>
        {/* </Provider> */}
      </ConfigProvider>
    )
  }
}

// function App() {
//     // return <Redirect to={{ pathname: "/" }} />;
//   return (
//     <Router>
//             <Route path={`/private`} component={PrivateZone}></Route>
//             <Route path={`/login`} component={LoginMod}></Route>
//      </Router>
//   );
// }


const mapStateToProps = (state, ownProps) => {
  //console.log("mapStateToProps",state)
  return { token: state.token }
}
// connect(mapStateToProps)
export default connect(mapStateToProps)(App);
