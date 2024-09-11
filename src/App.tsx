import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import { changeOrderByPrice } from './helpers/changeOrderByPrice'
import RegisterForm from './components/RegisterForm/RegisterForm'
import { User } from 'types/UserType'

type ProductType = {
  id: number,
  name: string,
  price: number
}
const productList: Array<ProductType> = [
  { id: 3, name: 'Chorizo a la sidra', price: 25},
  {
    id: 2,
    name: 'Jujuy',
    price: 32,
  },
  { id: 1, name: 'Cachopo', price: 35 }
]

function App () {
  const [products] = useState(productList)

  const showUser = (user : User) => {
    console.log('user::', user)
  }
  return (
    <>
      <h1>Productos</h1>
      <ProductList initialProducts={changeOrderByPrice(products)} />
      <button name='btnOrder' >Ordenar</button>


      <RegisterForm  createUser={user => showUser(user)} />
    </>
  )
}

export default App
