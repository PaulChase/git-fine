import React from "react";

export default function PrimaryLink({ children }) {
	return (
		<div className=" bg-gray-50 inline-block cursor-pointer">
			<div className="  bg-fuchsia-600 text-white px-6 md:px-8 font-semibold py-2 md:py-3 relative -top-1 -left-1 border-2 border-fuchsia-600 hover:bg-gray-50 hover:text-fuchsia-700 hover:-top-2 hover:-left-2 transition-all ease-linear">
				{children}
			</div>
		</div>
	);
}
