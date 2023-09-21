import { BackgroundComponent } from "../../components/BackgroundComponent";
import "react-step-progress-bar/styles.css";
import "./station-main.css";
import hospital from "../../assets/images/hospital-2.jpg";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Fade } from "react-reveal";
import { Outlet } from "react-router-dom";
import { useState } from "react";
export function StationMain() {
	return (
		<BackgroundComponent backgroundImage={hospital} content={<Content />} />
	);
}

const apiData = {
	_id: { $oid: "624588e588761360b9821e18" },
	name: "Collette",
	diagnosis: {
		bones: false,
		temperature: 98.6,
		heart: 130,
		skin: "Normal",
		urine: "plain yellow",
		eye_sight: "normal",
		throat: "normal",
		snot: "white",
		vomit: false,
		reflex: "normal",
		food: ["whole milk", "gelatin", "chicken noodle soup"],
		lung: "fast and wheezing",
	},
};

const progressRatio = 8.333333333333333;
function Content() {
	const [progress, setProgress] = useState(1);
	return (
		<div className="station-container">
			<Fade right>
				<div className="progress-bar-card">
					<ProgressBar
						hasStepZero={false}
						percent={
							progress * progressRatio < 100
								? progress * progressRatio
								: 100
						}
						height={15}
						filledBackground="linear-gradient(to right,  #2D99AA, #104B6D)">
						<Step transition="scale">
							{({ accomplished, index }) => {
								return (
									<StepContent
										accomplished={accomplished}
										stepNumber={index + 1}
										title="Bones"
									/>
								);
							}}
						</Step>
						<Step transition="scale">
							{({ accomplished, index }) => {
								return (
									<StepContent
										accomplished={accomplished}
										stepNumber={index + 1}
										title="Temp"
									/>
								);
							}}
						</Step>
						<Step transition="scale">
							{({ accomplished, index }) => {
								return (
									<StepContent
										accomplished={accomplished}
										stepNumber={index + 1}
										title="Heart"
									/>
								);
							}}
						</Step>
						<Step transition="scale">
							{({ accomplished, index }) => {
								return (
									<StepContent
										accomplished={accomplished}
										stepNumber={index + 1}
										title="Skin"
									/>
								);
							}}
						</Step>
						<Step transition="scale">
							{({ accomplished, index }) => {
								return (
									<StepContent
										accomplished={accomplished}
										stepNumber={index + 1}
										title="Urine"
									/>
								);
							}}
						</Step>
						<Step transition="scale">
							{({ accomplished, index }) => {
								return (
									<StepContent
										accomplished={accomplished}
										stepNumber={index + 1}
										title="Eyes"
									/>
								);
							}}
						</Step>
						<Step transition="scale">
							{({ accomplished, index }) => {
								return (
									<StepContent
										accomplished={accomplished}
										stepNumber={index + 1}
										title="Throat"
									/>
								);
							}}
						</Step>
						<Step transition="scale">
							{({ accomplished, index }) => {
								return (
									<StepContent
										accomplished={accomplished}
										stepNumber={index + 1}
										title="Snot"
									/>
								);
							}}
						</Step>
						<Step transition="scale">
							{({ accomplished, index }) => {
								return (
									<StepContent
										accomplished={accomplished}
										stepNumber={index + 1}
										title="Vomit"
									/>
								);
							}}
						</Step>
						<Step transition="scale">
							{({ accomplished, index }) => {
								return (
									<StepContent
										accomplished={accomplished}
										stepNumber={index + 1}
										title="Reflex"
									/>
								);
							}}
						</Step>

						<Step transition="scale">
							{({ accomplished, index }) => {
								return (
									<StepContent
										accomplished={accomplished}
										stepNumber={index + 1}
										title="Lungs"
									/>
								);
							}}
						</Step>
						<Step transition="scale">
							{({ accomplished, index }) => {
								return (
									<StepContent
										accomplished={accomplished}
										stepNumber={index + 1}
										title="Food"
									/>
								);
							}}
						</Step>
					</ProgressBar>
				</div>
			</Fade>

			<div
				style={{
					content: ".",
					contentVisibility: "hidden",
					height: "120px",
				}}></div>

			<div
				style={{
					height: "85%",
				}}>
				<Outlet context={[apiData]} />
			</div>
			<div
				style={{
					position: "absolute",
					zIndex: "4",
					bottom: "20px",
					right: "20px",
					display: "flex",
					flexFlow: "row",
				}}>
				{progress > 1 && (
					<div
						onClick={() => {
							setProgress(progress - 1);
						}}
						style={{
							height: "10vmin",
							width: "10vmin",
							lineHeight: "10vmin",
							borderRadius: "50%",
							backgroundColor: "red",
							color: "white",
							textAlign: "center",
						}}>
						Prev
					</div>
				)}
				<div
					onClick={() => {
						setProgress(progress + 1);
					}}
					style={{
						height: "10vmin",
						width: "10vmin",
						lineHeight: "10vmin",
						borderRadius: "50%",
						backgroundColor: "red",
						color: "white",
						textAlign: "center",
					}}>
					Next
				</div>
			</div>
		</div>
	);
}

function StepContent({ accomplished, stepNumber, title }) {
	return (
		<div className="step-container">
			<div
				className="step"
				style={{
					backgroundColor: accomplished ? "#104B6D" : "white",
				}}>
				<p
					className="step-text"
					style={{
						color: accomplished ? "white" : "#104B6D",
					}}>
					{stepNumber}
				</p>
			</div>
			<p className="step-title">{title}</p>
		</div>
	);
}
