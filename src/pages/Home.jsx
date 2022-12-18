import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const [username, setUsername] = useState("");

	const navigate = useNavigate();

	const handleChange = (event) => setUsername(event.target.value);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (username.length < 4) {
			return alert("Username should be more 3 chars ");
		}

		navigate(`/profile/${username}`);
	};

	return (
		<main
			className=" text-white  font-sans h-screen w-full bg-no-repeat bg-center bg-cover relative"
			style={{ backgroundImage: "url('/bg.jpg')" }}
		>
			<div className=" bg-black/90 absolute top-0 left-0 w-full h-full"></div>
			<div className=" relative z-10 h-full w-full flex justify-center items-center text-center flex-col space-y-10 px-4">
				<h1 className=" text-5xl md:text-6xl font-extrabold ">
					<span className=" fa fa-user-circle"></span> Git-Folio
				</h1>

				<p className=" font-semibold text-xl text-gray-50">Generate beautiful portfolios from your Github profile</p>

				<form
					className=" w-full lg:w-[45rem]  mx-auto flex items-center flex-col md:flex-row space-y-3 md:space-y-0"
					onSubmit={handleSubmit}
				>
					<input
						type="text"
						className="outline-none w-full px-4 py-3  text-gray-600"
						placeholder="Enter your Github Username..."
						value={username}
						onChange={handleChange}
					/>
					<button className="bg-fuchsia-600 px-10 py-3  font-bold text-white flex items-center group">
						Generate
						<span className=" fa fa-chevron-right ml-2 group-hover:ml-4 transition-all ease-linear"></span>
					</button>
				</form>

				<div className=" font-semibold">
					<p>Designed & developed by:</p>
					<a
						href="https://github.com/paulchase"
						target={"_blank"}
						className=" block font-bold px-4 py-2 border-gray-200 border-2 mt-2"
					>
						<span className=" fa fa-github mr-2"></span> Ajonye Paul
					</a>
				</div>
			</div>
		</main>
	);
}
