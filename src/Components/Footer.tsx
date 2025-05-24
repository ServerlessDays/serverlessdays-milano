const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-between w-screen h-full p-6 pt-0 pb-0 text-xs md:h-16 md:flex-row bg-slate-200 text-slate-600 lg:text-base">
      <div className="flex items-center justify-center pt-3 md:pt-0">
        <p>ServerlessDays Milano {new Date().getFullYear()}</p>
        <div className="ml-6">
          <ul className="flex items-center justify-center gap-4 ">
            <li>
              <a href="https://linktr.ee/serverlessitaly" target="_blank" className="transition-all hover:underline">
                Contacts
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ServerlessItaly" target="_blank" className="transition-all hover:underline">
                Twitter
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
            <li>
              <a href="https://serverlessdays.io/coc" target="_blank" className="transition-all hover:underline">
                Code of Conduct
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pb-4 mt-4 md:mt-0 md:pb-0">
        <p className="text-xs text-center text-gray-500">
          Built with ❤️ by{' '}
          <a href="https://tensi.dev" target="_blank" className="transition-all hover:underline ">
            Federico Tensi
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
