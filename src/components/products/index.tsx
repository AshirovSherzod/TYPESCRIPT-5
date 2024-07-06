import { FC, useEffect, useState } from 'react'
import axios from '../../api'

import './products.scss'

interface ProductsSchema {
  id: number
  price: number
  title: string
  images: string[]
}

const Products: FC = (): JSX.Element => {

  const [data, setData] = useState<ProductsSchema[] | null>(null)

  useEffect(() => {
    axios
      .get(`/products`, { params: { limit: 9 } })
      .then((res: any): void => setData(res.data.products))
      .catch((err: any): void => console.log(err))
  }, [])

  let card: JSX.Element[] | undefined = data?.map((product: ProductsSchema): JSX.Element => (
    <div key={product.id} className="products__card">
      <div className="products__card-img">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="products__card-desc">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  ))

  return (
    <section className='products'>
      <div className="products__wrapper container">
        <h1>новые поступления</h1>
        <div className="products__cards">
          {card}
        </div>
      </div>
    </section>
  )
}

export default Products