import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";

function Projects() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-6 relative inline-block">
				Portfolio Projects
				<span className="absolute -bottom-2 left-0 w-full h-3 bg-purple -z-10"></span>
			</h1>

			<p className="text-xl mb-8">A showcase of my recent web development projects.</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
				<Card variant="coral" hover={true}>
					<CardHeader>Project One</CardHeader>
					<CardContent>
						<p className="mb-4">
							A detailed description of your first project, including technologies used
							and your role.
						</p>
						<Button variant="coral">View Details</Button>
					</CardContent>
				</Card>

				<Card variant="cyan" hover={true}>
					<CardHeader>Project Two</CardHeader>
					<CardContent>
						<p className="mb-4">
							A detailed description of your second project, including technologies used
							and your role.
						</p>
						<Button variant="cyan">View Details</Button>
					</CardContent>
				</Card>

				<Card variant="gold" hover={true}>
					<CardHeader>Project Three</CardHeader>
					<CardContent>
						<p className="mb-4">
							A detailed description of your third project, including technologies used
							and your role.
						</p>
						<Button variant="gold">View Details</Button>
					</CardContent>
				</Card>

				<Card variant="lavender" hover={true}>
					<CardHeader>Project Four</CardHeader>
					<CardContent>
						<p className="mb-4">
							A detailed description of your fourth project, including technologies used
							and your role.
						</p>
						<Button variant="lavender">View Details</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default Projects;
