"use client";
import { useState } from "react";

const sections = ["home", "project", "about", "testomonials", "contact"];

export const Header = () => {
  const [clicked, setClicked] = useState("home");

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav
        className="flex gap-1 px-1 py-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur
                justify-between max-w-[95%] md:max-w-fit mx-auto overflow-x-auto"
      >
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={() => setClicked(section)}
            className={`text-[12px] px-2 py-1 md:text-sm md:px-4 md:py-1.5
                        rounded-full font-semibold transition duration-300 whitespace-nowrap
                        ${
                          clicked === section
                            ? "bg-white text-gray-900"
                            : "text-white hover:bg-white/20"
                        }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  );
};

// export const Header = () => {
//   return (
//     <div className="flex justify-center itens-center fixed top-3 w-full z-10">
//       {/*  <div className="flex justify-center itens-center relative top-3 w-full"> */}
//       <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop">
//         <a href="#" className="nav-item">
//           {" "}
//           Home
//           {/* <span>Home</span> */}
//         </a>
//         <a href="#project" className="nav-item">
//           {" "}
//           Project
//         </a>
//         <a href="#" className="nav-item">
//           {" "}
//           About
//         </a>
//         <a
//           href="#"
//           className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
//         >
//           {" "}
//           Contact
//         </a>
//       </nav>
//     </div>
//   );
// };
