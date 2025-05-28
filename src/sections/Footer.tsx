"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const footerLinks = [
  {
    title: "GitHub",
    href: "https://github.com/ryotma14",
    icon: <FontAwesomeIcon icon={faGithub} className="size-4" />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/ryota-masuz/",
    icon: <FontAwesomeIcon icon={faLinkedin} className="size-4" />,
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30
        [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"
      ></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved</div>
          <nav className="flex flex-col items-center md:flex-row gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
                {link.icon}
                <span className="font-semibold">{link.title}</span>
                {/* <ArrowUpRightIcon className="size-4" /> */}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
