import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DEV.LOG",
  description:
    "A blog dedicated to inspiring a more positive and helpful community around various technical niches from Linux, to programming, and even ROM hacking. A blog ready to serve you the latest in positive community news, updates, and more- DEV.LOG.",
  keywords: [
    "Developer",
    "Dev",
    "Blog",
    "Tech",
    "How to program",
    "Programming",
    "Programmer",
    "Top Developer",
    "Developer tips",
    "Tech tips",
    "Tips",
    "Programming advice",
    "Linux",
    "Linux systems",
    "Arch linux",
    "hyprland",
    "wayland",
    "scripting",
    "ROM",
    "ROM hacking",
    "Pokemon ROM",
    "Pokemon ROM Hacks",
    "Pokemon ROM Hacking",
    "Tech Community",
    "Online community",
    "Positive community",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
