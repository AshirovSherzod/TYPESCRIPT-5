import { FC } from 'react'
import img from '../../../assets/footer-img.png'
import './footer.scss'
const Footer: FC = (): JSX.Element => {
  return (
    <footer className='footer'>
      <div className="footer__wrapper container">
          <h1>наши бренды</h1>
          <div className="footer__images">
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
          </div>
      </div>
    </footer>
  )
}

export default Footer