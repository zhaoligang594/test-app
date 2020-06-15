import React from 'react'
import { withRouter } from 'react-router-dom'
import {FetchDoGet, FetchDoPost} from './../commons/Utils'
import { Select } from 'antd';

const { Option } = Select;

/**
 * 我们的部门的下啦列表框
 */
class DepartSelect extends React.Component{

    constructor(props){
        super(props)
        this.state={
            departs:[]
        }
    }

    /**
     * 初始化我们的数据
     */
    componentDidMount(){
        const _this=this;
        FetchDoGet("/block/v1/depart/selectDeparts",function(response){
            console.log("selectDeparts",response);
            _this.setState(
                {
                    departs:response.data
                }
            )
        })

    }//end

    handleChange=(value)=>{
        console.log(`selected ${value}`);
        this.props.setDepartId(value);
    }

    render(){
        let {departs} =this.state
        console.log("departs",departs);
        return(
            <div style={{float:"right",marginRight:"4px" }}>
                <Select style={{ width: 120}}
                onSelect={this.handleChange}
                defaultValue=""
                >
                    <Option value="" >请选择部门</Option>
                    {departs.map((item,index)=>{
                        return <Option value={item.dId}>{item.dName}</Option>
                    })}
                </Select>
            </div>
        )//end return
    }//end render
}//end

export default withRouter(DepartSelect)