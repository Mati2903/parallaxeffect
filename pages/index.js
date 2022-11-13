import Head from "next/head";
import ParallaxComp from "../components/ParallaxComp";

export default function Home() {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<div>
			<Head>
				<title>Parallax Scroll Effect</title>
				<meta
					name="description"
					content="Just NextJS app with Parallax scroll effect"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ParallaxComp
				className="parallax-parent"
				imgUrl="./images/DJI_0210.JPG"
				header="Hello"
			/>
			<div className="divisionBanner"></div>

			<ParallaxComp imgUrl="./images/JXWEE9121.JPG" header="relax" />
			<div className="divisionBanner"></div>
			<ParallaxComp
				imgUrl="./images/ITKYE2655.JPG"
				header="take a deep breath"
			/>
			<div className="divisionBanner"></div>
			<ParallaxComp
				imgUrl="./images/YETEE7805.JPG"
				speed={-15}
				header="and look on earth"
			/>
			<div className="divisionBanner"></div>
			<ParallaxComp imgUrl="./images/WVTY1930.JPG" header="from above" />
			<div className="divisionBanner"></div>
			<ParallaxComp imgUrl="./images/HXXY5174.JPG" header="and then" />
			<div className="divisionBanner"></div>
			<ParallaxComp
				imgUrl="./images/IMG_E3725.JPG"
				header="pay close attention"
			/>
			<div className="divisionBanner"></div>
			<ParallaxComp
				imgUrl="./images/IMG_E3913.JPG"
				header="to details"
				mystyle={{ top: "55%" }}
			/>
			<footer className="footer">Copyright &copy; {year} Mati2903</footer>
		</div>
	);
}
