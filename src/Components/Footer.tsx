const Footer = () => {
	return (
		<footer className="relative flex items-center justify-around w-screen h-16 p-3 pt-0 pb-0 text-xs bg-slate-200 text-slate-600 lg:text-base">
			<p>Serverless Italy © 2024</p>
			<div className="w-fit">
				<ul className="flex items-center justify-center gap-4 ">
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
			<div className="hidden md:block">
				<p className="">
					Built with ❤️ by{" "}
					<a href="https://tensi.dev" target="_blank" className="transition-all hover:underline ">
						Federico Tensi
					</a>
				</p>
			</div>
		</footer>
	);
};
export default Footer;
