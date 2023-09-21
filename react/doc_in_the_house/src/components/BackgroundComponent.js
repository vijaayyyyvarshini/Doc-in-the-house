import ImageFadeIn from "react-image-fade-in";
import museumImage from "../assets/images/museum.jpg";
export function BackgroundComponent({
	backgroundImage = museumImage,
	content = <div>Content Required</div>,
}) {
	return (
		<div className="home-container">
			<ImageFadeIn
				opacityTransition={2}
				style={{
					objectFit: "cover",
				}}
				className="home-container background-zindex"
				src={backgroundImage}></ImageFadeIn>
			<div className="foreground-zindex">{content}</div>
		</div>
	);
}
