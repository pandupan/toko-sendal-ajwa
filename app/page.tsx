import Navbar from "@/components/layouts/Navbar";
import Alasan from "@/components/pages/LandingPage/Alasan";
import HeroSection from "@/components/pages/LandingPage/HeroSection";
import Terlaris from "@/components/pages/LandingPage/Terlaris";
import Ulasan from "@/components/pages/LandingPage/Ulasan";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Alasan />
      <Terlaris />
      <Ulasan />
    </>
  );
}
