import { ParallaxBanner } from "react-scroll-parallax";
import { useState, useEffect } from "react";
import Loader from "./Loader";

const ParallaxComp = ({ imgUrl, header, mystyle }) => {
	//images loading state
	const [loading, setLoading] = useState(true);
	//change state to false when photo is loaded
	useEffect(() => {
		const img = new Image();
		img.src = imgUrl;
		img.onload = () => setLoading(false);
	}, [imgUrl]);

	if (loading) {
		return <Loader />; //loader component while main photos are loading
	} else {
		return (
			<ParallaxBanner
				className="element"
				layers={[
					{
						image: imgUrl,
						speed: -15,
					},
					{
						speed: -35,
						children: (
							<div className="textContainer" style={mystyle}>
								<h1 className="header">{header}</h1>
							</div>
						),
					},
				]}
			/>
		);
	}
};

export default ParallaxComp;
