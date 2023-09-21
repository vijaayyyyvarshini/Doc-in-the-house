import "./station_1_bones.css";
import doctor from "../../assets/images/doctor_standing.png";
import brokenBones from "../../assets/images/bones-broken.jpg";
import { useSearchParams } from "react-router-dom";
import adam from "../../assets/images/characters/Adam.png";
import brice from "../../assets/images/characters/Brice.png";
import cam from "../../assets/images/characters/Cam.png";
import casey from "../../assets/images/characters/Casey.png";
import collette from "../../assets/images/characters/Collette.png";
import justin from "../../assets/images/characters/Justin.png";
import ImgsViewer from "react-images-viewer";
import { useState } from "react";
import { Animate, AnimateGroup } from "react-simple-animate";
import { Fade } from "react-reveal";

const patientMap = {
	Adam: adam,
	Brice: brice,
	Cam: cam,
	Casey: casey,
	Collette: collette,
	Justin: justin,
};
const messageBoxAnimationProps = {
	start: {
		opacity: 0,
		transform: " translateX(50px) scale(0.7) translateY(20px)",
	},
	end: {
		opacity: 1,
		transform: " translateX(0px) scale(1)  translateY(0px)",
	},
};
const characterAnimationProps = {
	start: {
		opacity: 0,
		transform: " scale(0.4) ",
	},
	end: {
		opacity: 1,
		transform: " scale(1)",
	},
};
export function Station1Bones() {
	const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
	const [params, setParams] = useSearchParams();
	const patientName = params.get("patient");

	return (
		<div className="bones-station-container">
			<Fade bottom>
				<img className="doctor-img" alt="Doctor" src={doctor}></img>
			</Fade>

			<div className="bones-station-content">
				<div className="bones-station-card">
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							height: "100%",
						}}>
						<div className="imessage">
							<AnimateGroup play>
								<Animate
									delay={3}
									sequenceIndex={0}
									{...messageBoxAnimationProps}>
									<p className="from-me">
										Can you please examine my X-Ray Please?
									</p>
								</Animate>
								<Animate
									delay={1}
									sequenceIndex={1}
									{...messageBoxAnimationProps}>
									<div
										style={{
											display: "flex",
											flexFlow: "row",
										}}>
										<div
											onClick={() => {
												setIsImageViewerOpen(true);
											}}
											style={{
												flexGrow: 1,
												flexShrink: 0,
												content: ".",
												contentVisibility: "hidden",
											}}></div>
										<p className="from-me">
											<img
												onClick={() => {
													setIsImageViewerOpen(true);
												}}
												className="x-ray"
												alt={"bones"}
												src={brokenBones}
											/>
											<ImgsViewer
												backdropCloseable={true}
												imgs={[{ src: brokenBones }]}
												isOpen={isImageViewerOpen}
												onClose={() => {
													setIsImageViewerOpen(false);
												}}
											/>
										</p>
									</div>
								</Animate>
							</AnimateGroup>
						</div>
						<Animate play delay={1.5} {...characterAnimationProps}>
							<img
								className="bones-character-container"
								alt={patientName}
								src={patientMap[patientName]}
							/>
							<div className="patient-name">{patientName}</div>
						</Animate>
					</div>
				</div>
			</div>
		</div>
	);
}
