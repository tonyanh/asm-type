import React, {useState, useEffect} from 'react'
import  { useParams } from "react-router-dom"
import { getOneProduct } from '../api/product'
const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: ''
  })
  useEffect(() => {
    getOneProduct(id).then(({data}) => setProduct(data))
  }, [id])
  return (
    <div>
      <h3>{product.name}</h3>
      <p style={{color: "red"}}>{product.price}</p>
    </div>
  )
}

export default ProductDetail