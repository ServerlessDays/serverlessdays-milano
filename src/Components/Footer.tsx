const Footer = () => {
	return (
		<footer className="flex items-center justify-between h-16 p-2 text-xs text-center bg-slate-200 text-slate-600 md:text-base">
			<p>Serverless Italy © 2024</p>
			<div>
				<ul className="flex items-center justify-center gap-4">
					<li>
						<a href="https://twitter.com/ServerlessItaly" target="_blank" className="transition-all hover:underline">
							Twitter
						</a>
					</li>
					<li>
						<a href="https://linktr.ee/serverlessitaly" target="_blank" className="transition-all hover:underline">
							Linktr.ee
						</a>
					</li>
					<li>
						<a
							href="https://www.meetup.com/it-IT/serverless-italy/"
							target="_blank"
							className="transition-all hover:underline"
						>
							Meetup
						</a>
					</li>
				</ul>
			</div>
			<p className="hidden md:block">
				Built with ❤️ by{" "}
				<a href="https://tensi.dev" target="_blank" className="transition-all hover:underline ">
					Federico Tensi
				</a>
				, a community member.
			</p>
		</footer>
	);
};
export default Footer;
