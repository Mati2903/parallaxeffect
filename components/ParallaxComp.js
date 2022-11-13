import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const ParallaxComp = ({ imgUrl, speed, header, mystyle }) => {
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
};

export default ParallaxComp;
