import { useContext, useEffect } from "react";
import loginContext from "../context/loginContext";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utility/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../slices/userSlice";

const Header = () => {
	const { loginStatus, updateStatus } = useContext(loginContext);
	const navigate = useNavigate();
	const dispatch = useDispatch()

	const logoutHandler = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
		
		
	};
	useEffect((() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in
				const { email, uid, displayName, photoURL } = user;
				// now add updated profile to redux store

				dispatch(
					addUser({
						email: email,
						uid: uid,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				updateStatus();
				navigate("/browse");
			} else {
				// User is signed out
				dispatch(removeUser())
				updateStatus();
				navigate("/");
			}
		});
	}),[])
	

	return (
		<div className="h-28 px-40 pt-6 flex justify-between text-white  absolute  top-0 font-semibold w-full bg-gradient-to-b from-black z-10">
			<img
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="netflix-logo"
				className="h-20 w-40"
			/>

			{loginStatus && (
				<Button text={"Logout"} functionality={logoutHandler} />
			)}
		</div>
	);
};

export default Header;
