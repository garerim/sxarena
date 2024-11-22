import Header from "@/components/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "SX Arena",
  description: "Serveur Minecraft PvP/Faction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased dark:bg-secondaryBlack bg-[#eee]`}
      >
        <ThemeProvider attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-screen h-screen relative">
            <div className="w-full h-screen absolute top-0 left-0 right-0 -z-10">
              <Image src={'/image/bg.jpg'} className="blur-sm filter brightness-85" layout="fill" objectFit="cover" alt="Background" />
            </div>
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
