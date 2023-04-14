import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { IProduct } from '../types/product'
interface IProps {
  products: IProduct[]
}
const ProductPage = (props:IProps) => {
  const [product, setProduct] = useState<IProduct[]>([])
  useEffect(() => {
    setProduct(props.products)
  },[props])
  return (
    <div>
      {
        product.map((item,index) => {
          return <div key={item.id}>
            <Link to={`/products/${item.id}`}>
              <h3>{item.name}</h3>
            </Link>
          </div>
        })
      }
    </div>
  )
}

export default ProductPage