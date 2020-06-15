import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles ={
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: "50%",
        },
      },
}
/**
 * 自定义的提示组件
 */
class Dialog extends React.Component{
    constructor(props){
        super(props)
        this.state={
            open:false,
            show:this.props.show,
            showCloseButton: this.props.showCloseButton
        }
        this.handleClick=this.handleClick.bind(this)
        this.handleClose=this.handleClose.bind(this)
    }

    handleClick(){
        this.props.callBackExe(true)
    }

    handleClose(){
        // this.props({
        //     open:false
        // })
        this.props.callBack(false)
    }

    render(){
        const {classes} = this.props;
        let{open,message,severity} =this.props;

        return(
    <div className={classes.root}>
      <Snackbar id="Snackbar" open={open} autoHideDuration={6000} onClose={this.handleClose}>
        <Alert onClose={this.handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
    )
    }
}

export default withStyles(useStyles)(Dialog)