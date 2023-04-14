import React, {useState, useEffect} from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { IProduct } from '../../types/product';
import { useNavigate, useParams } from 'react-router-dom';
interface IProps {
  onUpdate: (product: IProduct) => void
}
const UpdateProductPage = (props:IProps) => {
  const { id } = useParams()
  const navigate  = useNavigate()

  const [product, setProduct] = useState()
  useEffect(() => {
    const currentProduct = props.products.find((product) => product.id == String(id))
    setProduct(currentProduct)
  }, props)

  useEffect(() => {
    setFields()
  }, [product])
  const [form]=Form.useForm();
  const setFields = () => {
    form.setFieldsValue({
      id: product?.id,
      name: product?.name,
      price: product?.price
    })
  }
  const onFinish = (values: any) => {
    console.log('Success:', values);
    props.onUpdate(values)
    message.success('Them thanh cong')
    navigate('/admin/products')
  };
  return (
    <div>
      <Form
        form={form}
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
          label=""
          name="id"
          style={{display: "none"}}
          rules={[{ required: true, message: 'Please input your Product!' }]}
        >
          <Input />
        </Form.Item>
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

export default UpdateProductPage