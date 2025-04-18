import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import NextAuthSesstionProvider from "@/Providers/NextAuthSesstionProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nextjs Car Doctor ",
  description: "Generated by Nextjs Car Doctor ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`md:w-11/12 lg:w-10/12 mx-auto ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthSesstionProvider>
        <Navbar />
        <Toaster />
        <main className="min-h-[calc(100vh-305px)]">
        {children}
        </main>
        <Footer />
        </NextAuthSesstionProvider>
      </body>
    </html>
  );
}
