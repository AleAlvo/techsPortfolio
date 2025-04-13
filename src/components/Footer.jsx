function Footer() {
	return (
		<footer className="bg-white border-t-3 border-black py-6">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<p className="font-bold">
							© {new Date().getFullYear()}{" "}
							<span className="bg-cyan px-1">Dev Portfolio</span>
						</p>
					</div>

					<div className="flex space-x-4">
						<SocialLink
							href="https://github.com"
							label="GitHub"
							bgColor="bg-light-yellow"
						/>
						<SocialLink
							href="https://linkedin.com"
							label="LinkedIn"
							bgColor="bg-light-cyan"
						/>
						<SocialLink
							href="https://twitter.com"
							label="Twitter"
							bgColor="bg-light-pink"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}

function SocialLink({ href, label, bgColor }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`font-bold border-2 border-black py-1 px-3 ${bgColor} shadow-brutal-sm hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-brutal active:translate-y-0.5 active:translate-x-0.5 active:shadow-none transition-all duration-100`}>
			{label}
		</a>
	);
}

export default Footer;
