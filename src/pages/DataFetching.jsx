import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";

function DataFetching() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-6 relative inline-block">
				Data Fetching
				<span className="absolute -bottom-2 left-0 w-full h-3 bg-beginner -z-10"></span>
			</h1>

			<p className="text-xl mb-8">
				This page will demonstrate different data fetching techniques, from basic to
				advanced implementations.
			</p>

			<Card className="mb-8">
				<CardHeader>Coming Soon!</CardHeader>
				<CardContent>
					<p className="mb-4">
						This page is under development. Check back soon for interactive examples of:
					</p>
					<ul className="list-disc pl-5 mb-4">
						<li>Basic fetch API</li>
						<li>Axios implementation</li>
						<li>React Query</li>
						<li>SWR</li>
						<li>Custom hooks for data fetching</li>
					</ul>
					<Button variant="beginner">Coming Soon</Button>
				</CardContent>
			</Card>
		</div>
	);
}

export default DataFetching;
