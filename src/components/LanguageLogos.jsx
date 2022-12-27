import React from "react";
import Image from "./Image";

export default function LanguageLogos({ languages }) {
	return (
		<div className=" space-x-3 flex items-center whitespace-nowrap overflow-x-auto py-4 scrollbar-none ">
			{Array.from(new Set(languages)).map((language, index) => (
				<Image
					key={index}
					src={`/logos/${language}.svg`}
					className=" inline-block w-20 h-20 md:w-28 md:h-28 cursor-pointer hover:-translate-y-2 transition-all ease-linear hover:scale-110"
				/>
			))}
		</div>
	);
}
