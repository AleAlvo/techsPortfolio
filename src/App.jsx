import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DataFetching from "./pages/DataFetching";
import DataFiltering from "./pages/DataFiltering";
import Performance from "./pages/Performance";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<div>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/data-fetching" element={<DataFetching />} />
					<Route path="/data-filtering" element={<DataFiltering />} />
					<Route path="/performance" element={<Performance />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
