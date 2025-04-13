import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";

function DataFiltering() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-6 relative inline-block">
				Data Filtering
				<span className="absolute -bottom-2 left-0 w-full h-3 bg-mid -z-10"></span>
			</h1>

			<p className="text-xl mb-8">
				This page will demonstrate different data filtering and searching techniques.
			</p>

			<Card className="mb-8" variant="mid">
				<CardHeader>Coming Soon!</CardHeader>
				<CardContent>
					<p className="mb-4">
						This page is under development. Check back soon for interactive examples of:
					</p>
					<ul className="list-disc pl-5 mb-4">
						<li>Basic array filters</li>
						<li>Debounced search</li>
						<li>Multi-criteria filtering</li>
						<li>Sorting and pagination</li>
						<li>Performance optimization techniques</li>
					</ul>
					<Button variant="mid">Coming Soon</Button>
				</CardContent>
			</Card>
		</div>
	);
}

export default DataFiltering;
