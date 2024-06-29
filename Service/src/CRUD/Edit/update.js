import './update.css'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import  updateImg  from "../../Images/couch.png";
import { useParams } from 'react-router-dom';


function Edit() {

    const {id} = useParams();

    const [name,setName] = useState([]);
    const [description,setDescription] = useState([]);
    const [image,setImage] = useState([]);
    const [price,setPrice] = useState([]);
    const [color,setColor] = useState([]);
    const [category,setCategory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        
        axios.get('http://localhost:3001/getProduct/' + id)
        .then(result => { console.log(result)
            setName(result.data.name)
            setDescription(result.data.description)
            setImage(result.data.image)
            setPrice(result.data.price)
            setColor(result.data.color)
            setCategory(result.data.category)
        })
        .catch(err => console.log(err))
    }, [])



    const Update = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/updateProduct/' + id, { name, description, price, color, category,image })
        .then(result => {
            console.log(result)
            navigate('/Admin')
        } )
        .catch(err => console.log(err))
    }



    return ( 
        <div>
             <div className="top_Update">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="top_left col-lg-5">
                                <h1>Update</h1>
                            </div>
                            <div className="top_right col-lg-7">
                                <img src={updateImg} />
                            </div>
                        </div>
                    </div>
                </div>
            {/* end top */}
            <div className="d-flex vh-100 bg-white justify-content-center align-items-center">
                <div className="w-50 bg-dark rounded p-3">
                    <form onSubmit={Update}>
                        <h2 className="text-white" >Update</h2>
                        <div className="mb-2 text-white">
                            <label htmlFor="" >Name</label>
                            <input type="text" className="form-control" placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 text-white">
                            <label htmlFor="" >Description</label>
                            <input type="text" className="form-control" placeholder="Enter Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 text-white">
                            <label htmlFor="" >URL Image</label>
                            <input type="text" className="form-control" placeholder="Enter Url of Image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 text-white">
                            <label htmlFor="" >price</label>
                            <input type="number" className="form-control" placeholder="Enter price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 text-white">
                            <label htmlFor="" >color</label>
                            <input type="text" className="form-control" placeholder="Enter color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 text-white">
                            <label htmlFor="" >category</label>
                            <input type="text" className="form-control" placeholder="Enter category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </div>
                       
                        <button  className="btn btn-success" >Submit</button>
                    </form>

                </div>
                
            </div>
        </div>
     );
}

export default Edit;