import { lazy } from 'react'

const ProductDetailsRoutes = [
  {
    path: '/sanproducts/products',
    component: lazy(() => import('../../views/sanproducts/products.js'))
  }

  
]

export default ProductDetailsRoutes