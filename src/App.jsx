function App() {
	return (
		<main
			className=" text-white  font-sans h-screen w-full bg-no-repeat bg-center bg-cover relative"
			style={{ backgroundImage: "url('/bg.jpg')" }}
		>
			<div className=" bg-black/90 absolute top-0 left-0 w-full h-full"></div>
			<div className=" relative z-10 h-full w-full flex justify-center items-center text-center flex-col space-y-10">
				<h1 className=" text-6xl font-extrabold ">
					<span className=" fa fa-user-circle"></span> GitFine
				</h1>

				<p className=" font-semibold text-xl text-gray-50">Generate beautiful portfolios from your Github profile</p>

				<form className="w-[45rem]  mx-auto flex items-center">
					<input
						type="text"
						className="outline-none w-full px-4 py-3  text-gray-600"
						placeholder="Enter your Github Username..."
					/>
					<button className="bg-fuchsia-600 px-10 py-3  font-bold text-white flex items-center group">
						Generate <span className=" fa fa-chevron-right ml-2 group-hover:ml-4 transition-all ease-linear"></span>
					</button>
				</form>
			</div>
		</main>
	);
}

export default App;
