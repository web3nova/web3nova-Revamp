import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import About from "../components/About/AboutPage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  // Check if the route is "/about"
  const isAboutPage = router.pathname === "/about";

  return (
    <>
      {/* Show About only on /about */}
      {isAboutPage ? (
        <About />
      ) : (
        <main className="min-h-screen flex items-center justify-center bg-black text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to Web3Nova 🚀
          </h1>
        </main>
      )}
    </>
  );
}
