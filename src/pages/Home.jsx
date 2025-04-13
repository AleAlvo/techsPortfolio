import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="container mx-auto px-4 py-8">
			{/* Hero Section */}
			<section className="mb-16">
				<div className="flex flex-col md:flex-row items-center gap-8">
					<div className="flex-1">
						<h1 className="text-5xl font-bold mb-4">Front-End Developer Portfolio</h1>
						<p className="text-xl mb-6">
							A showcase of modern front-end development techniques and best practices
						</p>
						<div className="flex flex-wrap gap-4">
							<Button variant="beginner" size="lg">
								<Link to="/data-fetching">Data Fetching</Link>
							</Button>
							<Button variant="mid" size="lg">
								<Link to="/data-filtering">Data Filtering</Link>
							</Button>
							<Button variant="senior" size="lg">
								<Link to="/performance">Performance</Link>
							</Button>
						</div>
					</div>
					<div className="flex-1">
						<div className="border-3 border-black shadow-brutal bg-light-yellow p-6">
							<pre className="text-sm font-mono">
								{`// Welcome to my portfolio
const developer = {
  name: "Your Name",
  skills: ["React", "JavaScript", "UI/UX"],
  passion: "Creating engaging web experiences"
};

// Check out my technique demos!`}
							</pre>
						</div>
					</div>
				</div>
			</section>

			{/* Skill Categories */}
			<section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
				<Card variant="beginner" hover={true}>
					<CardHeader>Beginner Techniques</CardHeader>
					<CardContent>
						<p className="mb-4">
							Foundational concepts and approaches for front-end development.
						</p>
						<ul className="list-disc pl-5 mb-4">
							<li>Basic React Hooks</li>
							<li>Simple API calls</li>
							<li>Component organization</li>
						</ul>
						<Button variant="default">
							<Link to="/data-fetching">Explore</Link>
						</Button>
					</CardContent>
				</Card>

				<Card variant="mid" hover={true}>
					<CardHeader>Mid-Level Techniques</CardHeader>
					<CardContent>
						<p className="mb-4">
							Intermediate strategies for efficient front-end development.
						</p>
						<ul className="list-disc pl-5 mb-4">
							<li>Custom hooks</li>
							<li>Advanced state management</li>
							<li>Optimized rendering</li>
						</ul>
						<Button variant="default">
							<Link to="/data-filtering">Explore</Link>
						</Button>
					</CardContent>
				</Card>

				<Card variant="senior" hover={true}>
					<CardHeader>Senior Techniques</CardHeader>
					<CardContent>
						<p className="mb-4">
							Advanced patterns for performant front-end applications.
						</p>
						<ul className="list-disc pl-5 mb-4">
							<li>Performance optimizations</li>
							<li>Architecture patterns</li>
							<li>Advanced React features</li>
						</ul>
						<Button variant="default">
							<Link to="/performance">Explore</Link>
						</Button>
					</CardContent>
				</Card>
			</section>

			{/* Featured Projects */}
			<section className="mb-16">
				<h2 className="text-3xl font-bold mb-6 relative inline-block">
					Featured Projects
					<span className="absolute -bottom-2 left-0 w-full h-3 bg-light-pink -z-10"></span>
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<Card variant="coral" hover={true}>
						<CardHeader>Project One</CardHeader>
						<CardContent>
							<p>A description of your first featured project.</p>
							<Button variant="default" className="mt-4">
								<Link to="/projects">View Project</Link>
							</Button>
						</CardContent>
					</Card>
					<Card variant="cyan" hover={true}>
						<CardHeader>Project Two</CardHeader>
						<CardContent>
							<p>A description of your second featured project.</p>
							<Button variant="default" className="mt-4">
								<Link to="/projects">View Project</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
}

export default Home;
