import React, {Component} from 'react';
import {Card, Button, Icon, Table} from 'antd';
import MyButton from '$comp/my-button';
import './index.less';

export default class Category extends Component {
    render() {
        const columns = [{
            title: '品类名称',
            dataIndex: 'name',
        }, {
            title: '操作',
            className: 'operator',
            dataIndex: 'operator',
            render: text => <div>
                <MyButton>修改名称</MyButton>
                <MyButton>查看其子品类</MyButton>
            </div>
        }];

        const data = [{
            key: '1',
            name: '手机',
        }, {
            key: '2',
            name: '电脑',
        },{
            key: '3',
            name: '手机',
        }, {
            key: '24',
            name: '电脑',
        },{
            key: '5',
            name: '手机',
        }, {
            key: '6',
            name: '电脑',
        }];

        return (
            <Card
                className="category"
                title="一级分类列表"
                extra={<Button type="primary"><Icon type="plus"/>添加品类</Button>}

            >
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    pagination={{
                        showSizeChanger: true,
                        pageSizeOptions: ['2', '4', '6', '8'],
                        defaultPageSize: 2,
                        showQuickJumper: true,
                    }}
                />
            </Card>
        )
    }
}
