import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";

function Performance() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-6 relative inline-block">
				Performance Optimization
				<span className="absolute -bottom-2 left-0 w-full h-3 bg-senior -z-10"></span>
			</h1>

			<p className="text-xl mb-8">
				This page will demonstrate performance optimization techniques for React
				applications.
			</p>

			<Card className="mb-8" variant="senior">
				<CardHeader>Coming Soon!</CardHeader>
				<CardContent>
					<p className="mb-4">
						This page is under development. Check back soon for interactive examples of:
					</p>
					<ul className="list-disc pl-5 mb-4">
						<li>React.memo usage</li>
						<li>useCallback and useMemo implementations</li>
						<li>Code splitting techniques</li>
						<li>Virtualized lists</li>
						<li>Performance profiling and optimization</li>
					</ul>
					<Button variant="senior">Coming Soon</Button>
				</CardContent>
			</Card>
		</div>
	);
}

export default Performance;
