const Footer = () => {
	return (
		<footer className="flex items-center justify-around h-16 text-sm text-center bg-slate-200 text-slate-600 md:text-base">
			<p>© 2024 Serverless Days Milan</p>
			<div></div>
			<p>
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
