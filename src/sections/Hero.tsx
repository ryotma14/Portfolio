import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StartIcon from "@/assets/icons/star.svg";
import SparcleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import PostgresqlIcon from "@/assets/icons/postgresql.svg";
import MongoIcon from "@/assets/icons/mongo.svg";
import NextjsIcon from "@/assets/icons/next.svg";
import NodejsIcon from "@/assets/icons/node.svg";
import GithubIcon from "@/assets/icons/github.svg";

// const toolboxItems = [
//   { title: "React", iconType: ReactIcon },
//   { title: "JavaScript", iconType: JavascriptIcon },
//   { title: "TypeScript", iconType: TypescriptIcon },
//   { title: "HTML", iconType: HTMLIcon },
//   { title: "CSS", iconType: CssIcon },
//   { title: "Next.js", iconType: NextjsIcon },
//   { title: "Express", iconType: ExpressIcon },
//   { title: "Node.js", iconType: NodejsIcon },
//   { title: "MongoDB", iconType: MongoIcon },
//   { title: "PostgreSQL", iconType: PostgresqlIcon },
//   { title: "Github", iconType: GithubIcon },
// ];
const toolboxItems = [
  { title: "HTML", iconType: HTMLIcon, bgColor: "#e34c26" },
  { title: "CSS", iconType: CssIcon, bgColor: "#264de4" },
  { title: "JavaScript", iconType: JavascriptIcon, bgColor: "#faca29" },
  { title: "React", iconType: ReactIcon, bgColor: "#20232a" },
  { title: "TypeScript", iconType: TypescriptIcon, bgColor: "#3178c6" },
  { title: "Next.js", iconType: NextjsIcon, bgColor: "white" },
  { title: "Express", iconType: ExpressIcon, bgColor: "white" },
  { title: "Node.js", iconType: NodejsIcon, bgColor: "#3C873A" },
  { title: "MongoDB", iconType: MongoIcon, bgColor: "#13aa52" },
  { title: "PostgreSQL", iconType: PostgresqlIcon, bgColor: "#336791" },
  { title: "Github", iconType: GithubIcon, bgColor: "white" },
];

export const HeroSection = () => {
  return (
    <div
      id="home"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      {/* <div className="absolute inset-0  [mask-image: linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]"> */}
      <div className="absolute inset-0 [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute insert-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          {/* <HeroOrbit size={430} rotation={-15}> */}
          <SparcleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparcleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="3s"
        >
          <SparcleIcon className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparcleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="3s"
        >
          <SparcleIcon className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={145}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparcleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="3s"
        >
          <SparcleIcon className="size-3 rounded-full text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-24 text-emerald-300" />
          {/* <SparcleIcon className="size-30 rounded-full bg-emerald-300/20" /> */}
        </HeroOrbit>
      </div>
      {/* 上のコード確認 */}

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[210px] -mb-10"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              {/* Add animation */}
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-md font-medium">
              Available for new projects
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto">
        {/* <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">  tracking-widetracking-widetracking-widetracking-wide*/}
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-8">
          Building Exeptional User Experiences
        </h1>

        <p className="mt-4 text-center text-white/60 md:text-lg">
          Front-end developer skilled in React, TypeScript, and UI/UX design.
          Builds responsive, interactive web interfaces with performance and
          accessibility focus.
        </p>

        {/* <div className="mt-6 flex justify-center gap-4 flex-wrap">
          {toolboxItems.map((item) => (
            <div
              key={item.title}
              className="p-2 rounded-xl border-2 border-black bg-white size-14 flex items-center justify-center"
            >
              <Image src={item.iconType} alt={item.title} className="w-8 h-8" />
            </div>
          ))}
        </div> */}
        <div className="mt-6 flex justify-center flex-wrap gap-2">
          {toolboxItems.map(({ title, iconType: IconComponent, bgColor }) => (
            <div
              key={title}
              className="rounded-xl border-4 border-black size-14 flex items-center justify-center"
              style={{ backgroundColor: bgColor }}
              title={title}
            >
              <IconComponent className="w-11 h-11" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border  border-white/15 px-6 h-12 rounded-xl">
          {/* <span className="font-semibold">🧠 </span> */}
          <span className="font-semibold">Download CV</span>
          <ArrowDown className="size-4" />
        </button>

        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span>🧠</span>
          <span className="font-semibold">Let&rsquo;s Connect</span>
        </button>
      </div>
    </div>
  );
};
