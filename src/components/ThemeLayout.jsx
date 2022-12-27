import React from "react";
import TheHeader from "./TheHeader";

export default function ThemeLayout({ children }) {
	return (
		<main>
			<TheHeader />
			{children}
		</main>
	);
}
