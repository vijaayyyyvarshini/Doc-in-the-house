import doctorImg from "../assets/images/doctor_standing.png";
import "./Home.css";
import { Animate } from "react-simple-animate";
import { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import { BackgroundComponent } from "../components/BackgroundComponent";
import museumImage from "../assets/images/museum.jpg";
export function HomeContent() {
	const [card, setCard] = useState(false);
	const [title, setTitle] = useState(false);
	const [radio, setRadio] = useState(false);
	const [doctor, setDoctor] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => setDoctor(true), 100);
		setTimeout(() => setCard(true), 100);
		setTimeout(() => setTitle(true), 1700);
		setTimeout(() => setRadio(true), 2500);
	}, []);
	function moveToCharacterSelect(language) {
		setTitle(false);
		setRadio(false);
		setCard(false);
		setDoctor(false);
		setTimeout(() => {
			navigate(`/character-select?language=${language}`);
		}, 1500);
	}
	return (
		<BackgroundComponent
			backgroundImage={museumImage}
			content={
				<div className="home-container home-flex-box">
					<Animate
						duration={1}
						play={card}
						start={{
							transform: "translateX(-200px)",
							opacity: 0,
						}}
						end={{
							transform: "translateX(0px)",
							opacity: 0.95,
						}}
						style={{ alignSelf: "center" }}>
						<div className="foreground-card">
							<Fade top when={title}>
								<p className="title">Welcome to HealthWorks</p>
								<p className="title">Kid's Museum St. Louis</p>
							</Fade>
							<Fade bottom when={radio}>
								<div>
									<p className="subtext">
										Choose your Language to get started!
									</p>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "center",
											padding: "24px",
										}}>
										<div
											onClick={() => {
												moveToCharacterSelect("en");
											}}
											className="language-radio">
											English
										</div>
										<div
											onClick={() => {
												moveToCharacterSelect("en-ES");
											}}
											className="language-radio">
											Española
										</div>
									</div>
								</div>
							</Fade>
						</div>
					</Animate>
					<div
						style={{
							content: ".",
							contentVisibility: "hidden",
							width: "40px",
						}}></div>
					<Fade right when={doctor}>
						<img
							className="home-doctor-img"
							alt="doctor"
							src={doctorImg}
						/>
					</Fade>
				</div>
			}
		/>
	);
}
