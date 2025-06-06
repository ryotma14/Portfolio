"use client"; // このファイル（＝コンポーネント）を Client Component（クライアント側で実行されるReact）として扱うようにNext.jsに指示
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
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
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

// /import {motion} from "framer-motion";

//確認　grid  itemsWrapperClassName
const toolboxItemsFrontend = [
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "TypeScript",
    iconType: TypescriptIcon,
  },
  {
    title: "HTML",
    iconType: HTMLIcon,
  },
  {
    title: "CSS",
    iconType: CssIcon,
  },
  {
    title: "Next.js",
    iconType: NextjsIcon,
  },
];

const toolboxItemsBackend = [
  {
    title: "Express",
    iconType: ExpressIcon,
  },
  {
    title: "Node.js",
    iconType: NodejsIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoIcon,
  },

  {
    title: "PostgreSQL",
    iconType: PostgresqlIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  { title: "Travel", emoji: "🗺️", left: "5%", top: "5%" },
  { title: "Baseball", emoji: "⚾", left: "50%", top: "5%" },
  { title: "Gaming", emoji: "👾", left: "35%", top: "40%" },
  { title: "Photography", emoji: "📷", left: "10%", top: "35%" },
  { title: "Fitness", emoji: "🏋️‍♂️", left: "70%", top: "45%" },
  { title: "Cooking", emoji: "🍲", left: "5%", top: "65%" },
  // { title: "Music", emoji: "🎵", left: "45%", top: "70%" },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {/* <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my thought."
                // className="px-6"
              />

              <div className="w-40 mx-auto md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card> */}
            <Card className="h-[320px] md:col-span-5">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
                className=""
              />
              <ToolboxItems
                items={toolboxItemsFrontend}
                className=""
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItemsBackend}
                className="mt-6"
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              {/* <h3>My Toolbox</h3>
              <p>
                Explore the technologies and tools I use to craft exceptional
                digital experiences.
              </p> */}

              {/* <Image src={bookImage} alt="Book cover" /> */}
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm"
                className="px-6 py-6"
              />
              {/* <h3>Beyond the Code</h3>
              <p>Explore my interests and hobbies beyond the digital realm</p> */}

              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-t from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-right-top"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full flex items-center justify-center
                after:content-[''] after:absolute after:inset-0 
                after:outline after:-outline-offset-2 after:rounded-full after:outline-gray-950/30"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:1.5s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-10"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
