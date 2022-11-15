import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useState, useEffect } from "react";

const ParallaxComp = ({ imgUrl, header, mystyle, loader }) => {
	//image displayed when main images are loading
	const [source, setSource] = useState(false);

	//change image url when main image is fully loaded
	useEffect(() => {
		// two lines below are to load lightweight loader images first before main images
		const loaderImg = new Image();
		loaderImg.src = loader;

		const img = new Image();
		img.src = imgUrl;
		img.onload = () => setSource(true);
	}, [imgUrl, loader]);

	return (
		<ParallaxBanner
			className="element"
			layers={[
				{
					image: source ? imgUrl : loader, //display loader photo while main photo is loading
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
};

export default ParallaxComp;
