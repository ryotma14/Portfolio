// import type { Metadata } from "next";
// import { Inter, Calistoga } from "next/font/google"; //Import google font
// import "./globals.css";
// import { twMerge } from "tailwind-merge";
// import Head from "next/head"; //favicon

// const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
// const calistoga = Calistoga({
//   subsets: ["latin"],
//   variable: "--font-serif",
//   weight: ["400"],
// });

// export const metadata: Metadata = {
//   title: "My Portfolio",
//   description: "Created with the help of Frontend Tribe",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="!scroll-smooth">
//       <Head>
//         <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
//       </Head>
//       <body
//         className={twMerge(
//           inter.variable,
//           calistoga.variable,
//           "bg-gray-900 text-white antialiased font-sans"
//         )}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
  icons: {
    icon: "/favicon.ico", // ← public フォルダに配置した favicon のパス
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          // "bg-gray-500 text-white antialiased font-sans"
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
