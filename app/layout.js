import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/lib/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "amora",
  description: "Bringing hearts closer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={inter.className}>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
