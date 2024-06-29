import  createImg  from "../../Images/couch.png";
import './create.css';
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Create() {
    const [name,setName] = useState();
    const [description,setDescription] = useState();
    const [image,setImage] = useState();
    const [price,setPrice] = useState();
    const [color,setColor] = useState();
    const [category,setCategory] = useState();
    const navigate = useNavigate();


    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createProduct", { name, description, price, color, category,image })
        .then(result => {
            console.log(result)
            navigate('/Admin')
        } )
        .catch(err => console.log(err))
    }


    return ( 

        <div>
             <div className="top_Create">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="top_left col-lg-5">
                                <h1>Create</h1>
                            </div>
                            
                        </div>
                    </div>
                </div>
            {/* end top */}
            <div className="d-flex vh-100 bg-white justify-content-center align-items-center">
                <div className="w-50 bg-dark rounded p-3">
                    <form onSubmit={Submit}>
                        <h2 className="text-white" >Add User</h2>
                        <div className="mb-2 text-white">
                            <label htmlFor="" >Name</label>
                            <input type="text" className="form-control" placeholder="Enter Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 text-white">
                            <label htmlFor="" >Description</label>
                            <input type="text" className="form-control" placeholder="Enter Description"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 text-white">
                            <label htmlFor="" >URL Image</label>
                            <input type="text" className="form-control" placeholder="Enter Url of Image"
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 text-white">
                            <label htmlFor="" >price</label>
                            <input type="number" className="form-control" placeholder="Enter price"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 text-white">
                            <label htmlFor="" >color</label>
                            <input type="text" className="form-control" placeholder="Enter color"
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </div>
                        <div className="mb-2 text-white">
                            <label htmlFor="" >category</label>
                            <input type="text" className="form-control" placeholder="Enter category"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </div>
                       
                        <button className="btn btn-success" >Submit</button>
                    </form>

                </div>
                
            </div>
        </div>
     );
}

export default Create;