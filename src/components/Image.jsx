import React, { useRef, useState } from "react";

export default function Image({ src, className }) {
	const image = useRef(null);
	const [valid, setValid] = useState(true);

	const checkValid = () => {
		if (!image.current.complete || image.current.naturalWidth < 1 || image.current.naturalHeight < 1) setValid(false);
	};

	if (!valid) return null;

	return <img src={src} onLoad={checkValid} onError={() => setValid(false)} ref={image} className={className} />;
}
