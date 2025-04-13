import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="bg-white border-b-3 border-black relative">
			<div className="container mx-auto px-4 py-3">
				<div className="flex items-center justify-between">
					<Link to="/" className="text-xl font-bold">
						Dev<span className="bg-beginner px-1">Portfolio</span>
					</Link>

					<div className="hidden md:flex space-x-2">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/data-fetching" color="beginner">
							Data Fetching
						</NavLink>
						<NavLink to="/data-filtering" color="mid">
							Data Filtering
						</NavLink>
						<NavLink to="/performance" color="senior">
							Performance
						</NavLink>
						<NavLink to="/projects" color="coral">
							Projects
						</NavLink>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							className="border-2 border-black p-1.5 shadow-brutal-sm hover:bg-gray-100 active:translate-y-0.5 active:translate-x-0.5 active:shadow-none transition-all duration-100"
							onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile menu */}
				{isMenuOpen && (
					<div className="md:hidden py-4 border-t-2 border-black">
						<div className="flex flex-col space-y-2">
							<MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>
								Home
							</MobileNavLink>
							<MobileNavLink
								to="/data-fetching"
								color="beginner"
								onClick={() => setIsMenuOpen(false)}>
								Data Fetching
							</MobileNavLink>
							<MobileNavLink
								to="/data-filtering"
								color="mid"
								onClick={() => setIsMenuOpen(false)}>
								Data Filtering
							</MobileNavLink>
							<MobileNavLink
								to="/performance"
								color="senior"
								onClick={() => setIsMenuOpen(false)}>
								Performance
							</MobileNavLink>
							<MobileNavLink
								to="/projects"
								color="coral"
								onClick={() => setIsMenuOpen(false)}>
								Projects
							</MobileNavLink>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

function NavLink({ to, color, children }) {
	return (
		<Link
			to={to}
			className={`inline-block font-bold border-2 border-black py-1 px-3 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-brutal-sm active:translate-y-0.5 active:translate-x-0.5 active:shadow-none transition-all duration-100 ${
				color ? `bg-${color}` : ""
			}`}>
			{children}
		</Link>
	);
}

function MobileNavLink({ to, color, onClick, children }) {
	return (
		<Link
			to={to}
			onClick={onClick}
			className={`block font-bold border-2 border-black py-2 px-4 shadow-brutal-sm hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-brutal active:translate-y-0.5 active:translate-x-0.5 active:shadow-none transition-all duration-100 ${
				color ? `bg-${color}` : ""
			}`}>
			{children}
		</Link>
	);
}

export default Navbar;
