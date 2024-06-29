import { Link, NavLink } from 'react-router-dom';
import style from './header.module.css';
import classNames from "classnames/bind";
const cx = classNames.bind(style);



function Header() {
    return ( 
            <div className={cx("containerr")}>
                <div className={cx("menu_main")}>
                    <div>
                        <h2>2H Store</h2>
                    </div>
                    <div className={cx("menu_right")}>
                        <div className={cx("menu_page")}>
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/Shop">Shop</NavLink></li>
                                <li><a>About us</a></li>
                                <li><a>Services</a></li>
                                <li><a>Blog</a></li>
                                <li><a>Contact us</a></li>
                            </ul>
                        </div>
                        <div className={cx("menu_login_cart")}>
                            <NavLink to="/Login" ><i className="fas fa-user"></i></NavLink>
                            <a><i className="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>

     );
}

export default Header;