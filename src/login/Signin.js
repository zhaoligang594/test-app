import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { withStyles } from '@material-ui/core/styles';

import $ from 'jquery'
// import {HashRouter as Router , Route , Switch,withRouter} from 'react-router-dom'
import { BrowserRouter,Route,Redirect, withRouter} from "react-router-dom";
import { createBrowserHistory } from "history";

import CopyRight from './../components/CopyRight'
import { Tooltip } from 'antd';

import {FetchDoGet,FetchDoPost,MessageAlter} from './../commons/Utils'
import Dialog from './../commons/DialogUtils'

import PrivateZone from './../router/privateZone'

import store from './../store/store'


const style ={
  paper: {
    marginTop: "20%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: "2px",
    backgroundColor: "#fff",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: "10px",
  },
  submit: {
    margin: "8px",
    height:"50px"

  },
  title:{
      fontSize:"36px",
      color:"#64b5f6",
      margin:"10px auto",
      textAlign:"center"
  },
  verifyCodeDiv:{
    height:"50px"
  }
  ,
  verifyCode:{
    cursor:"pointer",
    position:"relative",
    right:"-60%", 
    bottom:"50px",
    margin:"2px 9px",
    textAlign:"left"
  }
};

function veryfyCode(options){
  console.log(options);
}

/**
 * 我们的登陆的基本操作
 */
class LoginMod extends React.Component{
  constructor(props){
    super(props)
    this.state={
      src: this.props.src ? this.props.src : '',
      verifyCodeKey:'',
      open:false,
      message:'测试',
      severity:"success"
    }
    this.refreshVerifyCode=this.refreshVerifyCode.bind(this)
    this.preSubmit=this.preSubmit.bind(this)
    this.callBackExe=this.callBackExe.bind(this)
  }

  refreshVerifyCode(){
    const _this=this;
    FetchDoGet("/blog/v1/image/getKaptcha",function(response){
      _this.setState({
        src: response.verifyCode,
        verifyCodeKey:response.verifyCodeKey,
        isLogin:false
    })
      //console.log("response",response);
    });
  }

  preSubmit(e) {  
 
    const _this=this;
    let requestData={
      verifyCodeKey:this.state.verifyCodeKey,
      verifyCode:$("#verifyCode").val()
    }

    const username=$("#username").val();
    const password=$("#password").val();
    console.log("password",password)

    if(undefined==username||null==username||username.length==0){
      MessageAlter("warning","请求输人用户名")
      //alert("请求输人用户名");
      //e.preventDefault();
      e.preventDefault();
      return;
      
    }

    if(undefined==password||null==password||password.length==0){
      MessageAlter("warning","请求输人密码")
      //alert("请求输人密码");
      e.preventDefault();
      return;
      
    }

    FetchDoPost("/blog/v1/login/login/"+username+"/"+password,function(response) {
      localStorage.setItem("user_token",response)
      store.setState({
        token:response
        })
      MessageAlter("success","登陆成功")
      _this.props.history.push('/private-zone');
      console.log(response);
    },requestData);
    e.preventDefault();
  }

  componentDidMount(){

    //localStorage.setItem("user_token",null)
    /**
     * 存储我们一些的基本的信息
     */
    const _this=this;
    /**
     * 获取我们的验证码
     */
    // FetchDoGet("/block/v1/sys_user/isLogin",function(response) {
    //   if(response.respCode===300){
    //     _this.setState({
    //       isLogin:false
    //     }) 
    //   }else if(response.respCode==200){
    //     //跳转到首页
    //     _this.props.history.push("/")
    //   }else{
    //     MessageAlter("warning",response.data);
    //   }
    //   console.log("sss",response);
    //  },{},false);

    /**
     * 获取我们的验证码
     */
    FetchDoGet("/blog/v1/image/getKaptcha",function(response){
      _this.setState({
        src: response.verifyCode,
        verifyCodeKey:response.verifyCodeKey,
    })
    //console.log("response",response);
    },{'key1':'value',"verifyCodeKey":"ssddd"});
  }

  callBackExe(param){
    this.setState({
      open:false,
      message:'',
    })
    //console.log(param);
  }

  render(){

    //return <Redirect to='/' />;

    const {classes} = this.props;

    let {src,open,message,severity} = this.state;

    return(
<Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <div className={classes.title}>菜鸟的后台管理</div>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        {/* <Typography component="h1" variant="h5">
          Sign in
        </Typography> */}
        <form className={classes.form} noValidate onSubmit={this.preSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="用户名"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="密码"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <div>
          <TextField id="verifyCode"
           label="验证码"
           required
           fullWidth
            variant="outlined" />
            <Tooltip placement="bottom" title="点击我，更新验证码">
              <img id="" 
              alt={"点击我，更新验证码"}
              src={src} 
              style={{width:"130px",height:"40px"}}
              className={classes.verifyCode} 
              onClick={this.refreshVerifyCode}/>
            </Tooltip>
          </div>
          
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            登陆
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={8}>
        <CopyRight />
      </Box>
      <Dialog open={open} message={message} severity={severity} callBack={this.callBackExe}/>
    </Container>
    )
  }
}

export default withStyles(style)(withRouter(LoginMod));