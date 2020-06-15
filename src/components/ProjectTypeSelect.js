import React from 'react'
import { withRouter } from 'react-router-dom'
import { Select } from 'antd';
import { FetchDoGet } from '../commons/Utils';



const { Option } = Select;
/**
 * 我们操作流的类别的下啦列表
 */
class ProjectTypeSelect extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data:[],
            daraRequestUrl:"/block/v1/project_type/selectProjectType"
        }
    }//end constructor

    /**
     * 初始化我们的基本的数据
     */
    componentDidMount(){
        const _this=this;
        /**
         * 初始化我们的数据
         */
        FetchDoGet(_this.state.daraRequestUrl,function(response){
            _this.setState({
                data:response.data
            })
        });

    }
    
    onChange=(value)=>{
        console.log(`selected ${value}`);
        this.props.onChange(value)
    }
      
    onBlur=()=> {
        console.log('blur');
    }
      
    onFocus=() =>{
        console.log('focus');
    }
      
    onSearch=(val)=> {
        console.log('search:', val);
        const _this=this;
        /**
         * 初始化我们的数据
         */
        FetchDoGet(_this.state.daraRequestUrl,function(response){
            _this.setState({
                data:response.data
            })
        },{typeName:val});
    }


    render(){

        return(
            <Select
                showSearch
                style={{ width: 200,marginRight:"8px" }}
                placeholder="操作流类别"
                optionFilterProp="children"
                onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onSearch={this.onSearch}
            >
                <Option value=""><font color="red">*没有,请搜索*</font></Option>
                {this.state.data.map((item)=>{
                    return (<Option value={item.typeId}>{item.typeName}</Option>)
                })}
            </Select>
            
        )//end return

    }//end render

}//end class

export default withRouter(ProjectTypeSelect)