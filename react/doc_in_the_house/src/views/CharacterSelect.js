import { Animate, AnimateGroup } from "react-simple-animate";
import { BackgroundComponent } from "../components/BackgroundComponent";
import "./Home.css";
import "./CharacterSelect.css";
import adam from "../assets/images/characters/Adam.png";
import brice from "../assets/images/characters/Brice.png";
import cam from "../assets/images/characters/Cam.png";
import casey from "../assets/images/characters/Casey.png";
import collette from "../assets/images/characters/Collette.png";
import justin from "../assets/images/characters/Justin.png";

import { useState } from "react";
import { Fade } from "react-reveal";
import { useNavigate, useSearchParams } from "react-router-dom";
export function CharacterSelect() {
	return <BackgroundComponent content={<Content />} />;
}
const opacityAnimationProps = {
	start: { opacity: 0 },
	end: { opacity: 1 },
};
const questionsAnimationProps = {
	start: {
		opacity: 0,
		transform: "translateX(-100px)",
	},
	end: {
		opacity: 1,
		transform: "translateX(0px)",
	},
};

function Content() {
	const [showMessage, setShowMessage] = useState(true);
	function messageFinish() {
		setShowMessage(false);
	}
	return (
		<div
			className=" home-container home-flex-box"
			style={{ justifyContent: "center" }}>
			<Fade bottom>
				{showMessage ? (
					<div className="character-card  message-card">
						<AnimateGroup play>
							<Animate
								duration={1}
								sequenceIndex={0}
								{...questionsAnimationProps}
								delay={1}>
								<p className="message-text">
									Have you ever wanted to be a Doctor🩺 ?
								</p>
							</Animate>
							<Animate
								duration={1}
								sequenceIndex={1}
								{...questionsAnimationProps}
								delay={1}>
								<p className="message-text">
									Then today can be your first day to
									practice😁!
								</p>
							</Animate>
							<Animate
								duration={1}
								sequenceIndex={2}
								{...questionsAnimationProps}
								delay={1}>
								<p className="message-text">
									We have some friends here today that are not
									feeling well😣, so we'll figure out what’s
									wrong with them.
								</p>
							</Animate>
							<Animate
								duration={1}
								sequenceIndex={3}
								{...questionsAnimationProps}
								delay={1}>
								<div
									onClick={() => {
										messageFinish();
									}}
									className="go-button">
									Let's Go!
								</div>
							</Animate>
						</AnimateGroup>
					</div>
				) : (
					<CharacterListBox />
				)}
			</Fade>
		</div>
	);
}

export function Character({ sequenceIndex, delay = 0, image, alt, name }) {
	const navigate = useNavigate();
	const [params, setParams] = useSearchParams();
	return (
		<div
			onClick={() => {
				params.append("patient", name);
				navigate({
					pathname: "/stations/1",
					search: "?" + params.toString(),
				});
			}}
			className="flex-item">
			<Animate
				{...opacityAnimationProps}
				sequenceIndex={sequenceIndex}
				delay={delay}>
				<div className="character-container">
					<img className="character" src={image} alt={alt} />
				</div>
				<p className="character-name">{name}</p>
			</Animate>
		</div>
	);
}
function CharacterListBox() {
	return (
		<div className="character-card">
			<Fade top>
				<p className="select-character-title">
					Pick a Patient to continue...
				</p>
			</Fade>
			<div className="character-card-flex-box">
				<AnimateGroup play>
					<Character
						alt={"Adam"}
						image={adam}
						name={"Adam"}
						sequenceIndex={0}
						delay={1.5}
					/>
					<Character
						alt={"Brice"}
						image={brice}
						name={"Brice"}
						sequenceIndex={1}
					/>
					<Character
						alt={"Cam"}
						image={cam}
						name={"Cam"}
						sequenceIndex={2}
					/>
					<Character
						alt={"Casey"}
						image={casey}
						name={"Casey"}
						sequenceIndex={3}
					/>
					<Character
						alt={"Collette"}
						image={collette}
						name={"Collette"}
						sequenceIndex={4}
					/>
					<Character
						alt={"Justin"}
						image={justin}
						name={"Justin"}
						sequenceIndex={5}
					/>
				</AnimateGroup>
			</div>
		</div>
	);
}
