import React from 'react'
import { withRouter } from 'react-router-dom'
import LocalBackGround from './../commons/LocalBackGround'
import {FetchDoGet,FetchDoPost, MessageAlter} from './../commons/Utils'
import { Layout,Card,Button,Divider,Form,Input} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusSquareOutlined
} from '@ant-design/icons';
import TabbleUtils from '../components/TabbleUtils';
import LocalIconFont from '../components/LocalIconFont';
import LocalModal from '../components/LocalModal';
import SearchUserSelect from '../components/SearchUserSelect';

const columns=[
    {
        title: '部门ID',
        width: 50,
        dataIndex: 'dId',
        key: 'dId',
        fixed: 'left',
        align:"tenter",
        ellipsis:true
    },
    {
        title: '部门名称',
        width: 50,
        dataIndex: 'dName',
        align:"tenter"
    },
    {
        title: '部门领导者',
        width: 50,
        dataIndex: 'leaderName',
        align:"tenter"
    },
    {
        title: '部门创建者',
        width: 50,
        dataIndex: 'creatorName',
        align:"tenter"
    },
    {
        title: '创建时间',
        width: 50,
        dataIndex: 'gmtCreate',
        align:"tenter"
    },
    {
        title: '修改时间',
        width: 50,
        dataIndex: 'gmtModified',
        align:"tenter"
    },
    {
        title: '操作',
        key:"operation",
        width: 50,
        fixed: 'right',
        align:"tenter",
        render: (text, record, index) => {

            return(
                <Button type="primary"
                        ghost={false} 
                        style={{backgroundColor:"#389e0d",border:"none",float:"left"}}
                        icon={<LocalIconFont type="icon-edit" />}
                        >
                        编辑</Button>  
            )
        }
    },
];



/**
 * 管理我们的部门
 */
class ManageDepart extends React.Component{
    formRef = React.createRef();

    constructor(props){
        super(props)
        this.state={
            requestUrl:"/block/v1/depart/selectDeparts",
            queryData:{},
            tableKey:Math.random(),
            modelVisible:false,
            localModalKey:Math.random()
        }
    }

    /**
     * 初始化我们的变量
     */
    componentDidMount(){

    }


    render(){


        return(
            <LocalBackGround content={
                <Card key={"card111"} style={{width:"100%"}} 
                bordered={false}
                hoverable={false}
                title="部门列表"
                extra={
                    <Button type="primary"
                    onClick={()=>{
                        this.setState({
                            modelVisible:true,
                            localModalKey:Math.random()
                        })
                    }}
                    >
                        <PlusSquareOutlined />
                        添加部门
                    </Button>
                }
                >
                    <TabbleUtils
                    columns={columns}
                    requestUrl={this.state.requestUrl}
                    currentPage={1}
                    searchParams={this.state.queryData}
                    // 每一次都是更新的
                    key={this.state.tableKey}/>

                    <LocalModal
                    title={"添加部门"}
                    key={this.state.localModalKey}
                     visible={this.state.modelVisible}
                     extra={
                        <Form ref={this.formRef}
                        layout={"vertical"}
                        onSubmit={(e)=>{
                            e.preventDefault()
                            const form = this.props.form;
                            form.validateFields((err, values) => {
                                if (!err) {
                                       console.log(values)
                                }
                    
                                  
                             })
                        
                        }}
                        >
                            <Form.Item label="部门名称" 
                            name="dName"
                            rules={[{ required: true, message: '请输入部门名称' }]}
                            onFinish={(values)=>{
                                console.log(values)
                            }}
                            required={true}>
                                <Input placeholder="部门名称" />
                            </Form.Item>
                            <Form.Item label="部门领导者" 
                            name="leaderId"
                            rules={[{ required: true, message: '请选择部门领导人' }]}
                            required={true}>
                                <SearchUserSelect
                                onChange={(value)=>{
                                    //console.log(value)
                                    //console.log("this.formRef.current",this.formRef.current)
                                    this.formRef.current.setFieldsValue({
                                        leaderId:value.value
                                    })
                                }}
                                />
                                {/* <Input placeholder="部门名称" /> */}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" 
                                style={{float:"left",marginLeft:"10px"}}
                                onClick={()=>{
                                    console.log(this.formRef.current.getFieldValue())
                                    const _this=this;
                                    //添加我们的数据
                                    FetchDoPost("/block/v1/depart/addDepart",function(response){
                                        MessageAlter("success","操作成功")
                                        _this.setState({
                                            tableKey:Math.random(),
                                            modelVisible:false,
                                            localModalKey:Math.random()
                                        })
                                    },this.formRef.current.getFieldValue());
                                }}
                                >
                                    提交
                                </Button>
                                <Button type="primary" htmlType="reset"
                                style={{float:"left",marginLeft:"10px",backgroundColor:"#fa541c",border:"0px"}}
                                onClick={()=>{
                                    this.formRef.current.resetFields();
                                }}
                                >
                                    重置
                                </Button>
                            </Form.Item>
                        </Form>
                    }/>//end LocalModal
                </Card>
            }/>
        )
    }
}

export default withRouter(ManageDepart)