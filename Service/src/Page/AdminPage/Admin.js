import style from './Admin.module.css';

import React, { useEffect } from 'react';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from 'axios';
import classNames from "classnames/bind";
const cx = classNames.bind(style);

function Admin() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [filterData, setFilterData] = useState([]);



  useEffect(() => {
    axios.get('http://localhost:3001/Admin')
      .then(result => { 
        setProducts(result.data)
        setFilterData(result.data)

      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3001/Logout')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
  }, [])

  const handleFilterr = (value) => {
    const searchcategory = filterData.filter(f => f.category.includes(value));
    setProducts(searchcategory);
}


  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/deleteProduct/' + id)
      .then(res => {
        console.log(res)
        window.location.reload();
      })
      .catch(err => console.log(err))
  }


  return (
    <div>

      <div className={cx("top_Admin")}>
        <div className={cx("container")}>
          <div className={cx("row", "justify-content-between")}>
            <div className={cx("top_left", "col-lg-5")}>
              <h1 className={cx("text-white")} >Admin</h1>
              {
                users.map((u) => {
                  return (
                    <h3 className={cx("text-white", "p-3")} >Hello {u.username} </h3>
                  );
                })
              }
              <NavLink to="/" clasName={cx("btn", "btn-success")} >Log out</NavLink>
            </div>

          </div>
        </div>
      </div>
      {/* end top */}




      <div className="container list_product d-flex mt-5 justify-content-center align-items-center">
        <div className=" rounded">
          <Link to="/create" className="text-white text-decoration-none btn btn-primary">Add</Link>
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
          <table className='table col-lg-12 m-5' >
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Image</th>
                <th>price</th>
                <th>color</th>
                <th>category</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((p) => {
                  return (
                    <tr className='height' key={p._id}  >
                      <td>{p.name}</td>
                      <td>{p.description}</td>
                      <td><img src={p.image} className={cx("img")} /></td>
                      <td>{p.price}</td>
                      <td>{p.color}</td>
                      <td>{p.category}</td>
                      <td>
                        <NavLink to={`/Update/${p._id}`} className='btn btn-primary m-2'>Edit</NavLink>

                        <button className='btn btn-danger m-2' onClick={() => handleDelete(p._id)}>Delete</button>
                      </td>
                    </tr>
                  );

                })
              }
            </tbody>

          </table>
          
        </div>
      </div>

    </div>
  );



}

export default Admin;




