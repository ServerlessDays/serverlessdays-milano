import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative w-screen bg-slate-200 text-slate-600">
      <div className="flex flex-col items-center justify-between p-6 space-y-4 text-xs lg:text-base md:flex-row md:space-y-0 md:h-16">
        {/* Left section - Title and Links */}
        <div className="flex flex-col items-center space-y-3 md:flex-row md:space-y-0 md:space-x-6">
          <p className="font-medium">
            ServerlessDays Milano {new Date().getFullYear()}
          </p>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <li>
                <a
                  href="https://linktr.ee/serverlessitaly"
                  target="_blank"
                  className="transition-all hover:underline hover:text-slate-800"
                >
                  Contacts
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ServerlessItaly"
                  target="_blank"
                  className="transition-all hover:underline hover:text-slate-800"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.meetup.com/it-IT/serverless-italy/"
                  target="_blank"
                  className="transition-all hover:underline hover:text-slate-800"
                >
                  Meetup
                </a>
              </li>
              <li>
                <a
                  href="https://serverlessdays.io/coc"
                  target="_blank"
                  className="transition-all hover:underline hover:text-slate-800"
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <Link
                  to="/presentation"
                  className="transition-all hover:underline hover:text-slate-800"
                >
                  Display View
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right section - Credits */}
        <div className="text-center md:text-right">
          <p className="text-xs text-gray-500">
            Built with ❤️ by{' '}
            <a
              href="https://www.linkedin.com/in/marco-giuseppini/"
              target="_blank"
              className="transition-all hover:underline hover:text-gray-700"
            >
              Marco Giuseppini
            </a>
            ,{' '}
            <a
              href="https://tensi.dev"
              target="_blank"
              className="transition-all hover:underline hover:text-gray-700"
            >
              Federico Tensi
            </a>{' '}
            and{' '}
            <a
              href="https://www.linkedin.com/in/dennisdore//"
              target="_blank"
              className="transition-all hover:underline hover:text-gray-700"
            >
              Dennis Dore
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
