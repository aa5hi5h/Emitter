import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { CanvasProvider } from "./Context/CanvasContext";
import { ProjectContextProvider } from "./Context/LoadState";
import { ViewModeProvider } from "./Context/ViewMode";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emitter",
  description: "no code webiste builder",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <CanvasProvider>
        <ProjectContextProvider>
          <ViewModeProvider>
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
        <div className="w-full h-full bg-slate-50">
          <Navbar />
          <hr className="border-b-1 border-slate-200" />
          <div>
        {children}
        </div>
        </div>
        </ConvexClientProvider>
        </body>
    </html>
    </ViewModeProvider>
    </ProjectContextProvider>
    </CanvasProvider>
    </ConvexAuthNextjsServerProvider>
  );
}
