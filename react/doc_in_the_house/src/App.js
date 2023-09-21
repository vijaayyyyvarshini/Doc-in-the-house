import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeContent } from "./views/Home";
import { CharacterSelect } from "./views/CharacterSelect";
import { StationMain } from "./views/stations/station-main";
import { Station1Bones } from "./views/stations/station_1_bones";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomeContent />}></Route>
				<Route
					path="character-select"
					element={<CharacterSelect />}></Route>
				<Route path="stations" element={<StationMain />}>
					<Route exact path="1" element={<Station1Bones />} />
					<Route exact path="2" element={<div>station2</div>} />
					<Route exact path="3" element={<div>station2</div>} />
					<Route exact path="4" element={<div>station2</div>} />
					<Route exact path="5" element={<div>station2</div>} />
					<Route exact path="6" element={<div>station2</div>} />
					<Route exact path="7" element={<div>station2</div>} />
					<Route exact path="8" element={<div>station2</div>} />
					<Route exact path="9" element={<div>station2</div>} />
					<Route exact path="10" element={<div>station2</div>} />
					<Route exact path="11" element={<div>station2</div>} />
					<Route exact path="12" element={<div>station2</div>} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
