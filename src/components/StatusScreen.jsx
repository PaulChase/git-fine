import React from "react";

export default function StatusScreen({ text }) {
	return (
		<div className=" h-screen w-full z-40 text-white flex items-center justify-center bg-gray-900">
			<p className=" font-bold text-2xl md:text-3xl">{text}</p>
		</div>
	);
}
