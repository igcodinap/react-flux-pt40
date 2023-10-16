import React, {useContext} from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.userName)
	return (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<h2>Update the user name</h2>
		<input type="text" onChange={e => actions.editUserName(e.target.value)} />
		<Link to="/single/2">
			<button className="btn btn-primary">Go to single 2</button>
		</Link>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
)}
