import { FC } from 'react'
import logo from '../../assets/hero-logo.png'
import './hero.scss'

const Hero: FC = (): JSX.Element => {
  return (
    <section className="hero">
      <div className="hero__wrapper container">
        <img src={logo} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
      </div>
    </section>
  )
}

export default Hero