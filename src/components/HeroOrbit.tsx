// import StartIcon from "@/assets/icons/star.svg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  shouldSpin = false,
  spinDuration,
  orbitDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
  orbitDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{ animationDuration: orbitDuration }}
      >
        <div
          className="flex items-start justify-start"
          // className="outline outline-1 outline-red-500 flex items-start"
          // className="border border-red-500"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldSpin === true && "animate-spin")}
            style={{ animationDuration: spinDuration }}
          >
            <div
              className="inline-flex"
              //   className="inline-flex outline outline-1 outline-red-500"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {" "}
              {children}{" "}
            </div>
          </div>
          {/* <StartIcon className="size-28 text-emerald-300" /> */}
        </div>
      </div>
    </div>
    //   上のコード確認 children PropsWithChildren
  );
};
