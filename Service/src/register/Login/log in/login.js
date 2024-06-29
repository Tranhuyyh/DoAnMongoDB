import React, { useEffect, useState } from "react";
import style from '../css/main.module.css';
import home from "../../../Images/img-01.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import classNames from "classnames/bind";
const cx = classNames.bind(style);




function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		axios.post('http://localhost:3001/login', { username, password })
			.then(result => {
				console.log(result)
				if (result.data === "Login successfully") {
					navigate('/Admin')
				}else if(result.data === "The password is incorrect"){
					alert("The password is incorrect");
				}else{
					alert("The username does not exist")
				}

			})
			.catch(err => console.log(err))
	}

	return (
		<div className={cx("limiter")}>
			<div className={cx("container-login100")}>
				<div className={cx("wrap-login100")}>
					<div className={cx("login100-pic", "js-tilt")} >
						<img src={home} alt="IMG" />
					</div>

					<form className={cx("login100-form", "validate-form")} onSubmit={handleSubmit} >
						<span className={cx("login100-form-title")}>
							Admin Login
						</span>

						<div className={cx("wrap-input100", "validate-input")} data-validate="Your userName dose not exits">
							<input className={cx("input100")} type="text" name="text" placeholder="User Name" onChange={(e) => setUsername(e.target.value)} />
							<span className={cx("focus-input100")}></span>
							<span className={cx("symbol-input100")}>

								<i className="fa-solid fa-user" aria-hidden="true"></i>
							</span>
						</div>

						<div className={cx("wrap-input100", "validate-input")} data-validate="Password is required">
							<input className={cx("input100")} type="password" name="pass" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
							<span className={cx("focus-input100")}></span>
							<span className={cx("symbol-input100")}>
								<i className="fa fa-lock" aria-hidden="true"></i>
							</span>
						</div>

						<div className={cx("container-login100-form-btn")}>
							<button type="submit" className={cx("login100-form-btn", "bottomLogin", "btn", "btn-success")} >
								Login
							</button>
						</div>

						<div className={cx("text-center", "p-t-12")}>
							<span className={cx("txt1")}>
								Forgot
							</span>
							<a className={cx("txt2")} href="#">
								Username / Password?
							</a>
						</div>

						<div className={cx("text-center", "p-t-136")}>
							<a className={cx("txt2")} href="#">
								Create your Account
								<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
							</a>
						</div>
					</form>

				</div>
			</div>
		</div>
	);

}

export default Login;