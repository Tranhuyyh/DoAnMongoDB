import style from './Shop.module.css';
import shopImg from "../../Images/couch.png";
import React, { useEffect } from 'react';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from 'axios';
import classNames from "classnames/bind";
import cross from "../../Images/cross.svg"

const cx = classNames.bind(style);


function Shopping() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/Shop')
            .then(result => {
                setProducts(result.data)
                setFilterData(result.data)
            })
            .catch(err => console.log(err))
    }, [])


    const [filterData, setFilterData] = useState([]);

    const handleFilter = (value) => {
        const searchname = filterData.filter(f => f.name.toLowerCase().includes(value));
        setProducts(searchname);
    }
    const handleFilterr = (value) => {
        const searchcategory = filterData.filter(f => f.category.includes(value));
        setProducts(searchcategory);
    }

    return (
        <div>
            <div className={cx("top_Shop")}>
                <div className={cx("container")}>
                    <div className={cx("row", "justify-content-between")}>
                        <div className={cx("top_left", "col-lg-5")}>
                            <h1>Modern interior <span className={cx("d-block")}>Design Studio</span></h1>
                            <p className={cx("mb-4")}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                            <button className={cx("btn btn-warning", "btn1")}>Shop Now</button>
                            <button className={cx("btn2")}>Explore</button>
                        </div>
                        <div className={cx("top_right", "col-lg-7")}>
                            <img src={shopImg} />
                        </div>
                    </div>
                </div>
            </div>
            {/* end top */}

            <div className={cx("input-group", "mt-5", "mb-5")}>
                <div className={cx("containerr")}>
                    <input type="text" placeholder="Search..." onChange={e => handleFilter(e.target.value)} />
                    <div className={cx("search")}></div>

                </div>
            </div>
            <div className={cx("select")} tabindex="1">
                <input className={cx("selectopt")} name="test"  type="radio" id="opt1" checked  onChange={e => handleFilterr(e.target.value)}/>
                    <label for="opt1" className={cx("option")}>Category</label>
                    <input className={cx("selectopt")} name="test" value={"Ghế"}  type="radio" id="opt2" onChange={e => handleFilterr(e.target.value)} />
                        <label for="opt2" className={cx("option")}>Ghế</label>
                        <input className={cx("selectopt")} name="test" value={"Bàn"} type="radio" id="opt3" onChange={e => handleFilterr(e.target.value)} />
                            <label for="opt3" className={cx("option")}>Bàn</label>
                        <input className={cx("selectopt")} name="test" value={""} type="radio" id="opt4" onChange={e => handleFilterr(e.target.value)} />
                            <label for="opt4" className={cx("option")}>All</label>
                            
                                </div>

                                <div className={cx("CardProduct", "container")}>
                                    <div className={cx("row")} >


                                        {products.map((p) => {

                                            return (
                                                <div className={cx("list", "productCart", "mt-5", "mb-5", "p-3")} key={p._id}>
                                                    <div className={cx("container")}>
                                                        <div className={cx("row")} >
                                                            <NavLink to={`/Detail/${p._id}`} className={cx("text-decoration-none")}  >
                                                                <a className={cx("main_right")}>
                                                                    <img className={cx("home_product")} src={p.image} />
                                                                    <p className={cx("p")}>{p.name} <b className={cx("d-block")}>{p.price}.00 $</b></p>
                                                                    <span className={cx("icon_cross")}>
                                                                        <img src={cross} className={cx("img-fluid")} />
                                                                    </span>
                                                                </a>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>


                                            );



                                        })
                                        }

                                    </div>
                                </div>










                            </div>
                            );
}

                            export default Shopping;