import { FC, useEffect, useState } from 'react'

import './collection.scss'
import axios from '../../api'

interface ProductsSchema {
  id: number
  price: number
  title: string
  images: string[]
}

const Collection: FC = (): JSX.Element => {

  const [data, setData] = useState<ProductsSchema[] | null>(null)

  useEffect(() => {
    axios
      .get(`/products`, { params: { limit: 3 } })
      .then((res: any): void => setData(res.data.products))
      .catch((err: any): void => console.log(err))
  }, [])

  console.log(data);

  let productsItem: JSX.Element[] | undefined = data?.map((product: ProductsSchema): JSX.Element => (
    <div key={product.id} className="collection__left__card">
      <div className="collection__left__card-img">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="collection__left__card-desc">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  ))


  return (
    <section className='collection'>
      <div className="collection__left">
          <h1>СЕЗОН 2020/21</h1>
        <div className="collection__left__cards">
          {productsItem}
        </div>
      </div>
      <div className="collection__right">
        <h1>Новая коллекция</h1>
        <button>Каталог</button>
      </div>
    </section>
  )
}

export default Collection