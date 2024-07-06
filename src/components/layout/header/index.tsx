import { FC } from 'react'
import './header.scss'
import img from '../../../assets/logo.png'
import { BiCart } from 'react-icons/bi'
import { IoIosSearch } from 'react-icons/io'
import { HiOutlinePhone } from 'react-icons/hi'

const Header: FC = (): JSX.Element => {
    return (

        <header>
            <div className="sub">
                <div className="sub__wrapper container">
                    <div className="sub__left">
                        <p><HiOutlinePhone /></p>
                        <p><span>8 (812) 123-45-67</span>|<span>Работаем 7 дней в неделю</span>|<span>9:00 — 18:00</span></p>
                    </div>
                    <div className="sub__right">
                        <p>Войти / Регистрация</p>
                    </div>
                </div>
            </div>
            <nav className='nav'>
                <div className="nav__wrapper container">
                    <div className="nav__logo">
                        <img src={img} alt="" />
                    </div>
                    <div className="nav__links">
                        <ul>
                            <li><a href="#">Понравилось</a></li>
                            <li><a href="#">личный кабинет</a></li>
                            <li><a href="#">настройки</a></li>
                            <li><a href="#"><BiCart /></a></li>
                            <li><a href="#"><IoIosSearch /></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header

