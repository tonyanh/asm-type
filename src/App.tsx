import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'
import ProductManagementPage from './pages/admin/ProductManagementPage'
import AddProductPage from './pages/admin/AddProductPage'
import UpdateProductPage from './pages/admin/UpdateProductPage'
import { IProduct } from './types/product'
import { addProduct, deleteProduct, getAllProducts, updateProduct } from './api/product'
function App() {
  const [product, setProduct] = useState<IProduct[]>([])
  useEffect(() => {
    getAllProducts().then(({data}) => setProduct(data))
  })
  const onHandleRemove = (id:number) => {
    deleteProduct(id).then(() => setProduct(product.filter((item:IProduct) => item.id !== id)))
  }
  const onHandleAdd = (product:IProduct) => {
    addProduct(product).then(() => setProduct([...product, product]))
  }
  // const onHandleUpdate = (product:IProduct) => {
  //   updateProduct(product).then(() => setProduct(product.map((item) => item.id == product.id ? product : item)))
  // }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => {
      message.success('Update thanh cong')
    }).then(() => setProduct(products.map((item) => item.id == product.id ? product : item)))
  }
  return (
    <div className="App">
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage/>}/>
            <Route path='/products' element={<ProductPage products={product}/>}/>
            <Route path='/products/:id' element={<ProductDetail/>}/>
          </Route>
          <Route path='/admin'>
            <Route path='products'>
            <Route index element={<ProductManagementPage products={product} onRemove={onHandleRemove}/>}/>
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd}/>}/>
            <Route path='update/:id' element={<UpdateProductPage products={product} onUpdate={onHandleUpdate}/>}/>
            </Route>
          </Route>
        </Routes>
    </div>
  )
}

export default App
