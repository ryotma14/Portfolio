import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Harshil Thaker",
    position: "Business Analyst @ Data Zoo",
    text: "Rio has a strong grasp of business needs and consistently delivers front-end solutions that align well with project goals. His ability to turn requirements into intuitive, high-quality interfaces makes collaboration efficient and effective.",
    avatar: memojiAvatar1,
  },
  {
    name: "Rui Li",
    position: "Frontend Developer @ NOW Digital",
    text: "Working alongside Rio on the front-end has been a great experience. Their attention to detail in both design and code makes everything feel polished and thoughtful. They’re also super easy to communicate with, which makes team work smooth and productive.",
    avatar: memojiAvatar2,
  },
  {
    name: "Alvaro Nieto",
    position: "Full-Stack Developer @ ChemDye Scientific Illustrations",
    text: "As a fellow front-end dev, I’ve really enjoyed working with Rio. They write clean, maintainable code and have a great sense for UI/UX. It’s always easy to collaborate and bounce ideas off each other.",
    avatar: memojiAvatar3,
  },
];

export const TestimonialsSection = () => {
  return (
    <div id="testomonials" className="py-16 lg:py-24 sm:scroll-mt-4">
      <div className="container">
        <SectionHeader
          eyebrow="Voices from the Team"
          title="Colleagues on Working with Me"
          description="Their words say it best — here’s what fellow devs and team members shared."
        />

        <div
          className="mt-12 lg:mt-20 flex overflow-x-clip 
        [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4"
        >
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:80s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimial) => (
                  <Card
                    key={testimial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                    // className="w-[300px] flex-shrink-0 md:max-w-md md:p-8"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimial.avatar}
                          alt={testimial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
