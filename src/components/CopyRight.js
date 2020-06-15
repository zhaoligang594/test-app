import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

/**
 * CopyRight
 */
class CopyRight extends React.Component{
    render(){
        return (
            <Typography variant="body2" color="textSecondary" align="center">
              {'Copyright © '}
              <Link color="inherit" href="">
                LeoZhao
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
                <Link color="primary" to="http://www.beian.miit.gov.cn/">京ICP备18001909号-1</Link>
            </Typography>
          );
    }
}

export default CopyRight