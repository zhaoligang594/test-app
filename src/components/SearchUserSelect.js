import React from 'react'
import { withRouter } from 'react-router-dom'
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';
import { FetchDoGet } from '../commons/Utils';


const { Option } = Select;

/**
 * 查询用户的搜索框
 */
class SearchUserSelect extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data: [],
            fetching: false,
            requestUrl:"/block/v1/sys_user/selectAllUsers",
        }
    }

    fetchUser = value => {
        console.log('fetching user', value);
        this.setState({ data: [], fetching: true });
        const _this=this;
        FetchDoGet("/block/v1/sys_user/selectAllUsers",function(response){
          _this.setState({ 
            data:response.data,
            fetching: false 
        });
        },{userName:value});
      };

    handleChange = value => {
        // this.setState({
        //   value,
        //   data: [],
        //   fetching: false,
        // });
        /**
         * 回掉我们的请求
         */
        this.props.onChange(value)
    };

    onFocus=() =>{
      // this.setState({
      //   data: [],
      //   fetching: false,
      // });
    }

    /**
     * 初始化我们的数据
     */
    componentDidMount(){
      this.setState({ data: [], fetching: true });
      const _this=this;
      FetchDoGet("/block/v1/sys_user/selectAllUsers",function(response){
            _this.setState({ 
                data:response.data,
                fetching: false 
            });
        });
    }

    render(){
        const { fetching, data, value } = this.state;

        let placeHolder=this.props.placeholder;
        if(null==placeHolder||undefined==placeHolder){
          placeHolder="选择人员"
        }
        return(
            <Select
            // mode="multiple"
            labelInValue
            showSearch
            value={value}
            placeholder={placeHolder}
            onFocus={this.onFocus}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            filterOption={false}
            onSearch={this.fetchUser}
            onChange={this.handleChange}
            style={{ width: 200,marginRight:"8px" }}
            >
              <Option value=""><font color="red">*没有,请搜索*</font></Option>
              {data.map(item => (
                <Option key={item.uId}>{item.userName}</Option>
              ))}
            </Select>
        )

    }//end render

}//end class

export default withRouter(SearchUserSelect)