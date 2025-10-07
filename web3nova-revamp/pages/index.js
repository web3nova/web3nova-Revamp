import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Web3NovaHomepage from "@/components/Hero";
import Navigation from "@/components/Hero/navbar";
export default function Home() {

  return (
    <>
      <Navigation />
      <Web3NovaHomepage />
      {/* Show About only on /about */}
    </>
  );
}
