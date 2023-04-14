import React from 'react'
import { Space, Table,Button,message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
const ProductManagementPage = (props) => {
  interface DataType {
    key: string;
    name: string;
    price: number;
  }
  const removeProduct = (id: number | string):void => {
    const confirm = window.confirm("ban co muon xoa khong?")
    if(confirm) {
      props.onRemove(id)
      message.success('Xoa thanh cong')
    }
  }
  const data = props.products.map(item => {
    return {
      key: item.id,
      name: item.name,
      price: item.price
    }
  })
  const columns: ColumnsType<DataType> = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
            <Button 
            type='primary'
            style={{backgroundColor: "red"}}
            onClick={() => removeProduct(record.key)}
            >Delete</Button>
            <Button
            type='primary'
            style={{backgroundColor: "blue"}}
            >
              <Link to={`update/${record.key}`}>Update</Link>
            </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Button
            type='primary'
            style={{backgroundColor: "green"}}
            >
              <Link to={`add`}>Add products</Link>
            </Button>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ProductManagementPage