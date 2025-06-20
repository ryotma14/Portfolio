import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Data Zoo",
    // year: "2025",
    title: "Corporate Website",
    results: [
      {
        title:
          "- Built using JavaScript, HTML, CSS, and Contentful (CMS), this website serves as Data Zoo’s primary digital presence. ",
      },
      {
        title:
          "- It enables potential clients to explore the company’s identity verification services, browse blog content managed via Contentful, and submit inquiries through a contact form.",
      },
      {
        title:
          "- The site plays a key role in driving customer engagement and brand visibility.",
      },
    ],
    link: "https://www.datazoo.com/",
    image: lightSaasLandingPage,
  },
  {
    company: "Note Taking App",
    // year: "2022",
    title: "Think Board",
    results: [
      {
        title:
          "- Built a full-stack note-taking app using React, Express, Node.js, and MongoDB.",
      },
      {
        title:
          "- Users can create, update, and delete notes with ease through a responsive UI and RESTful API",
      },
      {
        title:
          "- Integrated Upstash and Redis for rate limiting to enhance security and performance.",
      },
    ],
    link: "https://note-taking-app-h1i1.onrender.com/",
    image: darkSaasLandingPage,
  },
  // {
  //   company: "Quantum Dynamics",
  //   year: "2023",
  //   title: "AI Startup Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/Z7I5uSRHMHg",
  //   image: aiStartupLandingPage,
  // },
];

export const ProjectsSection = () => {
  return (
    <section
      id="project"
      className="scroll-mt-20 lg:scroll-mt-4 pb-16 lg:py-24"
    >
      <div>
        <div className="container">
          <SectionHeader
            eyebrow="Real-World Results"
            title="Featured Projects"
            description="See how I transformed concepts into engineering digital experiences."
          />

          <div className="md:mt-20 flex flex-col mt-10 gap-20">
            {portfolioProjects.map((project, projectImdex) => (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{ top: `calc(64px + ${projectImdex * 40}px)` }} //sticky
              >
                {/* <div
                  className="absolute inset-0 -z-10 opacity-5 "
                  style={{ backgroundImage: `url(${grainImage.src})` }}
                ></div> */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  {/* Grid */}
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company} </span>
                      {/* <span>&bull; </span> */}
                      {/* <span>{project.year}</span> */}
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result, index) => (
                        <li
                          className="flex gap-2 text-sm md:text-base text-white/50"
                          key={index}
                        >
                          {/* <CheckCircleIcon className="size-5 md:size-6" /> */}
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  {/* Grid */}
                  <div className="relative">
                    {/* Make image full height */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-xl border-2 border-black"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
