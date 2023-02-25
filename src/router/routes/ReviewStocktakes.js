import { lazy } from 'react'

const ReviewStocktakesRoutes = [
  {
    path: '/sanproducts/reviewsstock',
    component: lazy(() => import('../../views//sanproducts/reviewsstock.js'))
  }

  
]

export default ReviewStocktakesRoutes