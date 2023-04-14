import React from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { IProduct } from '../../types/product';
import { useNavigate } from 'react-router-dom';
interface IProps {
  onAdd: (product: IProduct) => void
}
const AddProductPage = (props:IProps) => {
  const navigate  = useNavigate()
  const onFinish = (values: any) => {
    console.log('Success:', values);
    props.onAdd(values)
    message.success('Them thanh cong')
    navigate('/admin/products')
  };
  return (
    <div>
          <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, whitespace: true, message: 'Please input your Product!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please input your price!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddProductPage