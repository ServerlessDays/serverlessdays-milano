import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Contacts',
      href: 'https://linktr.ee/serverlessitaly',
      icon: '📞',
      color: 'from-green-400 to-blue-500'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/ServerlessItaly',
      icon: '🐦',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Meetup',
      href: 'https://www.meetup.com/it-IT/serverless-italy/',
      icon: '🤝',
      color: 'from-red-400 to-pink-500'
    },
    {
      name: 'Code of Conduct',
      href: 'https://serverlessdays.io/coc',
      icon: '📋',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const developers = [
    {
      name: 'Marco Giuseppini',
      href: 'https://www.linkedin.com/in/marco-giuseppini/',
      icon: ''
    },
    {
      name: 'Federico Tensi',
      href: 'https://tensi.dev',
      icon: ''
    },
    {
      name: 'Dennis Dore',
      href: 'https://www.linkedin.com/in/dennisdore//',
      icon: ''
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500 rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-10 -right-10 w-60 h-60 bg-pink-500 rounded-full opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 p-6 sm:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ServerlessDays Milano
                </span>
              </h3>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  🌟
                </motion.span>
                <p className="text-purple-200 font-medium">
                  {currentYear} • Italy's First Serverless Conference
                </p>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-purple-300">
                <span>📅</span>
                <span>October 21st, 2025</span>
                <span>•</span>
                <span>📍</span>
                <span>Milano, Italy</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h4 className="text-lg font-bold mb-4 text-purple-200">Connect With Us</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    className={`group flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r ${link.color} opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="text-sm font-medium text-white sm:block">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  to="/presentation"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-sm font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  <span>🖥️</span>
                  <span>Display View</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Developers Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center lg:text-right"
            >
              <h4 className="text-lg font-bold mb-4 text-purple-200">Website built with ❤️ by</h4>
              <div className="space-y-2">
                {developers.map((dev) => (
                  <motion.a
                    key={dev.name}
                    href={dev.href}
                    target="_blank"
                    className="group flex items-center justify-center lg:justify-end gap-2 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                    whileHover={{ x: -5 }}
                  >
                    <span className="text-lg">{dev.icon}</span>
                    <span className="text-sm font-medium text-purple-200 group-hover:text-white">
                      {dev.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-purple-700/50 pt-6 text-center"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-purple-300">
                © {currentYear} ServerlessDays Milano. All rights reserved.
              </p>

              <div className="flex items-center gap-6 text-xs text-purple-400">
                <span className="flex items-center gap-1">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ⚡
                  </motion.span>
                  Powered by React & TypeScript
                </span>
                <span className="flex items-center gap-1">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    🎨
                  </motion.span>
                  Styled with Tailwind CSS
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
