import React from 'react'
import { Layout,Card,Button,Divider,Table,Pagination} from 'antd';
import { withRouter } from 'react-router-dom';
import {FetchDoGet,FetchDoPost} from './../commons/Utils'

/**
 * 我们的图表的utils  整体性编辑我们的图表
 */
class TableUtils extends React.Component{

    constructor(props){
        super(props)
        this.state={
            dataSource:[],
            pageInfo:{},
            tableIsLoading:true,
            queryParam:{}
        }
    }

    /**
     * 初始化我们的数据
     */
    componentDidMount(){
        const _this=this;
        const requestUrl=this.props.requestUrl;
        let searchParams=this.props.searchParams||{};
        searchParams["currentPage"]=1
        searchParams["pageSize"]=10
        FetchDoGet(requestUrl,function(response){
            console.log("selectAllUsers",response);
            _this.setState({
                dataSource:response.data,
                pageInfo:response,
                tableIsLoading:false,
                queryParam:searchParams
            })
        },searchParams);

    }


    render(){
        const _this=this;
        const columns=this.props.columns;
        // const dataSource=this.props.dataSource;
        const requestUrl=this.props.requestUrl;
        const currentPage=this.props.currentPage;
        return(
            <div style={{clear:"both",marginBottom:"30px"}} key="table1">
                <Table 
                columns={columns}
                dataSource={this.state.dataSource}
                size="small"
                // scroll={{ x: 1500, y: 440 }}
                pagination={false}
                loading={this.state.tableIsLoading}
                />
                <Pagination
                showQuickJumper
                showSizeChanger
                pageSizeOptions={['10', '20', '30', '40']}
                style={{float:"right",marginRight:"10px",marginTop:"5px"}}
                total={this.state.pageInfo.totalCount}
                current={this.state.pageInfo.currentPage}
                // defaultPageSize={this.state.pageInfo.pageSize}
                pageSize={undefined==this.state.pageInfo.pageSize?10:this.state.pageInfo.pageSize}
                onChange={(page, pageSize)=>{
                    //console.log(page,pageSize)
                    this.setState({
                        tableIsLoading:true
                    })

                    let queryParam=this.state.queryParam;
                    console.log(queryParam)
                    queryParam["currentPage"]=page
                    queryParam["pageSize"]=pageSize
                    FetchDoGet(requestUrl,function(response){
                        console.log("selectAllUsers",response);
                        _this.setState({
                            dataSource:response.data,
                            pageInfo:response,
                            tableIsLoading:false
                        })
                    },queryParam);

                }}
                onShowSizeChange={(current, size)=>{
                        //console.log(page,pageSize)
                        this.setState({
                            tableIsLoading:true
                        })

                        let queryParam=this.state.queryParam;
                        console.log(queryParam)
                        queryParam["currentPage"]=current
                        queryParam["pageSize"]=size
                        FetchDoGet(requestUrl,function(response){
                            console.log("selectAllUsers",response);
                            _this.setState({
                                dataSource:response.data,
                                pageInfo:response,
                                tableIsLoading:false
                            })
                        },queryParam);
                }}
                showTotal={(total, range)=>{
                    console.log("total",total,range)
                    return (
                        <div style={{fontFamily:"楷体"}}>
                            <span style={{float:"right",marginRight:"10px"}}>
                            共{total}条
                            </span>
                            <span style={{float:"right",marginRight:"10px"}}>
                            当前显示：{range[0]}-{range[1]} 条
                            </span>
                        </div>
                    )
                }}
                />
            </div>
        )//end return
    }// end render
}
export default  withRouter(TableUtils)