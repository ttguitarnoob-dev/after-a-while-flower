import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@heroui/react"
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <>
    
    <section className="flex w-full flex-col items-center justify-center gap-4">
      <HeroSection />
    </section>
    </>
  );
}
