import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="container mx-auto px-4 py-16 text-center">
			<div className="inline-block border-3 border-black shadow-brutal p-8 bg-red mb-8">
				<h1 className="text-8xl font-bold">404</h1>
			</div>
			<h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
			<p className="text-xl mb-8">
				The page you're looking for doesn't exist or has been moved.
			</p>
			<Button variant="cyan" size="lg">
				<Link to="/">Go Home</Link>
			</Button>
		</div>
	);
}

export default NotFound;
