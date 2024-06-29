import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import updateImg from "../../Images/couch.png";
import { useParams } from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
} from "mdb-react-ui-kit";


function Detail() {

    const { id } = useParams();

    const [name, setName] = useState([]);
    const [description, setDescription] = useState([]);
    const [image, setImage] = useState([]);
    const [price, setPrice] = useState([]);
    const [color, setColor] = useState([]);
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        axios.get('http://localhost:3001/getProduct/' + id)
            .then(result => {
                console.log(result)
                setName(result.data.name)
                setDescription(result.data.description)
                setImage(result.data.image)
                setPrice(result.data.price)
                setColor(result.data.color)
                setCategory(result.data.category)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <MDBContainer fluid className="my-5">
                <MDBRow className="justify-content-center">
                    <MDBCol md="8" lg="6" xl="4">
                        <MDBCard style={{ borderRadius: "15px" }}>
                            <MDBRipple
                                rippleColor="light"
                                rippleTag="div"
                                className="bg-image rounded hover-overlay"
                            >
                                <MDBCardImage
                                    src={image}
                                    fluid
                                    className="w-100"
                                    style={{
                                        borderTopLeftRadius: "15px",
                                        borderTopRightRadius: "15px",
                                    }}
                                />
                                <a href="#!">
                                    <div className="mask"></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody className="pb-0">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p>
                                            <a href="#!" className="text-dark">
                                                {name}
                                            </a>
                                        </p>
                                        <p className="small text-muted">{description}</p>
                                    </div>
                                    
                                </div>
                            </MDBCardBody>
                            <hr class="my-0" />
                            <MDBCardBody className="pb-0">
                                <div className="d-flex justify-content-between">
                                    
                                    <p className="text-dark">Giá: {price}.00 $</p>
                                </div>
                                <p className="small text-muted">Màu: {color}</p>
                                <p className="small text-muted">{category}</p>
                            </MDBCardBody>
                            <hr class="my-0" />
                            <MDBCardBody className="pb-0">
                                <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                                    <a href="#!" className="text-dark fw-bold">
                                        Cancel
                                    </a>
                                    <MDBBtn color="primary">Buy now</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>



        </div>
    );
}

export default Detail;