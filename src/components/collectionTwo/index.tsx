import { FC } from 'react'

import img from '../../assets/collectiontwo-bg.png'
import './collectiontwo.scss'

const CollectionTwo: FC = (): JSX.Element => {
  return (
    <section className='collectiontwo'>
        <div className="collectiontwo__left">
          <img src={img} alt="" />
        </div>
        <div className="collectiontwo__right">
          <h1>коллекция 2018</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </p>
          <button>посмотреть коллекцию</button>
        </div>
    </section>
  )
}

export default CollectionTwo